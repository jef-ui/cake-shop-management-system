# My Sweets by Jesha — Static Prototype

A click-through, static HTML/CSS/JS mockup of the Cake Shop Management System UI. No backend, no build step, no dependencies — every page works by itself.

**This is a prototype only.** All data (products, orders, sales, users, etc.) is hardcoded sample data in `js/app.js`. Nothing here is connected to the real Laravel application or its database.

## Pages
- `index.html` — Login (any input logs you in)
- `dashboard.html`
- `categories.html`
- `products.html`
- `customers.html`
- `orders.html`
- `pos.html` — has a working cart, out-of-stock modal, and a simulated QR scan button
- `sales.html` + `receipt.html`
- `payments.html`
- `reports.html`
- `notifications.html`
- `users.html`
- `audit-logs.html`

## Run locally
No install needed. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to Vercel
This is a zero-config static site — Vercel will detect it automatically:

1. Push this folder to its own Git repo.
2. Import the repo in Vercel.
3. Framework preset: **Other** (or leave as detected). Build command: none. Output directory: root (`.`).
4. Deploy.

No environment variables, no build step, nothing else to configure.
