import { contact } from '../../lib/tokens'

export function FloatingActions() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello Shree Anand, I would like to plan an event.')}`

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.59 2 2.16 6.38 2.16 11.79c0 2.11.67 4.12 1.82 5.78L2 22l4.65-1.55A9.8 9.8 0 0 0 12.04 22c5.45 0 9.88-4.38 9.88-9.79S17.49 2 12.04 2Zm5.38 13.44c-.15.42-.86.8-1.18.85-.31.05-.7.07-1.13-.06-.26-.06-.6-.16-1.03-.31a7.84 7.84 0 0 1-2.42-1.5c-1.7-1.7-2.8-3.89-2.96-4.57-.15-.68.25-1.02.76-1.43.14-.11.3-.24.45-.38.15-.14.2-.25.3-.42.1-.17.08-.31.04-.43-.04-.12-.18-.3-.35-.48l-.34-.36c-.2-.2-.4-.46-.57-.77-.17-.3-.08-.57.04-.75.1-.16.22-.37.36-.57.14-.2.2-.35.3-.52.11-.19.04-.38-.05-.55-.08-.17-.42-.95-.86-1.45-.46-.5-1-.87-1.4-.98-.42-.12-.8-.1-1.16-.08-.32.01-.64.15-.94.31-.38.21-.93.8-.98 1.78-.04.97.94 2.31 1.3 2.79.37.48 2.14 3.68 4.89 5.1.82.39 1.48.67 1.99.85.82.29 1.56.25 2.14.16.7-.11 1.53-.62 1.81-1.2.28-.58.28-1.09.19-1.2-.09-.11-.18-.18-.33-.29Z" />
        </svg>
      </a>
      <a
        href={`tel:${contact.phone1.replace(/\s+/g, '')}`}
        aria-label="Call Shree Anand"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold-primary)] text-[var(--color-near-black)] shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.2 15.2 0 0 0 6.59 6.59l2.2-2.2a1.1 1.1 0 0 1 1.11-.27c1.22.4 2.53.61 3.88.61a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.21 2.66.61 3.88a1.1 1.1 0 0 1-.27 1.11L6.62 10.79Z" />
        </svg>
      </a>
    </div>
  )
}
