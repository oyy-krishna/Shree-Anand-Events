import type { Metadata } from 'next'
import Image from 'next/image'

import { CTABand } from '../components/ui/CTABand'
import { Card } from '../components/ui/Card'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { Section } from '../components/ui/Section'
import { StatsRow } from '../components/ui/StatsRow'
import { Button } from '../components/ui/Button'
import { galleryHighlights, heroImageData, homeFaqs, services, stats } from '../lib/site-data'

export const metadata: Metadata = {
  title: 'Shree Anand Caterers & Decorators | Wedding Planner in Noida',
  description:
    'Luxury wedding planning, catering, décor and event management in Noida. We create and you celebrate.',
}

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[var(--color-burgundy)] text-[var(--color-white)]">
          <div className="absolute inset-0">
            <Image
              src={heroImageData}
              alt="Premium wedding décor with rich draping, warm chandeliers and elegant seating"
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,10,8,0.2),_rgba(20,8,11,0.75))]" />
          </div>

          <div className="relative container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
                Since 1985
              </p>
              <h1 className="mt-4 text-display font-serif text-[var(--color-gold-primary)]">
                Shree Anand
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-white)]/85">
                Wedding planner • caterers &amp; decorators • event management
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-white)]/80">
                We create and you celebrate. From intimate family milestones to grand wedding experiences, we turn every event into a memorable story.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Plan my event</Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
                {[
                  { label: 'Clients', value: '2500+' },
                  { label: 'Events', value: '2000+' },
                  { label: 'Setups', value: '100+' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[var(--radius-card)] border border-[var(--color-gold-primary)]/40 bg-[var(--color-white)]/5 p-3 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[var(--color-gold-primary)]">{item.value}</div>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-white)]/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="rounded-[1.5rem] border border-[var(--color-gold-primary)]/50 bg-[var(--color-white)]/10 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[1rem] border border-[var(--color-gold-primary)]/40">
                  <Image
                    src={heroImageData}
                    alt="Luxury premium wedding décor concept with rich draped venue styling"
                    width={760}
                    height={980}
                    className="h-[420px] w-full object-cover sm:h-[500px]"
                  />
                </div>
                <div className="mt-4 rounded-[1rem] border border-[var(--color-gold-primary)]/30 bg-[var(--color-burgundy)]/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-primary)]">
                    Premium Theme
                  </p>
                  <p className="mt-2 text-lg font-medium text-[var(--color-white)]">India Expo Mart Lawn</p>
                  <p className="mt-2 text-sm text-[var(--color-white)]/75">
                    Upcoming concept styling with layered drapes, warm brass accents and signature hospitality flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="services"
          eyebrow="What we do"
          title="Full-service wedding and event experiences"
          description="From venue styling to guest hospitality, each celebration is planned with a warm, premium and deeply personal touch."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">
                  Service
                </p>
                <h3 className="mt-4 text-2xl text-[var(--color-near-black)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Button href={service.href} variant="ghost">
                    Learn more
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <section className="bg-[var(--color-cream-deep)]">
          <div className="container section-pad">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">
                Experience
              </p>
              <h2 className="mt-3 text-h2 text-[var(--color-near-black)]">Planning with care, elegance and operational precision</h2>
            </div>
            <StatsRow items={stats} />
          </div>
        </section>

        <Section
          eyebrow="Featured portfolio"
          title="A glimpse of refined spaces and warm celebrations"
          description="Luxury weddings, intimate gatherings and beautifully staged event moments built around your story and your guests."
        >
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {galleryHighlights.map((item) => (
              <Card key={item.title} className="group overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[var(--color-near-black)]">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Why clients choose us"
          title="Luxury wedding execution with a deeply personal touch"
          description="Every celebration is shaped around your priorities, guest comfort and the emotional atmosphere you want to create."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Thoughtful planning',
                text: 'Detailed coordination from venue concepts to guest flow, so your celebration feels effortless and polished.',
              },
              {
                title: 'Premium styling',
                text: 'Warm, statement décor with draping, florals, seating, lighting and atmosphere designed to feel rich and memorable.',
              },
              {
                title: 'Guest-first hospitality',
                text: 'A smooth experience for every guest, from welcome moments to service timing, comfort and memorable details.',
              },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-primary)] bg-[var(--color-cream)] text-lg text-[var(--color-gold-dark)]">
                  ✦
                </div>
                <h3 className="text-2xl text-[var(--color-near-black)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-burgundy)]/80">{item.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <div className="container section-pad pt-0">
          <CTABand
            title="Let’s create a celebration your guests will talk about for years"
            description="Share your event vision and date, and we will shape a personalised plan for your venue, styling and guest experience."
          />
        </div>

        <Section
          eyebrow="FAQ"
          title="Questions clients often ask before booking"
          description="Clear answers for planning, event scope and service coordination."
        >
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Section>
      </main>
    </>
  )
}
