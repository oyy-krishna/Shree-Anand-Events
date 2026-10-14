import type { Metadata } from 'next'

import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { StatsRow } from '../../components/ui/StatsRow'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shree Anand, our philosophy, service approach and the team behind premium wedding and event planning in Noida.',
}

const values = [
  {
    title: 'Thoughtful planning',
    text: 'Every plan is shaped around your priorities, guest experience and the mood you want your celebration to carry.',
  },
  {
    title: 'Premium execution',
    text: 'We bring together décor, hospitality and event flow so your wedding or event feels elevated from first impression to final farewell.',
  },
  {
    title: 'Warm hospitality',
    text: 'The guest experience is treated as seriously as the design itself, because memorable events are made in the details.',
  },
]

const teamNotes = [
  'Mr Sunil Anand and Mr Vivek Anand lead the business with a focus on planning, coordination and décor-led execution.',
  '[NEEDS CLIENT CONFIRMATION: founder portrait and team profile photography is still pending final approval before publication.]',
  '[NEEDS CLIENT CONFIRMATION: exact years of experience and founding details beyond the current logo wording should be confirmed before using them as headline claims.]',
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      <main>
        <Section
          eyebrow="About us"
          title="Luxury wedding and event planning rooted in thoughtful, personal execution"
          description="Shree Anand Caterers & Decorators creates premium, warm and memorable experiences for weddings, social gatherings and personal celebrations across Noida and beyond."
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-body-lg leading-8 text-[var(--color-burgundy)]/80">
                The company blends wedding planning, hospitality, décor and guest experience into one coordinated service. Every event is guided by a clear creative direction, calm planning rhythm and attention to what makes each family or client feel genuinely seen.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/services">Our services</Button>
                <Button href="/contact" variant="secondary">Get a quote</Button>
              </div>
            </div>
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">Our promise</p>
              <p className="mt-4 text-2xl text-[var(--color-near-black)]">We create and you celebrate.</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                The business is built around the belief that a celebration should feel effortless for the couple and deeply joyful for every guest.
              </p>
            </Card>
          </div>
        </Section>

        <section className="bg-[var(--color-cream-deep)]">
          <div className="container section-pad">
            <StatsRow
              items={[
                { label: 'Clients', value: '2500+' },
                { label: 'Events', value: '2000+' },
                { label: 'Team members', value: '400+' },
                { label: 'Since', value: '1985' },
              ]}
            />
          </div>
        </section>

        <Section
          eyebrow="Our philosophy"
          title="A premium experience, without losing the personal warmth of your celebration"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="p-6">
                <h3 className="text-2xl text-[var(--color-near-black)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-burgundy)]/80">{value.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Our approach"
          title="Planning, styling and coordination under one roof"
          description="The team works across planning, décor direction, catering coordination and event logistics so your celebration feels aligned at every touchpoint."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Company history</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                Shree Anand Caterers &amp; Decorators has built its work around premium wedding and event execution for families and organisations in Noida. The business focuses on warm hospitality, rich décor styling and seamless guest experience.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl text-[var(--color-near-black)]">Experience and leadership</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                [NEEDS CLIENT CONFIRMATION: current wording should be validated against the logo and company deck before using as a published headline claim.]
              </p>
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="The team"
          title="Founders-led, detail-focused and guest-first"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {teamNotes.map((note) => (
              <Card key={note} className="p-6">
                <p className="text-sm leading-7 text-[var(--color-burgundy)]/80">{note}</p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
