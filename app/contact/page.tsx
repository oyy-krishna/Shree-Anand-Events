import type { Metadata } from 'next'

import { ContactForm } from '../../components/forms/ContactForm'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { contact } from '../../lib/tokens'

export const metadata: Metadata = {
  title: 'Contact / Get a Quote',
  description: 'Get in touch with Shree Anand for wedding planning, décor, catering and event management enquiries in Noida.',
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact / Get a Quote' }]} />
      <main>
        <Section
          eyebrow="Contact us"
          title="Tell us about your event and we’ll help shape the plan"
          description="Share the basics and we’ll guide the next step with a response tailored to your celebration, venue and guest count."
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-2xl text-[var(--color-near-black)]">Get in touch</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-burgundy)]/80">
                  <li>Phone: <a href={`tel:${contact.phone1.replace(/\s+/g, '')}`} className="font-medium text-[var(--color-gold-dark)]">{contact.phone1}</a></li>
                  <li>Phone: <a href={`tel:${contact.phone2.replace(/\s+/g, '')}`} className="font-medium text-[var(--color-gold-dark)]">{contact.phone2}</a></li>
                  <li>Email: <a href={`mailto:${contact.email}`} className="font-medium text-[var(--color-gold-dark)]">{contact.email}</a></li>
                  <li>Address: {contact.address.full}</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl text-[var(--color-near-black)]">Response expectations</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                  [NEEDS CLIENT CONFIRMATION: expected response time should be confirmed before publishing a fixed service promise.] We respond to enquiries promptly and will discuss your event requirements, date and venue details before finalising the planning approach.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello Shree Anand, I would like to plan an event.')}`} external>WhatsApp us</Button>
                </div>
              </Card>
            </div>

            <ContactForm />
          </div>
        </Section>
      </main>
    </>
  )
}
