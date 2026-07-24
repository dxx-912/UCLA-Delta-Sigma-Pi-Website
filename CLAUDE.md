# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for UCLA Delta Sigma Pi, Xi Omicron chapter — a migration of the chapter's
Squarespace site (ucladsp.com) to a self-hosted Next.js app, rebuilt to look ~90%
identical to the original with a small set of scoped enhancements.

## Commands

```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build (also type-checks and lints)
npm run start   # serve the production build
npm run lint    # eslint
```

There is no test suite. `npm run build` is the primary correctness gate — it runs
`tsc` type-checking and `next lint` as part of the build.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v3 for styling
- Framer Motion for the scoped animations (carousel, nav/FAQ transitions)
- Deployed on Vercel

## Architecture

**Content is data, not markup.** All content that changes on a schedule (exec board
each term, offers each year, roster each cycle) lives in typed files under `data/`
so future officers can update it without touching layout code:

- `data/leadership.ts` — 13-officer exec board (name/title/bio) + `currentTerm`
- `data/actives.ts` — full roster grouped by pledge class
- `data/offers.ts` — ~357 placement records across 11 years. Each record stores the
  raw text after the em dash verbatim in `detail` (the source mixes
  "Company (Location)" and "Company, Role" formats — do not normalize or reorder it)
- `data/careers.ts` — Careers Overview industry sections + intro copy
- `data/faq.ts` — 8 recruitment Q&A pairs

**Routes** (`app/`) match the original Squarespace slugs exactly — `/placements-1`
is Careers Overview and `/careers` is Our Offers (do not "clean up" these slugs):
`/` `/leadership` `/actives` `/placements-1` `/careers` `/join-us` `/faq`.

**Shared chrome** (`Nav`, `Footer`) is rendered once in `app/layout.tsx`. The footer
copyright year is computed at render (`new Date().getFullYear()`), never hardcoded.

**Images are placeholders.** Every real photo/headshot/logo/flyer is a labeled gray
box via `components/Placeholder.tsx` — never a fabricated or AI-generated image.
Replacing one is a drop-in at the same slot.

**Scroll reveal is a progressive enhancement.** `components/Reveal.tsx` adds a
`reveal` class; the hide-then-fade-in CSS in `app/globals.css` is gated on
`html.js` (set by an inline script in the layout) and `prefers-reduced-motion`, so
no-JS and reduced-motion users always see fully-visible content. Any new
"animate in on scroll" section should use `Reveal`, not a bare Framer `motion` node
with `initial: { opacity: 0 }` (that would hide content in the SSR HTML).

## Source of truth

The rebuild was driven by two inputs (kept outside the repo, on the Desktop): a PDF
content brief (authoritative for all text/data, reproduced verbatim) and full-page
screenshots of the live site (authoritative for all visual design). If you extend a
page, match the screenshots for layout and the brief for copy.
