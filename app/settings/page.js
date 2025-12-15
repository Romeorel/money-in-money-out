// =============================
// app/settings/page.js
// =============================
"use client";
export default function Settings() {
function reset() {
if (confirm("Reset all data?")) {
localStorage.clear();
location.reload();
}
}


return (
<main style={{ padding: 30 }}>
<h1>Settings</h1>
<button onClick={reset}>Reset all data</button>
</main>
);
}