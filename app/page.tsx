/**
 * Home page — placeholder for Chunk 0.
 * The real Home page will be built in Chunk 2.
 */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shree Anand Caterers & Decorators | Wedding Planner in Noida',
  description:
    'Shree Anand — a one-stop hub for wedding planning, catering, decoration and event management in Noida, UP. We create, you celebrate.',
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center section-pad container text-center">
      <div className="gold-rule mb-8" aria-hidden="true" />
      <h1
        className="text-display font-serif mb-6"
        style={{ color: 'var(--color-gold-primary)' }}
      >
        Shree Anand
      </h1>
      <p
        className="font-sans text-body-lg mb-2"
        style={{ letterSpacing: 'var(--tracking-caps)' }}
      >
        CATERERS &amp; DECORATORS
      </p>
      <p className="font-sans text-body" style={{ color: 'var(--color-sand)' }}>
        Wedding Planner · Noida
      </p>
      <div className="gold-rule mt-8 mb-12" aria-hidden="true" />
      <p className="font-sans text-small" style={{ color: 'var(--color-rosewood)' }}>
        Website coming soon — Chunk 0 scaffold complete.
      </p>
      {/* Chunk 2 will replace this with the real Home page */}
    </main>
  )
}
