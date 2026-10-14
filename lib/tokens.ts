/**
 * lib/tokens.ts
 *
 * Brand design tokens as typed TypeScript constants.
 * These mirror the CSS custom properties in globals.css.
 * Use them in JS contexts (e.g. dynamic styles).
 * For Tailwind classes in JSX, use the CSS variable / theme color names.
 *
 * Colour sources — see docs/chunk-0-plan.md §4 and docs/decisions.md D11.
 */

// ── Colours ──────────────────────────────────────────────────────────────────

export const colors = {
  // Gold — sampled from the gold crest logo
  goldPrimary: '#cdaa58',
  goldLight: '#e8bc5d',
  goldDark: '#8d651f',

  // Cream — logo background and light page surfaces
  cream: '#fdf6e4',
  creamDeep: '#eedfb3',
  creamBorder: '#d9c9a8',

  // Premium Theme board + Logo B / drapery
  burgundy: '#52232c',
  wine: '#360509',
  rosewood: '#4f1a0e',
  terracotta: '#a15344',
  terracottaDeep: '#7a2f2e',
  goldenBrown: '#a0551d',
  sand: '#b17d45',

  // Neutral
  nearBlack: '#1f0c06',
  white: '#ffffff',
} as const

export type ColorKey = keyof typeof colors

// ── Typography ────────────────────────────────────────────────────────────────

export const fonts = {
  serif: 'var(--font-serif)', // Libre Baskerville
  sans: 'var(--font-sans)', // Poppins
} as const

// ── Breakpoints (matches Tailwind defaults) ──────────────────────────────────

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// ── Business facts (sourced from client materials only) ───────────────────────

export const businessStats = {
  clients: '2500+',
  events: '2000+',
  teamMembers: '400+',
  decorSetups: '100+',
  // F1 confirmed 14 Oct 2026 — use "Since 1985" (not "25+ years")
  sinceYear: 1985,
  // Stats still need accuracy confirmation — see docs/content-todo.md F5
} as const

// ── Contact details ───────────────────────────────────────────────────────────

export const contact = {
  phone1: '+91 98185 23902',
  phone2: '+91 99715 07990',
  whatsapp: '919818523902', // international format for wa.me — confirm F7
  email: 'Shreeanand.caterers7@gmail.com',
  facebook: 'https://www.facebook.com/ShreeAnandcaterers',
  address: {
    line1: 'Plot #1, Sector 65',
    line2: 'FNG Expressway Service Rd',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201009',
    country: 'India',
    full: 'Plot #1, Sector 65, FNG Expressway Service Rd, Noida, Uttar Pradesh 201009',
  },
} as const

// ── Brand copy lines (from client deck — not invented) ────────────────────────

export const brandLines = {
  tagline1: 'We create and you celebrate.',
  tagline2: 'Make your event so memorable.',
  tagline3: 'Our business is making memories.',
  tagline4: 'Fresh ideas for your special day.',
  tagline5:
    'We are a one-stop hub for all your event and wedding planning requirements.',
  ctaLine: "Let's work together.",
} as const
