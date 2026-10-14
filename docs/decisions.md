# Decisions Log

Every significant design or technical decision is recorded here so team members can defend choices in a viva or client meeting.

Last updated: 14 Oct 2026

---

## D01 — Framework: Next.js 15 with App Router

**Date:** 14 Oct 2026  
**Decision:** Use Next.js 15 (App Router) with TypeScript.  
**Alternatives considered:** Plain HTML/CSS/JS, Astro, Remix.  
**Rationale:**
- App Router provides Server Components (no JS shipped for static content → faster load)
- Built-in `next/image` solves the brief's image optimisation requirement automatically
- File-based routing gives every page its own URL with zero configuration
- Vercel (the deployment target) is built by the same team — zero-config deploy
- TypeScript catches errors at compile time — important for a viva where every line must be explainable
- Industry standard in 2026 — faculty are likely to recognise it

---

## D02 — Styling: Tailwind CSS v4

**Date:** 14 Oct 2026  
**Decision:** Tailwind CSS v4 (CSS-first config via `@theme` in a `.css` file).  
**Alternatives considered:** Tailwind v3, plain CSS modules, styled-components.  
**Rationale:**
- v4 is stable, released Jan 2025, and is the current recommended version
- CSS-first config (`@theme { --color-gold: … }`) means all design tokens live in one CSS file — easier to read and explain than `tailwind.config.js`
- Utility-first keeps components self-contained — no separate `.module.css` files to maintain
- No runtime JS (unlike styled-components) — better performance

---

## D03 — Typography: Libre Baskerville + Poppins

**Date:** 14 Oct 2026  
**Decision:** Libre Baskerville (headings, display) + Poppins (body, UI).  
**Alternatives considered:** Cormorant Garamond, Playfair Display, Inter.  
**Rationale:**
- The client's own deck already uses this pairing — consistency with brand materials
- Libre Baskerville is a serif with engraved, classical letterforms that echo the gold crest logo's ornate style
- Poppins is clean and legible at small sizes across all weights — good for body copy and navigation
- Both are available on Google Fonts and self-hosted by `next/font/google` at zero layout shift
- Cormorant Garamond (alternative) would be more editorial but lighter — less legible on mobile at small sizes

---

## D04 — Primary Logo: Gold Crest (Logo A)

**Date:** 14 Oct 2026  
**Decision:** Use the gold crest logo as the working primary.  
**Status:** ⚠️ PENDING CLIENT CONFIRMATION (see content-todo.md F2)  
**Rationale:**
- Most premium and wedding-focused of the three variants
- Matches the Expo Mart "Premium Theme" aesthetic
- Already supplied as a digital file (others not yet received)
- "SHREE ANAND" and "Wedding Planner" are clearly legible

**Outstanding:** Need transparent-background PNG or SVG. Current file has opaque cream background — unusable on dark hero and footer.

---

## D05 — Colour Strategy: Dark hero / light body / dark footer

**Date:** 14 Oct 2026  
**Decision:** Three-zone page rhythm: dark burgundy-wine hero, cream-white body sections, dark wine footer.  
**Rationale:**
- Luxury Indian wedding aesthetic — deep, rich colours convey premium quality
- Photography is the hero content; dark backgrounds make colourful event photos pop
- Cream body sections maintain readability and contrast (WCAG AA compliant)
- Gold accents used sparingly — dividers, CTAs, icon highlights only — to avoid clutter

---

## D06 — Image Handling: WebP/AVIF + JPEG fallback via next/image

**Date:** 14 Oct 2026  
**Decision:** All photos committed as WebP (primary) with JPEG fallback. AVIF enabled in next.config.ts. Lazy loading on all below-the-fold images.  
**Rationale:**
- WebP is ~30% smaller than JPEG at equivalent quality
- AVIF is ~50% smaller but has slightly lower browser support (hence fallback)
- next/image handles format negotiation, srcset and lazy loading automatically
- Explicit `width` and `height` props prevent Cumulative Layout Shift (CLS)
- Original high-resolution files kept outside the repo (gitignored) — only optimised web versions committed

---

## D07 — Form: Next.js API Route + Resend

**Date:** 14 Oct 2026  
**Decision:** Enquiry form posts to `/api/enquiry`, which uses Resend to email the company.  
**Alternatives considered:** Formspree, EmailJS, Netlify Forms.  
**Rationale:**
- No third-party form service means no external dependency or extra cost
- Resend has a generous free tier (3,000 emails/month) and excellent deliverability
- Server-side handling means the API key is never exposed to the browser
- WhatsApp deep-link (`https://wa.me/...`) provided as a fallback for users who prefer it
- Honeypot field + rate limiting added for spam protection (Chunk 7)

---

## D08 — Blog: MDX files in the repo

**Date:** 14 Oct 2026  
**Decision:** Blog posts as `.mdx` files in `content/blog/`. No CMS.  
**Alternatives considered:** Contentful, Sanity, Notion API.  
**Rationale:**
- Zero cost, no external dependency
- Posts are version-controlled alongside the code — easy to review and roll back
- MDX allows React components inside posts (e.g. a CTA band, image carousel)
- The team can write posts in any text editor and commit them via Git
- If the client eventually wants a CMS, migrating MDX → Contentful/Sanity is straightforward

---

## D09 — Deployment: Vercel from GitHub

**Date:** 14 Oct 2026  
**Decision:** Auto-deploy from the `main` branch to Vercel.  
**Rationale:**
- Zero-config for Next.js (Vercel built it)
- Automatic HTTPS with Let's Encrypt
- Branch preview URLs for every PR — faculty can review before merge
- Environment variables managed in Vercel dashboard — never in the repo
- Free Hobby tier is sufficient for a university project

---

## D10 — Expo Mart Proposal: Confidential until confirmed

**Date:** 14 Oct 2026  
**Decision:** No content from `Expo_Mart_21_Nov.pdf` will appear on the live site until the client confirms the photos may be shown publicly.  
**Rationale:**
- The proposal is for a named client event (India Expo Mart Lawn, 21 Nov 2026)
- Publishing another client's event details without permission is a privacy and business risk
- The event date is in the future — showing it as "completed work" would be inaccurate
