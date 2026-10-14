import { Button } from './Button'

type CTABandProps = {
  title: string
  description: string
  primaryHref?: string
  secondaryHref?: string
}

export function CTABand({
  title,
  description,
  primaryHref = '/contact',
  secondaryHref = '/services',
}: CTABandProps) {
  return (
    <div className="rounded-[1.5rem] border border-[var(--color-gold-primary)]/40 bg-[var(--color-burgundy)] px-6 py-10 text-[var(--color-white)] shadow-[var(--shadow-gold)] sm:px-10 lg:flex lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
          Let&apos;s plan your story
        </p>
        <h3 className="mt-3 text-3xl text-[var(--color-white)]">{title}</h3>
        <p className="mt-3 text-body-lg text-[var(--color-white)]/80">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
        <Button href={primaryHref}>Get a quote</Button>
        <Button href={secondaryHref} variant="secondary">
          View services
        </Button>
      </div>
    </div>
  )
}
