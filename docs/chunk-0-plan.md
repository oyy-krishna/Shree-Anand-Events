# Chunk 0 — Setup, Asset Audit & Plan

**Status:** Complete — awaiting approval to start Chunk 1  
**Date:** 14 Oct 2026  
**Stack locked:** Next.js 16.4 (App Router) · TypeScript · Tailwind CSS v4 · MDX blog · Resend enquiry API · Vercel

---

## 1. What already exists in the repo

Scaffold from the first Chunk 0 pass is in place:

- Next.js App Router + TypeScript + ESLint + Prettier
- Folder layout: `app/`, `components/{layout,ui,sections,forms}/`, `content/blog/`, `lib/`, `public/images/`, `docs/`, `raw-assets/` (gitignored)
- Brand fonts wired in `app/layout.tsx` (Libre Baskerville + Poppins)
- Placeholder home page, `.env.example`, design-token stubs
- Both compressed client PDFs copied into `raw-assets/` and images extracted

This document closes Chunk 0: stack confirmation, sampled tokens, asset inventory, conflicts/gaps, and files still needed from you.

---

## 2. Stack confirmation (locked)

| Choice | Decision | Why |
|---|---|---|
| Framework | **Next.js 16 App Router + TypeScript** | Real URLs per page, `next/image`, Server Components, viva-explainable, Vercel-native |
| CSS | **Tailwind CSS v4** (`@theme` in `globals.css`) | Tokens in one place, no runtime CSS-in-JS |
| Blog | **MDX in-repo** | No CMS cost; version-controlled posts |
| Forms | **`/api/enquiry` + Resend** + WhatsApp fallback | No third-party form widget; key stays server-side |
| Deploy | **Vercel from GitHub** | Automatic HTTPS; faculty can open a public URL |
| UI libs | **None** | Hand-built components only |

No change from the brief’s default proposal. Recorded in `docs/decisions.md` (D01–D10).

**Note:** Docs previously said “Next.js 15”; `package.json` is **16.4.0**. Decisions/README are updated to match.

---

## 3. Design concept (short)

**One line:** Luxury Indian wedding planner — dark wine hero, cream body, gold restraint, photography first.

**Page rhythm:** Dark burgundy/wine hero → cream content sections → dark wine footer. Gold only on CTAs, rules, and focus rings.

**Typography:** Libre Baskerville (display/headings) + Poppins (body/UI) — matches the client deck and the crest’s engraved feel.

**Hero idea (Chunk 2):** Full-bleed real entrance or stage photo (e.g. profile `p10-img01` or `p12-img06`), brand name as the hero signal, one line (“We create and you celebrate.”), one CTA group. No stats or cards in the first viewport.

---

## 4. Design tokens (sampled — not guessed)

### Gold + cream — gold crest logo (`public/images/logo/shree-anand-crest-logo.jpg`)

| Token | Hex | Sample source |
|---|---|---|
| cream | `#fdf6e4` | Logo background corner |
| gold-dark | `#8d651f` | Darkest lettering metal |
| gold-primary | `#cdaa58` | Mid lettering / ornament |
| gold-light | `#e8bc5d` | Highlight shimmer |
| cream-ribbon | `#eedfb3` | “Wedding Planner” ribbon fill |

### Premium Theme board — profile extract `p02-img02.jpeg` (Stitch Palettes swatches)

| Token | Hex | Board label |
|---|---|---|
| golden-brown | `#a0551d` | DMC 3826 Golden Brown |
| sand / tan | `#b17d45` | DMC 436 Tan |
| terracotta | `#a15344` | DMC 356 Medium Terra Cotta |
| terracotta-deep | `#7a2f2e` | DMC 3777 Very Dark Terra Cotta |
| rosewood | `#4f1a0e` | DMC 3857 Dark Rosewood |
| near-black | `#1f0c06` | DMC 3371 Black Brown |

### Burgundy / wine — Logo B plate roundel + venue photography

| Token | Hex | Sample source |
|---|---|---|
| burgundy | `#52232c` | Logo B maroon field (`expo-mart/p01-img01`) |
| wine | `#360509` | Deep red ceiling drapes (`profile/p18-img01`) |

These replace the earlier approximated values in `globals.css` / `lib/tokens.ts`.

---

## 5. Asset inventory summary

Full tables: `raw-assets/asset-inventory.md` (gitignored with PDFs; a curated copy lives in `docs/asset-inventory.md`).

### Supplied files

