import type { Metadata } from 'next'

import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { FAQAccordion } from '../../../components/ui/FAQAccordion'
import { Section } from '../../../components/ui/Section'

export const metadata: Metadata = {
  title: 'Wedding Planning',
  description: 'Wedding planning support for venue coordination, design direction, guest flow and on-day management with a premium, personal touch.',
}

const planningSteps = [
  {
    title: 'Consultation & vision',
    text: 'We begin by understanding the mood, guest experience and practical priorities for your wedding celebration.',
  },
  {
    title: 'Coordination',
    text: 'Our team aligns décor, invitations, vendor touchpoints, venue flow and schedule planning around your key milestones.',
  },
  {
    title: 'Venue support',
    text: 'We help organise the event layout, guest movement, service zones and practical details that make a big-day experience smooth.',
  },
  {
    title: 'On-day execution',
    text: 'From setup pacing to guest support and event timing, we keep the celebration calm, polished and fully coordinated.',
  },
]

const faqs = [
  {
    question: 'Can I plan a wedding with a smaller guest list or a destination-style flow?',
    answer: 'Yes. The process can be tailored around your guest count, venue setting and the type of celebration you want to create.',
  },
  {
    question: 'Do you help coordinate venue and décor choices?',
    answer: 'Yes. Venue support and aesthetic direction are part of the planning process, with decisions aligned to your preferences and event requirements.',
  },
  {
    question: 'How early should I reach out?',
    answer: '[NEEDS CLIENT CONFIRMATION: ideal lead times should be confirmed before publishing a fixed booking window.]',
  },
]

export default function WeddingPlanningPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Wedding Planning' }]} />
      <main>
        <Section
          eyebrow="Wedding Planning"
          title="A celebration plan that feels effortless from the first conversation to the final farewell"
          description="Wedding planning is about balancing emotional moments with operational precision so your day remains joyful, calm and beautifully organised."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {planningSteps.map((step) => (
              <Card key={step.title} className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">Phase</p>
                <h3 className="mt-4 text-2xl text-[var(--color-near-black)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-burgundy)]/80">{step.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="What we coordinate"
          title="Venue support, guest flow and the details that keep everything running smoothly"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Coordination support</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                <li>• Vendor and service alignment</li>
                <li>• Event-day timeline management</li>
                <li>• Guest flow and seating coordination</li>
                <li>• Situational updates during the celebration</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Venue guidance</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                <li>• Layout planning and guest movement</li>
                <li>• Service zones and hospitality flow</li>
                <li>• Entrance, stage and décor positioning</li>
                <li>• Practical event-day problem solving</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="FAQs"
          title="Planning questions clients often ask"
        >
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        <div className="container section-pad pt-0">
          <div className="rounded-[1.5rem] bg-[var(--color-burgundy)] p-8 text-[var(--color-white)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-primary)]">Start your planning</p>
            <h3 className="mt-3 text-3xl text-[var(--color-white)]">Tell us about your wedding vision.</h3>
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
