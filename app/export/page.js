// =============================
// app/export/page.js
// =============================
"use client";

export default function ExportPage() {
  function exportCSV() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");

    if (items.length === 0) {
      alert("No data to export");
      return;
    }

    // CSV header
    const header = "type,amount\n";

    // CSV rows
    const rows = items
      .map(item => `${item.type},${item.amount}`)
      .join("\n");

    const csv = header + rows;

    // Create file
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Download
    const a = document.createElement("a");
    a.href = url;
    a.download = "money-export.csv";
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>Export Data</h1>
      <p>Download your monthly data as CSV.</p>
      <button onClick={exportCSV}>Download CSV</button>
    </main>
  );
}