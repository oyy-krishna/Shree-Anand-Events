'use client'

import { useState } from 'react'

type FormState = {
  name: string
  phone: string
  eventType: string
  eventDate: string
  guestCount: string
  message: string
  website: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  message: '',
  website: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string; fallbackLinks?: { whatsapp: string; mailto: string } } | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(null)

    const requiredFields = [form.name, form.phone, form.eventType, form.eventDate, form.guestCount, form.message]
    if (requiredFields.some((value) => !value.trim())) {
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' })
      return
    }

    if (form.website) {
      setStatus({ type: 'error', message: 'Spam protection blocked this submission.' })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const payload = (await response.json()) as {
        success: boolean
        message: string
        fallback?: { whatsapp: string; mailto: string }
      }

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Submission failed.')
      }

      setStatus({
        type: 'success',
        message: payload.message,
        fallbackLinks: payload.fallback,
      })
      setForm(initialState)
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your enquiry. Please call or WhatsApp instead.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.5rem] border border-[var(--color-cream-border)] bg-[var(--color-white)] p-6 shadow-[var(--shadow-card)]" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--color-burgundy)]">
          Full name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-[var(--color-cream-border)] bg-[var(--color-cream)] px-3 py-3 text-[var(--color-near-black)]"
            placeholder="Your name"
            required
          />
        </label>

        <label className="block text-sm font-medium text-[var(--color-burgundy)]">
          Phone number
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-[var(--color-cream-border)] bg-[var(--color-cream)] px-3 py-3 text-[var(--color-near-black)]"
            placeholder="+91 98xxx xxxxx"
            required
          />
        </label>

        <label className="block text-sm font-medium text-[var(--color-burgundy)]">
          Event type
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-[var(--color-cream-border)] bg-[var(--color-cream)] px-3 py-3 text-[var(--color-near-black)]"
            required
          >
            <option value="">Select an event</option>
            <option value="Wedding">Wedding</option>
            <option value="Catering">Catering</option>
            <option value="Decoration & Design">Decoration &amp; Design</option>
            <option value="Corporate Event">Corporate event</option>
            <option value="Birthday">Birthday</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-[var(--color-burgundy)]">
          Event date
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-[var(--color-cream-border)] bg-[var(--color-cream)] px-3 py-3 text-[var(--color-near-black)]"
            required
          />
        </label>

        <label className="block text-sm font-medium text-[var(--color-burgundy)] md:col-span-2">
          Guest count
          <input
            type="number"
            min="1"
            name="guestCount"
            value={form.guestCount}
            onChange={handleChange}
            className="mt-2 w-full rounded-md border border-[var(--color-cream-border)] bg-[var(--color-cream)] px-3 py-3 text-[var(--color-near-black)]"
            placeholder="Approximate guest count"
            required
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-[var(--color-burgundy)]">
        Tell us about your event
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-2 min-h-32 w-full rounded-md border border-[var(--color-cream-border)] bg-[var(--color-cream)] px-3 py-3 text-[var(--color-near-black)]"
          placeholder="Tell us about your venue, vision, size and any special requests."
          required
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Leave this blank
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </label>
      </div>

      {status ? (
        <div
          className={status.type === 'success' ? 'rounded-md border border-emerald-600 bg-emerald-50 p-4 text-sm text-emerald-700' : 'rounded-md border border-red-600 bg-red-50 p-4 text-sm text-red-700'}
          role="status"
        >
          <p>{status.message}</p>
          {status.fallbackLinks ? (
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={status.fallbackLinks.whatsapp} target="_blank" rel="noreferrer" className="font-medium underline">
                Open WhatsApp
              </a>
              <a href={status.fallbackLinks.mailto} className="font-medium underline">
                Send email
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] px-5 py-3 text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-near-black)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  )
}
