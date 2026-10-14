import type { Metadata } from 'next'

import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { FAQAccordion } from '../../../components/ui/FAQAccordion'
import { Section } from '../../../components/ui/Section'

export const metadata: Metadata = {
  title: 'Catering',
  description: 'Catering service planning with hospitality coordination, buffet styling and guest experience management for weddings and events.',
}

const placeholderCards = [
  {
    title: 'Cuisine options',
    text: '[NEEDS CLIENT CONFIRMATION: cuisine types, regional specialties and menus should be confirmed before publishing specific offerings.]',
  },
  {
    title: 'Sample menu',
    text: '[NEEDS CLIENT CONFIRMATION: sample menu / course structure / meal flow is not yet available and must be reviewed before use.]',
  },
  {
    title: 'Buffet setups',
    text: '[NEEDS CLIENT CONFIRMATION: buffet layout styles and serving formats should be confirmed before going live.]',
  },
  {
    title: 'Customization',
    text: '[NEEDS CLIENT CONFIRMATION: customisation options, guest counts and meal styling rules still need client approval.]',
  },
]

const faqs = [
  {
    question: 'Can the catering service be tailored to my event style?',
    answer: 'Yes. The setup and serving format can be aligned with your event scale, guest count and celebration style once the final requirements are confirmed.',
  },
  {
    question: 'Do you provide buffet or plated meal setups?',
    answer: '[NEEDS CLIENT CONFIRMATION: buffet and serving models require final review before publication as a definite offering.]',
  },
  {
    question: 'Can I request a quote for a custom menu?',
    answer: 'Yes. Share your requirements through the enquiry form, and the team can review your guest count, venue and event format for a tailored response.',
  },
]

export default function CateringPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Catering' }]} />
      <main>
        <Section
          eyebrow="Catering"
          title="Hospitality designed around the mood, rhythm and warmth of your event"
          description="The catering experience should feel generous, comfortable and polished from the first welcome to the final course."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {placeholderCards.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-2xl text-[var(--color-near-black)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">{item.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Service approach"
          title="Guest experience remains central to every catering plan"
          description="The final catering experience should suit the event structure, venue flow and the way your guests will move through the celebration."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Hospitality flow</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                <li>• Guest comfort and food pacing</li>
                <li>• Reception and service coordination</li>
                <li>• Setup flow suited to the venue</li>
                <li>• Styling that complements the event theme</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Customization</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                [NEEDS CLIENT CONFIRMATION: final meal and service customisation details must be reviewed before they are treated as factual offerings on the public site.]
              </p>
            </Card>
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Questions guests ask before booking catering">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        <div className="container section-pad pt-0">
          <div className="rounded-[1.5rem] bg-[var(--color-burgundy)] p-8 text-[var(--color-white)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-primary)]">Need a tailored plan?</p>
            <h3 className="mt-3 text-3xl text-[var(--color-white)]">Share your guest list, event style and service requirements.</h3>
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
