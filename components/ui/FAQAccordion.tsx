'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-cream-border)] bg-[var(--color-white)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="font-medium text-[var(--color-near-black)]">
                {item.question}
              </span>
              <span className="text-xl text-[var(--color-gold-dark)]">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              className={isOpen ? 'block border-t border-[var(--color-cream-border)]' : 'hidden'}
            >
              <p className="px-5 py-4 text-sm leading-7 text-[var(--color-burgundy)]/80">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
