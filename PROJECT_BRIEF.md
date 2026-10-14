# MASTER BRIEF: Shree Anand website

Read this whole file first. Then do Chunk 0 only and wait for my approval.

## 1. Who I am and what this is
I am a B.Tech CSE student at Bennett University (Greater Noida). My team and I are building a real, fully working website for a real business that has no online presence. It is a university project, so our faculty must be able to open it on a live public URL over HTTPS.

Treat this as a professional client project. I want a hand-coded, production-quality, visually iconic website. No Wix, WordPress, website builders or paid templates. No lorem ipsum, no broken links, no dead buttons.

## 2. The client
**Shree Anand** (Shree Anand Caterers & Decorators), a wedding and event company in Noida, founded by brothers Mr Sunil Anand and Mr Vivek Anand.

### Facts you may use
- Names in use: "Shree Anand", "Shree Anand Caterers & Decorators", and the logo line "Wedding Planner".
- Address: Plot #1, Sector 65, FNG Expressway Service Rd, Noida, Uttar Pradesh 201009
- Phones: +91 98185 23902, +91 99715 07990
- Email: Shreeanand.caterers7@gmail.com
- Facebook: facebook.com/ShreeAnandcaterers
- Domain printed on their deck: www.shreeanandcaterers.com (ask me whether the client owns it)
- Numbers from their deck: 2500+ clients, 2000+ events, 400+ team members, staff with 10+ years of experience, 100+ decor setups ready
- Founders' statement: "over 25+ years experience", dedicated, "we work for perfection"
- Services named in the deck: wedding and event planning, venue selection, hotel booking, hospitality, decor recommendation, catering, celebrity management, entertainment options, invites, takeaways and other collateral, children's birthday parties, personal and corporate events
- Decor offer: varied entrance themes, 100+ setups ready, day and night party options
- Their lines: "We create and you celebrate.", "Make your event so memorable.", "Our business is making memories.", "Fresh ideas for your special day.", "We are a one-stop hub for all your event and wedding planning requirements.", "Let's work together."
- Their deck has typos ("Decoraters", "correlation", "Let us coordinate with us"). Fix them. Never copy them.

### Conflicts and gaps I need you to flag, not guess
1. **Experience:** the new crest logo says "Since 1985" (about 41 years in 2026) while the deck says founders have "25+ years". Do not print either as a headline until I confirm. Use a placeholder and list it in /docs/content-todo.md.
2. **Three different logos exist** (see section 4). I will decide which is primary. Until then use the gold crest as the working primary.
3. **No catering content was supplied:** no menus, cuisine list, buffet photos or prices. Do not invent them. Build the Catering page structure with clearly marked placeholders.
4. **No haldi, mehendi, engagement or corporate-event photos were supplied.** The gallery categories in the brief need photos that I do not have yet. Build the filter system for all categories, populate only the categories that have real photos, and list what is missing.
5. **No testimonials, awards, prices, team photos or client names were supplied.** Do not fabricate any.
6. **Expo Mart deck:** it is a decor proposal titled "Premium Theme, India Expo Mart Lawn, 21/11/2026". That date is in the future from today (14 Oct 2026), so it is an upcoming or proposed event, not finished work. Never describe it as completed. It likely belongs to a specific client, so ask me whether it may be shown publicly before using it as a featured concept.

## 3. Page structure the company expects
Pages and the sections each should contain (from the brief given to me):

| Page | Recommended sections |
|---|---|
| About Us | Company history, philosophy, experience, team and approach |
| Our Services | Four service categories, short descriptions and links |
| Wedding Planning | Planning process, coordination, venue support, timelines and FAQs |
| Catering | Cuisine options, sample menus, buffet setups, customization and FAQs |
| Decoration & Design | Stage, mandap, floral, haldi, mehendi and engagement decor |
| Event Management | Corporate events, birthdays, anniversaries and family celebrations |
| Gallery | Filterable portfolio by weddings, haldi, mehendi, engagement, catering and corporate events |
| Blog | Decoration ideas, catering guides, budgeting and planning advice |
| Contact / Get a Quote | Contact details, enquiry form, service area, map if appropriate and response expectations |

