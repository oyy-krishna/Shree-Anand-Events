/**
 * Root layout — mounts brand fonts and base metadata.
 * Fonts are self-hosted by next/font/google (zero layout shift, no external requests).
 */
import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Poppins } from 'next/font/google'
import './globals.css'

// ── Brand fonts ─────────────────────────────────────────────────────────────

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// ── Site-wide metadata (per-page metadata is set in each page.tsx) ───────────

export const metadata: Metadata = {
  // Title template: page titles show as "Page Name | Shree Anand"
  title: {
    default: 'Shree Anand Caterers & Decorators | Wedding Planner in Noida',
    template: '%s | Shree Anand',
  },
  description:
    'Shree Anand Caterers & Decorators — a one-stop hub for wedding planning, catering, decoration and event management in Noida, Uttar Pradesh. We create, you celebrate.',
  keywords: [
    'wedding planner noida',
    'wedding caterers noida',
    'event decorator noida',
    'shree anand caterers',
    'wedding decoration noida',
    'birthday party planner noida',
    'corporate event management noida',
  ],
  authors: [{ name: 'Shree Anand Caterers & Decorators' }],
  creator: 'Shree Anand Caterers & Decorators',
  // Canonical / OG URL updated per-page; this is the fallback
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shree Anand Caterers & Decorators',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6B1D2E', // burgundy — matches mobile browser chrome
}

// ── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${poppins.variable} h-full scroll-smooth`}
    >
      {/*
       * antialiased: sub-pixel font rendering
       * min-h-full flex flex-col: footer pushed to bottom on short pages
       */}
      <body className="font-sans antialiased min-h-full flex flex-col bg-cream text-near-black">
        {children}
      </body>
    </html>
  )
}
