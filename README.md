# UCLADSP-Website

Website for UCLA Delta Sigma Pi, Xi Omicron chapter (ucladsp.com) — a Next.js
rebuild of the chapter's site.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build (type-checks + lints) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · deployed on Vercel.

## Editing content

Chapter content lives in typed data files under [`data/`](./data) — update these to
change the exec board, active roster, career offers, or FAQ without editing page
layout. All photos, headshots, and logos are clearly-labeled placeholders waiting
for the real assets to be dropped in. See [CLAUDE.md](./CLAUDE.md) for architecture
notes.
