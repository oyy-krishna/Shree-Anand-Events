'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { navItems } from '../../lib/site-data'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-gold-primary)]/30 bg-[var(--color-burgundy)]/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Shree Anand home">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--color-gold-primary)] bg-[var(--color-cream)] p-1 shadow-[var(--shadow-gold)]">
            <Image
              src="/images/logo/shree-anand-crest-logo.jpg"
              alt="Shree Anand crest logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden text-left sm:block">
            <div className="font-serif text-lg uppercase tracking-[0.16em] text-[var(--color-gold-primary)]">
              Shree Anand
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-white)]/80">
              Wedding Planner
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.12em] text-[var(--color-white)]/80 transition-colors hover:text-[var(--color-gold-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+919818523902"
            className="inline-flex items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-near-black)] transition-colors hover:bg-[var(--color-gold-light)]"
          >
            Call now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md border border-[var(--color-gold-primary)] p-2 text-[var(--color-gold-primary)] md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[var(--color-gold-primary)]/30 bg-[var(--color-burgundy)] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.12em] text-[var(--color-white)]/80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919818523902"
              className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--color-near-black)]"
            >
              Call now
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
