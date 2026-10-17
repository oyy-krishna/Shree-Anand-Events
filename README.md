# Shree Anand Events

Production website for **Shree Anand Events** — luxury wedding planning, catering, décor, and event experiences in Noida.

Live site: [https://shreeanandevents.com/](https://shreeanandevents.com/)

This repository contains the production Next.js site used to market the brand, present services, highlight gallery work, publish blog content, and capture enquiries.

## Stack

Next.js 16 · TypeScript · Tailwind CSS v4

## Features

- Premium event-brand presentation
- Service pages for wedding planning, catering, décor, and event management
- Gallery and blog sections
- Contact and enquiry form flow
- SEO-friendly app structure

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Notes

- Real secrets stay in `.env.local` and are never committed.
- Keep the live site in sync with the approved content and assets in `public/` and `content/`.
- Use the repo for production code only; generated caches are cleaned locally before deployment.
