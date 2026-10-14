type StatItem = {
  label: string
  value: string
}

type StatsRowProps = {
  items: StatItem[]
}

export function StatsRow({ items }: StatsRowProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[var(--radius-card)] border border-[var(--color-gold-primary)]/40 bg-[var(--color-white)] p-6 text-center shadow-[var(--shadow-card)]"
        >
          <div className="text-3xl font-bold text-[var(--color-gold-dark)] sm:text-4xl">
            {item.value}
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--color-burgundy)]/70">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}
