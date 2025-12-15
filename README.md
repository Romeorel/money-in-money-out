This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Money Control – Simple Monthly Finance Tracker

A desktop-first, frontend-only money control app designed for people who want clear monthly visibility of their income and expenses.

No accounts. No passwords. No complexity.

🚀 What This App Does

Track money in / money out

See your monthly result instantly

Works offline after activation

Data stored locally in your browser

Export your data as CSV

This project is intentionally simple and practical.

🎯 Who This Is For

Individuals with regular internet access

Desktop / laptop users

People who want control, not fancy charts

Users who prefer tools over social apps

💳 Pricing Model (Concept)

Free: Limited usage

Pro (Monthly): Unlimited entries + export

Payments are handled manually. After payment, users receive an activation code.

🧩 Pages Overview

/pricing → Pricing & explanation

/activate → Enter activation code

/ → Dashboard (protected)

/export → Export CSV

/expired → Subscription expired notice

🛠️ Tech Stack

Next.js (App Router)

JavaScript only (no TypeScript)

React

localStorage for persistence

Vercel for hosting

No backend. No database. No external APIs.

▶️ Running Locally
npm install
npm run dev

Open:

http://localhost:3000
🌍 Deployment

This project is deployed on Vercel.

Every push to the main branch triggers an automatic deployment.

⚠️ Disclaimer

This app is an MVP intended to validate real user needs.

Client-side storage is not secure against advanced users. Security and backend validation can be added later if needed.