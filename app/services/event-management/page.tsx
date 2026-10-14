import type { Metadata } from 'next'

import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { FAQAccordion } from '../../../components/ui/FAQAccordion'
import { Section } from '../../../components/ui/Section'

export const metadata: Metadata = {
  title: 'Event Management',
  description: 'Corporate events, birthdays, anniversaries and family celebrations managed with structure, polish and guest-first planning.',
}

const eventTypes = [
  'Corporate events and launches',
  'Birthdays and family celebrations',
  'Anniversaries and milestone gatherings',
  'Private parties and curated social events',
]

const faqs = [
  {
    question: 'Do you manage both social and corporate events?',
    answer: 'Yes. The planning approach can be adjusted for the type of event, audience, venue and goals behind the celebration.',
  },
  {
    question: 'Can you support smaller private events as well?',
    answer: 'Yes. The level of planning and styling can be adapted to suit smaller guest counts and more personal events.',
  },
  {
    question: 'How do you handle event logistics?',
    answer: 'The team coordinates flow, timings, service moments and guest experience so the event feels smooth and organised throughout.',
  },
]

export default function EventManagementPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Event Management' }]} />
      <main>
        <Section
          eyebrow="Event Management"
          title="Professional planning for celebrations that need structure, elegance and warmth"
          description="Whether the event is intimate or large-scale, strong planning and clear communication keep the experience polished and comfortable for everyone involved."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventTypes.map((item) => (
              <Card key={item} className="p-5">
                <p className="text-sm leading-7 text-[var(--color-burgundy)]/80">{item}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="What we manage"
          title="Operational coordination built around guest comfort and your event goals"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Planning support</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                <li>• Agenda and schedule planning</li>
                <li>• Venue and logistics coordination</li>
                <li>• Service flow and timing</li>
                <li>• Guest expectations and touchpoints</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Execution support</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                <li>• Setup and event-day direction</li>
                <li>• Guest comfort and hospitality oversight</li>
                <li>• Detail tracking across the day</li>
                <li>• Smooth issue resolution when needed</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Questions clients often ask">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        <div className="container section-pad pt-0">
          <div className="rounded-[1.5rem] bg-[var(--color-burgundy)] p-8 text-[var(--color-white)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-primary)]">Ready to plan yours?</p>
            <h3 className="mt-3 text-3xl text-[var(--color-white)]">Let’s build an event flow that feels organised, warm and memorable.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Get a quote</Button>
              <Button href="/services" variant="secondary">Back to services</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
