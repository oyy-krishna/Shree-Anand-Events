import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-cream-border)] bg-[var(--color-white)] shadow-[var(--shadow-card)] ${className}`}
    >
      {children}
    </div>
  )
}
