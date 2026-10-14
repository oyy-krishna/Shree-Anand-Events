/**
 * lib/tokens.ts
 *
 * Brand design tokens as typed TypeScript constants.
 * These mirror the CSS custom properties in globals.css.
 * Use them in JS contexts (e.g. dynamic styles, Three.js, chart colours).
 * For Tailwind classes in JSX, use the CSS variable names directly.
 *
 * Colour sources — see docs/decisions.md D04 and D05.
 *
 * ⚠️  Burgundy / wine / terracotta / rosewood / sand are approximated from
 *     the brief description of the Expo Mart palette board. They will be
 *     corrected to exact sampled values in Chunk 1 once the PDF is received.
 *     [NEEDS CLIENT CONFIRMATION: Expo Mart palette hex values]
 */

// ── Colours ──────────────────────────────────────────────────────────────────

export const colors = {
  // Gold — sampled from the gold crest logo
  goldPrimary: '#c9963a',
  goldLight:   '#e8c96a',
  goldDark:    '#9a6f2a',

  // Cream — logo background and light page surfaces
  cream:       '#f7f0e3',
  creamDeep:   '#ede3cc',
  creamBorder: '#d9c9a8',

  // Rich / dark tones — Expo Mart "Premium Theme" (approximated)
  burgundy:    '#6b1d2e',
  wine:        '#4a0f1e',
  rosewood:    '#8b3a52',
  terracotta:  '#c4603a',
  sand:        '#d4b896',

  // Neutral
  nearBlack:   '#1a0a0e',
  white:       '#ffffff',
} as const

export type ColorKey = keyof typeof colors

// ── Typography ────────────────────────────────────────────────────────────────

export const fonts = {
  serif: 'var(--font-serif)',  // Libre Baskerville
  sans:  'var(--font-sans)',   // Poppins
} as const

// ── Breakpoints (matches Tailwind defaults) ──────────────────────────────────

export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const

// ── Business facts (sourced directly from client deck) ───────────────────────
// These are the ONLY numbers we display. Do not invent others.

export const businessStats = {
  clients:     '2500+',
  events:      '2000+',
  teamMembers: '400+',
  decorSetups: '100+',
  // Experience is intentionally omitted until confirmed — see docs/content-todo.md F1
} as const

// ── Contact details ───────────────────────────────────────────────────────────

export const contact = {
  phone1:    '+91 98185 23902',
  phone2:    '+91 99715 07990',
  whatsapp:  '919818523902',   // international format, no + or spaces — for wa.me links
  email:     'Shreeanand.caterers7@gmail.com',
  facebook:  'https://www.facebook.com/ShreeAnandcaterers',
  address: {
    line1:   'Plot #1, Sector 65',
    line2:   'FNG Expressway Service Rd',
    city:    'Noida',
    state:   'Uttar Pradesh',
    pincode: '201009',
    country: 'India',
    full:    'Plot #1, Sector 65, FNG Expressway Service Rd, Noida, Uttar Pradesh 201009',
  },
} as const

// ── Brand copy lines (from client deck — not invented) ────────────────────────

export const brandLines = {
  tagline1:  'We create and you celebrate.',
  tagline2:  'Make your event so memorable.',
  tagline3:  'Our business is making memories.',
  tagline4:  'Fresh ideas for your special day.',
  tagline5:  'We are a one-stop hub for all your event and wedding planning requirements.',
  ctaLine:   "Let's work together.",
} as const
