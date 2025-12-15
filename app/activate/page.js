// =============================
// app/activate/page.js
// =============================
"use client";
import { useRouter } from "next/navigation";
import { saveLicense } from "../lib/license";


export default function Activate() {
const router = useRouter();


function activate() {
const key = prompt("Enter activation code");
if (!key) return;
saveLicense(1); // 1 month
router.push("/");
}


return (
<main style={{ padding: 30 }}>
<h1>Activate License</h1>
<p>After payment, enter your activation code.</p>
<button onClick={activate}>Activate</button>
</main>
);
}