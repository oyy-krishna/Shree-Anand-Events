import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  children,
  className = '',
}: SectionProps) {
  const alignmentClassName = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <section id={id} className={`section-pad ${className}`}>
      <div className="container">
        <div className={`max-w-3xl ${alignmentClassName}`}>
          {eyebrow ? (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-h2 text-[var(--color-near-black)]">{title}</h2>
          {description ? (
            <p className="mt-4 text-body-lg text-[var(--color-burgundy)]/80">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