| File | Location | Notes |
|---|---|---|
| Gold crest logo | `public/images/logo/shree-anand-crest-logo.jpg` | Working primary; **opaque cream BG** — need transparent PNG/SVG |
| Shree Anand Profile (compressed) | `raw-assets/shree-anand-profile.pdf` | Extracted → `raw-assets/extracted/profile/` |
| Expo Mart 21 Nov (compressed) | `raw-assets/expo-mart.pdf` | Extracted → `raw-assets/extracted/expo-mart/` |
| Logo B (plate roundel) | Embedded 5× in Expo Mart pages | Same file hash; usable as secondary mark only |
| Logo C (wordmark) | Not as a clean standalone file | Seen inside photos only |

### Extraction quality (compressed PDFs)

**Important:** Sources are *compressed* PDFs. Most “USABLE” photos are ~650–1280 px on the long edge and heavily JPEG-compressed. Fine for mid-size gallery cards; weak for full-bleed hero on large desktops. Prefer originals if the client can supply them.

| Source | Extracted | Unique usable photos | Low-res / skip | Notes |
|---|---|---|---|---|
| Profile | 46 files | ~25 event photos | 7 low-res; ~15 flat slide textures (`*img01` var≈0) | Strong wedding entrance/stage set |
| Expo Mart | 19 files | ~8 unique scenes | 10 low-res; 5 identical Logo B | p15-img02 is a Mac/map screenshot — **not** client décor; do not use in gallery |

### Strongest hero / gallery candidates (after crop + WebP)

| File | Likely use |
|---|---|
| `profile/p10-img01` (1280×572) | Hero / entrance |
| `profile/p12-img06`, `p13-img06` | Stage / mandap gallery |
| `profile/p09-img01` | Night entrance |
| `profile/p18-img01` | Chandeliers / drapes detail |
| `profile/p05-img02` | Candelabra detail |
| `expo-mart/p16-img02` (1024×768) | Grand banquet / “Premium Theme” |
| `expo-mart/p04-img02`, `p11-img02` | Lounge / hall (low-res — use carefully) |
| `expo-mart/p05-img02` | Founders + plaque — **About only if you confirm** |

### Categories still empty (no photos supplied)

Haldi · Mehendi · Engagement · Catering/buffet · Corporate events

---

## 6. Conflicts & gaps (from brief §2)

| # | Issue | Status |
|---|---|---|
| F1 | Since 1985 vs 25+ years | ✅ Confirmed: use **Since 1985** |
| F2 | Three logos | ✅ Confirmed: **Gold crest (A)** primary |
| F3 | Domain | ✅ Confirmed: **Vercel subdomain** for submission |
| F4 | Expo Mart public use | ✅ Confirmed: **may show publicly**; still describe as proposal/upcoming, not completed work |
| F5 | Stats (2500+ / 2000+ / 400+ / 100+) | ❌ Needs confirmation |
| F6 | Service area beyond Noida | ❌ Needs confirmation |
| F7 | WhatsApp on +91 98185 23902 | ❌ Needs confirmation |
| — | No catering menus/prices | Placeholders only |
| — | No testimonials / awards / team photos / client names | Do not invent |
| — | Crest logo cream background | Need transparent asset |
| — | Compressed PDF resolution | Ask for original high-res photos if possible |

---

## 7. What I still need from you

1. **Transparent crest logo** (SVG or PNG) — blocks dark header/footer.
2. Confirm **F5–F7** (stats, service area, WhatsApp).
3. Confirm **founders photo** (`expo-mart/p05-img02` or profile equivalent) may appear on About.
4. Optional: **original (uncompressed) event photos** for hero sharpness.
5. Optional: Logo B / C originals if you want them in the styleguide.
6. **Appendix A SEO essentials** when ready (Chunk 8).
7. **Resend API key** before Chunk 7 form testing (`.env.local` only).

---

## 8. Proposed site map (locked for Chunks 1–7)

```
/                       Home
/about                  About Us
/services               Our Services hub
/services/wedding-planning
/services/catering
/services/decorations
/services/event-management
/gallery
/blog
/blog/[slug]
/contact                Contact / Get a Quote
/styleguide             Hidden design-system page (Chunk 1)
```

---

## 9. How to run & test Chunk 0

```bash
cd shree-anand
npm install
cp .env.example .env.local   # if needed
npm run dev                  # http://localhost:3000
npm run lint
npm run typecheck
```

You should see the cream placeholder home with “Shree Anand” in gold serif. No broken console errors.

---

## 10. Next chunk (after your approval)

**Chunk 1 — Design system and global layout:** Header, Footer, Button, Section, FAQ, StatsRow, CTA, WhatsApp/call FAB, Breadcrumbs, `/styleguide`.
