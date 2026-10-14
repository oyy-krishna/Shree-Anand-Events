import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container section-pad">
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-[var(--color-cream-border)] bg-[var(--color-white)] p-8 text-center shadow-[var(--shadow-card)]">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">404</p>
        <h1 className="mt-4 text-h1 text-[var(--color-near-black)]">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] px-5 py-3 text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-near-black)]">
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}
