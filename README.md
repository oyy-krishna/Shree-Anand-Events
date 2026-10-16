# Shree Anand Caterers & Decorators

Production website for **Shree Anand** (wedding planning, catering, décor, events) — Noida.  
University client project · hand-coded Next.js · no website builders.

Full project docs: [`docs/README.md`](docs/README.md) · Chunk 0 plan: [`docs/chunk-0-plan.md`](docs/chunk-0-plan.md)

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · MDX blog · Resend · Vercel

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

## Important

- Never invent client facts — see `docs/content-todo.md`
- Use committed assets in `public/images/` and the curated inventory in `docs/asset-inventory.md`
- Secrets only in `.env.local` (never commit)
