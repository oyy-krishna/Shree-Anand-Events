import type { Metadata, Viewport } from 'next'

import { Footer } from '../components/layout/Footer'
import { FloatingActions } from '../components/layout/FloatingActions'
import { Header } from '../components/layout/Header'
import './globals.css'

export const metadata: Metadata = {
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
  themeColor: '#52232c',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="font-sans antialiased min-h-full flex flex-col bg-cream text-near-black">
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
