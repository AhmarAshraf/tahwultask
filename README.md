# TAHWUL Dashboard

Frontend UI implementation for a digital transformation dashboard + “Perspective” detail screen (pixel-focused, componentized, and responsive).

**Live demo:** https://tahwultask.vercel.app/

## How To Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:
```bash
npm run build
npm start
```

## What’s Included

- **Dashboard (`/`)**
  - Project timeline
  - Summary KPI cards
  - Progress status by perspective
  - Performance chart
  - Compliance score gauge + Audit readiness gauge
  - Recent activities + Top performers

- **Perspective detail (`/perspectives`)**
  - Header (category + title + progress ring)
  - Evidence summary cards
  - Tabs: Overview / Evidence
  - Overview grid (left labels + right content)
  - Evidence table + comments + recent activities (Evidence tab only)

- **Other routes**
  - `tasks`, `documents`, `reports`, `users` are currently “coming soon” placeholders to keep navigation stable.

## How It’s Built (Engineering Notes)

- **Next.js (Pages Router)** + **Tailwind CSS**
- **Clean component boundaries**
  - `components/layout/` – app shell (`Layout`, `Header`, `Sidebar`)
  - `components/dashboard/` – dashboard widgets (timeline, charts, cards, gauges)
  - `components/perspectives/` – perspective detail modules (tabs, overview grid, table, comments, panels)
  - `components/ui/` – small reusable primitives (e.g. tabs, card)
- **Reusable typography + styling**
  - typography utilities and shared styles live in `app/globals.css` (`typo-*`, sidebar classes, badges, etc.)
- **Assets**
  - icons in `public/icons/`
  - avatars in `public/avatars/`
- **Mock data**
  - `lib/mockData.js` (single source of truth for UI content)

## Assumptions

- This is a **UI-focused** implementation with **mock data** (no backend).
- Desktop-first layout, but it remains usable on smaller screens:
  - sidebar collapses labels on small widths
  - grids reflow and long text wraps
- Icons are treated as static assets in `public/icons/`.

## Deployment

Deployed on **Vercel** from the GitHub repository.

## What I’d Improve With More Time

- Add a real design token system (Tailwind theme variables for all colors/spacing to eliminate remaining one-off hex values).
- Add a mobile sidebar toggle (hamburger) for better usability on very small screens.
- Add automated checks:
  - Playwright smoke tests
  - basic accessibility pass (keyboard/focus/aria)
  - optional visual regression snapshots for pixel changes
- Add TypeScript for future type checking and safer refactors.
