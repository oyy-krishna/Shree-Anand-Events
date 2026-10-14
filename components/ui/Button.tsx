import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const baseClassName =
    'inline-flex items-center justify-center rounded-[var(--radius-button)] border px-5 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-[var(--duration-base)] focus-visible:outline-none'

  const variantClassName = {
    primary:
      'border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] text-[var(--color-near-black)] hover:bg-[var(--color-gold-light)]',
    secondary:
      'border-[var(--color-gold-primary)] bg-transparent text-[var(--color-gold-primary)] hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-near-black)]',
    ghost:
      'border-transparent bg-[var(--color-wine)] text-[var(--color-white)] hover:bg-[var(--color-burgundy)]',
  }[variant]

  if (!href) {
    return (
      <button className={`${baseClassName} ${variantClassName} ${className}`}>
        {children}
      </button>
    )
  }

  const content = (
    <span className={`${baseClassName} ${variantClassName} ${className}`}>
      {children}
    </span>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  )
}
