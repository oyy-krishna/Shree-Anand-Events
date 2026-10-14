import Link from 'next/link'

import { brandLines, contact } from '../../lib/tokens'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-wine)] text-[var(--color-white)]">
      <div className="container section-pad pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-primary)]">
              Shree Anand
            </p>
            <h3 className="mt-3 text-2xl text-[var(--color-white)]">Wedding Planner</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-white)]/75">
              {brandLines.tagline5}
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.14em] text-[var(--color-gold-primary)]">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-white)]/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-[var(--color-gold-primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.14em] text-[var(--color-gold-primary)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-white)]/80">
              <li>
                <a href={`tel:${contact.phone1.replace(/\s+/g, '')}`} className="hover:text-[var(--color-gold-primary)]">
                  {contact.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone2.replace(/\s+/g, '')}`} className="hover:text-[var(--color-gold-primary)]">
                  {contact.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-[var(--color-gold-primary)]">
                  {contact.email}
                </a>
              </li>
              <li>{contact.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-gold-primary)]/30 pt-6 text-xs uppercase tracking-[0.12em] text-[var(--color-white)]/70">
          © {new Date().getFullYear()} Shree Anand Caterers &amp; Decorators
        </div>
      </div>
    </footer>
  )
}
