# Shree Anand Caterers & Decorators

Production website for **Shree Anand** — luxury wedding planning, catering, décor, and event experiences in Noida.

Live site: [https://shreeanandevents.com/](https://shreeanandevents.com/)

This repository contains the Next.js project used to build and maintain the company website, including landing pages, blog content, gallery structure, contact flow, and project documentation.

Full project docs: [`docs/README.md`](docs/README.md) · Chunk 0 plan: [`docs/chunk-0-plan.md`](docs/chunk-0-plan.md)

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · MDX blog · Resend · Vercel

## Features

- Premium wedding/event brand presentation
- Service pages for planning, catering, décor, and events
- Gallery and blog sections
- Contact and enquiry form integration
- SEO-friendly app structure

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run format` | Prettier |

## Project notes

- Never invent client facts — see [`docs/content-todo.md`](docs/content-todo.md)
- Use committed assets in `public/images/` and the curated inventory in [`docs/asset-inventory.md`](docs/asset-inventory.md)
- Secrets only in `.env.local` (never commit)
- The live production site is available at [https://shreeanandevents.com/](https://shreeanandevents.com/)