Plus a Home page. The brief also has a section 5, "SEO essentials for every page". I will paste it into this file under Appendix A. Until then use the SEO chunk below.

Assumed expectations (confirm with me): mobile-first design, WhatsApp and click-to-call on every page, English first with Hindi optional later.

## 4. Brand and visual direction

### Assets I am giving you
- `Shree_Anand_Profile.pdf`: 15-page company deck (logo, founders' photo with a plaque, event photos, portfolio, contact slide)
- `Expo_Mart_21_Nov.pdf`: 24-page decor proposal, about 62 MB, mostly photos and mood boards
- Gold crest logo image (see below)
- Page-structure screenshot (section 4 of my brief)

### Three logos (decide with me, default to A)
- **A. Gold crest (primary candidate):** ornate gold shield with an "A" monogram, "SHREE ANAND", "Since 1985", ribbon reading "Wedding Planner", on cream. Premium, wedding-focused, matches the Expo Mart deck.
- **B. Plate and cutlery roundel:** pink-to-cream gradient ring reading "Caterers & Decorators" with a plate, fork and knife, "Shree Anand" on a ribbon, on maroon. Catering-focused.
- **C. Black and gold wordmark:** "Shree Anand, Caterers & Decorators, Wedding Organizer", seen inside the deck photos.

Ask for the original logo files (SVG or high-resolution PNG with transparent background). The crest image I have is a flat image on cream. Do not trace or redraw the logo without my approval.

### Palette
Take it from the real material, in this order of priority:
- The Expo Mart "Premium Theme" palette board: burgundy and deep wine reds, golden brown, tan and sand, terracotta, dark rosewood, near-black brown, with brass and gold accents
- The gold of the crest logo and the warm cream of its background
- The deck's crimson accent
Sample exact colours from the images and record them as design tokens. Do not guess hex values.

### Typography
The company deck uses Libre Baskerville (headings) and Poppins (body). Start there. If you propose a different pairing, justify it against the crest logo's engraved, classic feel.

### Look and feel
Luxury Indian wedding: dark burgundy backgrounds, gold detailing, warm lighting, chandeliers, draped fabric, floral walls and hanging garlands. The photography is the hero, so give it room. Restraint matters: one memorable hero moment, calm and disciplined everywhere else. Avoid generic template looks, stock-photo feel and decorative clutter.

### Photography in the Expo Mart deck (useful categories)
Colour palette options, wedding mood board, rich elements (candelabras, chandeliers, carved white doors and arches, brass vases, floral stands), main entrance, passage props, stage, VIP lounge with furniture, chandeliers, furniture, mandap with back wall treatment, props and decorative fillers (brass Nandi, hanging diyas).

Image handling rules:
- Extract the embedded photos (for example with `pdfimages -all`) instead of screenshotting slides. Crop out the pink caption banners and any baked-in logos or watermarks.
- Keep originals outside the repo or in a Git-ignored folder. Commit only optimised web versions (WebP or AVIF with JPEG fallback, several sizes, lazy loading, explicit width and height).
- Write real, descriptive alt text for every photo.
- If an image is low resolution or heavily compressed, tell me instead of upscaling it.

## 5. My goal
A live site at a permanent HTTPS URL that:
- looks premium on phones, tablets and desktops and loads fast
- has real functionality: a working enquiry form, a filterable gallery with lightbox, a blog, FAQ accordions, clean navigation
- is clean, hand-written code that I can explain line by line in a viva
- has strong SEO, accessibility and performance
- ships with documentation so my team can present and maintain it

## 6. Tech stack
Default proposal (tell me in Chunk 0 if you recommend something else and why, then lock it in):
- Next.js (App Router) + TypeScript + Tailwind CSS, latest stable versions
- A separate real URL for every page (no hash routing)
- Blog posts as MDX files in the repo
- next/image for optimised images
- Enquiry form posted to a Next.js API route that emails the company (for example via Resend), with WhatsApp as a fallback link
- Git + GitHub, deployed on Vercel (automatic HTTPS)
- No heavy UI libraries. Small, hand-built components.

## 7. Rules you must follow
1. Work one chunk at a time. At the end of each chunk, stop, summarise what you did, show how to run and test it, and wait for my approval.
2. Never invent facts. If something is missing, insert a clearly marked placeholder such as `[NEEDS CLIENT CONFIRMATION: ...]` and log it in `/docs/content-todo.md`. This includes copy you wrote that sounds factual (menus, process steps, response times, FAQ answers).
3. Use only the facts in section 2 and the supplied files. Ask me when you need more.
4. Do not use stock photos that could pass as the client's work.
5. Commit after every chunk with a clear message. Never commit secrets. Use `.env.local` and `.env.example`.
6. Record important decisions in `/docs/decisions.md` so I can defend them.
7. Quality floor on every page: semantic HTML, one H1, visible keyboard focus, WCAG AA contrast, reduced motion respected, no layout shift, responsive from 360 px wide.
8. Do not publish client-specific material (for example the Expo Mart proposal) until I confirm permission.

## 8. The chunks

**CHUNK 0 - Setup, asset audit and plan**
- Confirm the stack, create the repo and folder structure, ESLint, Prettier and base layout. Create `/docs` with README, content-todo.md, decisions.md.
- Inventory every supplied file. Extract and list the usable photos from both PDFs with a quality note for each.
- Propose design tokens sampled from the real palette, a type scale, and a short design concept.
- Output: written plan, asset inventory, the conflicts and gaps from section 2, and the list of files and content you still need from me.

**CHUNK 1 - Design system and global layout**
- Tokens, fonts, global styles. Components: Header (sticky, mobile menu), Footer, Button, Section, Card, FAQ accordion, StatsRow, CTA band, WhatsApp and call floating button, Breadcrumbs.
- A hidden `/styleguide` page showing every component.

**CHUNK 2 - Home page**
- Hero built around the strongest real photography, services overview linking to the four service pages, stats, featured gallery strip, why choose us, final CTA.

**CHUNK 3 - About Us and Our Services**
- About: history, philosophy, experience, team and approach, founders (Mr Sunil Anand and Mr Vivek Anand) using their deck photo only if I confirm. Services hub with four categories.

**CHUNK 4 - The four service pages**
- Wedding Planning, Catering, Decoration & Design, Event Management, each with the sections from section 3 and a quote CTA.
- Decoration & Design should draw on the Expo Mart categories (entrance, passage, stage, mandap, lounge, chandeliers, furniture, props) once permission is confirmed.

**CHUNK 5 - Gallery**
- Filter by weddings, haldi, mehendi, engagement, catering and corporate events. Responsive grid, lazy loading, accessible lightbox with keyboard support, alt text for every image.
- Photo data in one typed file so adding images is easy. Categories without photos must be handled gracefully and listed in content-todo.md.

**CHUNK 6 - Blog**
- MDX posts, index with categories (decoration ideas, catering guides, budgeting, planning advice), post pages with reading time and related posts. Four starter posts with factual claims marked for review.

**CHUNK 7 - Contact / Get a Quote**
- Contact details, enquiry form (name, phone, event type, date, guest count, message), service area, map, response expectations.
- Client and server validation, spam protection (honeypot and rate limiting), email delivery, success and error states, WhatsApp alternative. Test end to end and document it.

**CHUNK 8 - SEO**
- Unique title and meta description per page, canonical URLs, Open Graph and Twitter cards, sitemap.xml, robots.txt.
- JSON-LD: EventPlanner/LocalBusiness site-wide, FAQPage where there are FAQs, BreadcrumbList, Article on blog posts.
- Apply Appendix A when I provide it.

**CHUNK 9 - Performance, accessibility and QA**
- Lighthouse 90+ on all four categories for mobile on Home, one service page, Gallery and Contact. Keyboard-only test, screen reader spot check, Chrome, Safari, Firefox and a real phone. Produce `/docs/qa-report.md`.

**CHUNK 10 - Deployment and HTTPS**
- Deploy to Vercel from GitHub, set environment variables, confirm HTTPS-only, www and http redirects, custom 404. Walk me through connecting a custom domain if the client owns one.

**CHUNK 11 - Handover and submission pack**
- Final README, one-page architecture overview, demo script for faculty, list of remaining content for the client.

## 9. Start now
Begin with Chunk 0 only. Ask me anything you need, then wait for my approval.

## Appendix A: SEO essentials for every page
(Paste section 5 of my original brief here.)
