import Link from 'next/link'

type BreadcrumbsProps = {
  items: Array<{ label: string; href?: string }>
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[var(--color-cream)]">
      <div className="container py-5 text-sm text-[var(--color-burgundy)]/80">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-[var(--color-gold-dark)]">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
