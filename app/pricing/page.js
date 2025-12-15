// =============================
// app/pricing/page.js
// =============================
"use client";
import Link from "next/link";


export default function Pricing() {
return (
<main style={{ padding: 30 }}>
<h1>Pricing</h1>


<h2>Free</h2>
<ul>
<li>Manual tracking</li>
<li>Local data</li>
</ul>


<h2>Pro – Monthly</h2>
<ul>
<li>Unlimited entries</li>
<li>Monthly reports</li>
</ul>


<p><strong>Price:</strong> Monthly payment</p>


<Link href="/activate">
<button>Activate after payment</button>
</Link>
</main>
);
}