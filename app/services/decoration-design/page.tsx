import type { Metadata } from 'next'

import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { FAQAccordion } from '../../../components/ui/FAQAccordion'
import { Section } from '../../../components/ui/Section'

export const metadata: Metadata = {
  title: 'Decoration & Design',
  description: 'Premium décor and design styling for entrances, mandaps, stage settings, lounge spaces and event storytelling.',
}

const decorFocus = [
  'Main entrance styling and welcome moments',
  'Passage and aisle design with layered textures and lighting',
  'Stage design and event focal points',
  'Mandap construction and floral feature styling',
  'VIP lounge and furniture styling',
  'Chandelier, brass and ambient lighting features',
  'Furniture and prop styling for event mood',
  'Premium floral and decorative filler styling',
]

const faqs = [
  {
    question: 'Can the décor style match my wedding mood or colour story?',
    answer: 'Yes. Concept direction can be shaped around your palette, venue mood and the storytelling you want guests to remember.',
  },
  {
    question: 'Do you offer setup concepts for haldi, mehendi and engagement events?',
    answer: '[NEEDS CLIENT CONFIRMATION: specific photo categories and ceremony-specific décor packages still need final client approval before they are presented as a published service.]',
  },
  {
    question: 'Can you work with our venue and event structure?',
    answer: 'Yes. Venue layout, visual hierarchy and décor planning are coordinated to work with your available spaces and event flow.',
  },
]

export default function DecorationDesignPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Decoration & Design' }]} />
      <main>
        <Section
          eyebrow="Decoration & Design"
          title="Design stories that feel rich, warm and deeply personal"
          description="From luxe entrances to stage moments and guest lounge styling, the décor language should feel immersive without ever losing calm elegance."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {decorFocus.map((item) => (
              <Card key={item} className="p-5">
                <p className="text-sm leading-7 text-[var(--color-burgundy)]/80">{item}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design directions"
          title="Popular decor themes and styling categories"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Venue atmosphere</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                Decor direction combines rich textures, warm lighting, florals, draping and layered event architecture to create a premium environment that feels immersive and welcoming.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Feature elements</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                Premium theme concepts often include entrance moments, stage focal points, lounge styling, chandeliers, brass accents, furniture layering and statement prop details.
              </p>
            </Card>
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Design discussion questions">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        <div className="container section-pad pt-0">
          <div className="rounded-[1.5rem] bg-[var(--color-burgundy)] p-8 text-[var(--color-white)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-primary)]">Discuss your design vision</p>
            <h3 className="mt-3 text-3xl text-[var(--color-white)]">Tell us the mood, venue and moments you want to highlight.</h3>
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
