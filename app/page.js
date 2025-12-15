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
    const amount = prompt("Amount?");
    if (!amount) return;
    const next = [...items, { type, amount: Number(amount) }];
    setItems(next);
    localStorage.setItem("items", JSON.stringify(next));
  }


  const income = items.filter(i => i.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = items.filter(i => i.type === "expense").reduce((a, b) => a + b.amount, 0);

  function removeSubscriptionNow() {
  if (!confirm("End your subscription now? Access will stop immediately.")) return;
  localStorage.removeItem("license");
  location.href = "/pricing";
}


  return (
    <main style={{ padding: 30 }}>
      <h1>Money Dashboard</h1>
      <p>Income: {income} Ar</p>
      <p>Expense: {expense} Ar</p>
      <p>Result: {income - expense} Ar</p>


      <button onClick={() => addItem("income")}>Add Income</button>
      <button onClick={() => addItem("expense")}>Add Expense</button>


      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i.type} - {i.amount} Ar</li>
        ))}
      </ul>

      <Link href="/export">Export CSV</Link>
    </main>
  );
}