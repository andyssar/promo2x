# 2extract promo landing on Next.js

This project is a manual Next.js rebuild of the published Framer landing page at `/promo`.

## What is included

- Next.js App Router structure
- `/promo` route
- CSS Modules styling
- ready for Vercel deploy
- no extra UI libraries required

## 1) Install locally

Requirements:

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000/promo
```

## 2) Production build

```bash
npm run build
npm run start
```

## 3) Change links

Inside the code these links point to your current routes:

- `/app/signup`
- `/signin`
- `/about`
- `/terms`
- `/privacy`
- `/aup`

If your real routes are different, update them in:

- `components/PromoPage.tsx`

## 4) Best free hosting for this

### Option A — Vercel

Best option for Next.js.

Flow:

1. Create a GitHub repo
2. Upload this project there
3. Log in to Vercel
4. Import the GitHub repo
5. Click Deploy

Usually no extra config is needed for a standard Next.js app.

### Option B — Netlify

Also possible, but Vercel is usually smoother for pure Next.js projects.

## 5) Simple GitHub upload flow

Create repo, then in terminal inside project folder:

```bash
git init
git add .
git commit -m "Initial landing rebuild"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## 6) Notes

- This is not an exported Framer source. It is a clean manual rebuild.
- Decorative visuals were recreated in CSS and SVG to stay lightweight.
- If you want even closer visual parity, the next step is to copy exact images/icons/background assets from the live Framer page and wire them into `/public`.
