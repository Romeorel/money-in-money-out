// =============================
// app/page.js (Dashboard)
// =============================
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLicenseValid } from "./lib/license";
import Link from "next/link";


export default function Dashboard() {
  const router = useRouter();
  const [items, setItems] = useState([]);


  useEffect(() => {
    if (!isLicenseValid()) router.push("/pricing");
    const saved = localStorage.getItem("items");
    if (saved) setItems(JSON.parse(saved));
  }, []);


  function addItem(type) {
    let value;

    while (true) {
      value = prompt("Enter amount (numbers only)");

      if (value === null) return;

      value = value.trim();
      if (/^\d+(\.\d+)?$/.test(value)) break;

      alert("Invalid input. Please enter numbers only.");
    }

    const amount = Number(value);

    const newItem = {
      type,
      amount,
      _new: true,
    };

    const next = [...items, newItem];
    setItems(next);
    localStorage.setItem("items", JSON.stringify(next));

    // Remove animation flag after 200ms
    setTimeout(() => {
      setItems(current =>
        current.map(i => ({ ...i, _new: false }))
      );
    }, 200);
  }

  function removeSubscriptionNow() {
    if (!confirm("End your subscription now? Access will stop immediately.")) return;
    localStorage.removeItem("license");
    location.href = "/pricing";
  }

  function deleteItem(index) {
    setItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, _deleting: true } : item
      )
    );

    setTimeout(() => {
      const next = items.filter((_, i) => i !== index);
      setItems(next);
      localStorage.setItem("items", JSON.stringify(next));
    }, 200);
  }

  function editItem(index) {
    let value;

    while (true) {
      value = prompt("Edit amount (numbers only)", items[index].amount);

      if (value === null) return;

      value = value.trim();
      if (/^\d+(\.\d+)?$/.test(value)) break;

      alert("Invalid input. Please enter numbers only.");
    }

    const next = [...items];
    next[index] = {
      ...next[index],
      amount: Number(value),
      _editing: true,
    };

    setItems(next);
    localStorage.setItem("items", JSON.stringify(next));

    // Remove highlight after 200ms
    setTimeout(() => {
      setItems(current =>
        current.map((i, idx) =>
          idx === index ? { ...i, _editing: false } : i
        )
      );
    }, 200);
  }

  const income = items.filter(i => i.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = items.filter(i => i.type === "expense").reduce((a, b) => a + b.amount, 0);

  return (
    <main style={{ padding: 30 }}>
      <h1>Money Dashboard</h1>
      <p>Income: {income} Ar</p>
      <p>Expense: {expense} Ar</p>
      <p style={{ transition: "opacity 0.2s ease" }}>Result: {income - expense} Ar</p>


      <button onClick={() => addItem("income")}>Add Income</button>
      <button onClick={() => addItem("expense")}>Add Expense</button>


      <ul>
        {items.map((i, idx) => (
          <li key={idx} style={{
            marginBottom: 8,
            padding: "4px 6px",
            opacity: i._new ? 0 : 1,
            backgroundColor: i._editing ? "#fff3cd" : "transparent",
            transition: "opacity 0.2s ease, background-color 0.2s ease",
          }}>
            {i.type === "income" ? "+" : "-"} {i.amount} Ar

            <button
              onClick={() => editItem(idx)}
              style={{ marginLeft: 8 }}
            >
              ✏️ Edit
            </button>

            <button
              onClick={() => deleteItem(idx)}
              style={{ marginLeft: 6 }}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>


      <Link href="/export">Export CSV</Link>
    </main>
  );
}