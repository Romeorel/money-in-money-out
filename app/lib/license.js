// =============================
// app/lib/license.js
// =============================
export function getLicense() {
if (typeof window === "undefined") return null;
const raw = localStorage.getItem("license");
return raw ? JSON.parse(raw) : null;
}


export function isLicenseValid() {
const lic = getLicense();
if (!lic) return false;
return new Date() < new Date(lic.expiresAt);
}


export function saveLicense(months = 1) {
const expiresAt = new Date();
expiresAt.setMonth(expiresAt.getMonth() + months);
localStorage.setItem(
"license",
JSON.stringify({ expiresAt })
);
}