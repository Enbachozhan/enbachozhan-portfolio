# V. Enbachozhan – Portfolio (React + Vite + Tailwind)

## Run locally
1. Install Node.js (LTS) from https://nodejs.org
2. In this folder run:
   npm install
   npm run dev
3. Open the address shown (usually http://localhost:5173).

## Edit content
All text lives in `src/data.js`. Photo: `public/enbachozhan.jpg`. Resume: `public/Enbachozhan_Resume.pdf` (keep the same name when replacing).

## Contact form
Without a backend, the form opens the visitor's email app (mailto). To send directly from the site, create a free form at https://formspree.io and replace the `window.location.href = ...` line in `src/App.jsx` with a `fetch` POST to your Formspree URL.

## Deploy
Vercel: push to GitHub, import the repo at vercel.com (Vite is auto-detected), click Deploy.
Netlify: build command `npm run build`, publish directory `dist`.
