import type { Metadata } from 'next'

import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Wedding planning, catering, décor design and event management services for premium celebrations in Noida.',
}

const services = [
  {
    title: 'Wedding Planning',
    summary: 'End-to-end wedding planning with coordination, venue guidance and celebration flow built around your priorities.',
    href: '/services/wedding-planning',
  },
  {
    title: 'Catering',
    summary: 'Hospitality designed around guest comfort, menu coordination and polished service for every kind of gathering.',
    href: '/services/catering',
  },
  {
    title: 'Decoration & Design',
    summary: 'Premium stage styling, mandaps, entrances, floral stories and venue design inspired by your chosen mood.',
    href: '/services/decoration-design',
  },
  {
    title: 'Event Management',
    summary: 'Corporate events, birthdays, anniversaries and family celebrations planned with operational ease and elegance.',
    href: '/services/event-management',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Services' }]} />
      <main>
        <Section
          eyebrow="Our services"
          title="One team, one story, every detail covered"
          description="From celebration planning to decoration and guest hospitality, our services are built to keep the experience seamless and memorable."
          align="center"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="flex h-full flex-col p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">Service</p>
                <h3 className="mt-4 text-2xl text-[var(--color-near-black)]">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-burgundy)]/80">{service.summary}</p>
                <div className="mt-6">
                  <Button href={service.href}>View service</Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
