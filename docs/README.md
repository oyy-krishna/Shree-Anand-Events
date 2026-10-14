# Shree Anand — Website Project

**Client:** Shree Anand Caterers & Decorators, Noida  
**Team:** Bennett University, B.Tech CSE (university project)  
**Live URL:** [NEEDS CLIENT CONFIRMATION: domain]  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · Vercel  

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/<your-org>/shree-anand.git
cd shree-anand

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local — fill in RESEND_API_KEY and NEXT_PUBLIC_SITE_URL

# 4. Start the dev server
npm run dev
# → http://localhost:3000
```

## Build & Deploy

```bash
npm run build    # production build
npm run start    # run production build locally
npm run lint     # ESLint check
npm run format   # Prettier format
```

Deployment is automatic: push to `main` → Vercel deploys.

---

## Project Structure

```
app/            Next.js App Router pages and API routes
components/     Reusable React components
  layout/       Header, Footer, Nav
  ui/           Button, Card, Section, Badge, etc.
  sections/     Page-level sections (Hero, Stats, CTA…)
  forms/        EnquiryForm, FormField, etc.
content/
  blog/         MDX blog posts
lib/            Utilities (tokens, metadata factory, gallery data)
public/
  images/       Web-optimised photos (WebP + JPEG fallback)
docs/           Project documentation (this folder)
```

## Docs

| File | Purpose |
|---|---|
| [decisions.md](decisions.md) | Every design and tech decision with rationale |
| [content-todo.md](content-todo.md) | Missing content, unconfirmed facts, client blockers |
| [qa-report.md](qa-report.md) | Lighthouse scores, a11y audit, cross-browser results (Chunk 9) |

---

## Development Chunks

| Chunk | Status | Description |
|---|---|---|
| 0 | ✅ Done | Setup, asset audit, plan |
| 1 | ⏳ Pending | Design system, global layout, components |
| 2 | ⏳ Pending | Home page |
| 3 | ⏳ Pending | About Us, Our Services |
| 4 | ⏳ Pending | Four service pages |
| 5 | ⏳ Pending | Gallery |
| 6 | ⏳ Pending | Blog |
| 7 | ⏳ Pending | Contact / Get a Quote |
| 8 | ⏳ Pending | SEO |
| 9 | ⏳ Pending | Performance, accessibility, QA |
| 10 | ⏳ Pending | Deployment and HTTPS |
| 11 | ⏳ Pending | Handover and submission pack |

---

## Client Contact

- **Phone 1:** +91 98185 23902  
- **Phone 2:** +91 99715 07990  
- **Email:** Shreeanand.caterers7@gmail.com  
- **Facebook:** facebook.com/ShreeAnandcaterers  
- **Address:** Plot #1, Sector 65, FNG Expressway Service Rd, Noida, UP 201009
