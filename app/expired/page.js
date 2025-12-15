// =============================
// app/expired/page.js
// =============================
"use client";
import Link from "next/link";


export default function Expired() {
return (
<main style={{ padding: 30 }}>
<h1>Subscription expired</h1>
<p>Your access has ended.</p>
<Link href="/pricing">
<button>Renew</button>
</Link>
</main>
);
}