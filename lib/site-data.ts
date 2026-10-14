import type { StaticImageData } from 'next/image'

import heroImage from '../raw-assets/extracted/expo-mart/p04-img02.jpeg'
import galleryOne from '../raw-assets/extracted/profile/p02-img02.jpeg'
import galleryTwo from '../raw-assets/extracted/profile/p05-img01.jpeg'
import galleryThree from '../raw-assets/extracted/profile/p06-img01.jpeg'
import galleryFour from '../raw-assets/extracted/profile/p08-img02.jpeg'

export type NavItem = {
  label: string
  href: string
}

export type ServiceItem = {
  title: string
  description: string
  href: string
}

export type StatItem = {
  label: string
  value: string
}

export type GalleryHighlight = {
  title: string
  image: StaticImageData
  alt: string
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Wedding Planning', href: '/services/wedding-planning' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services: ServiceItem[] = [
  {
    title: 'Wedding Planning',
    description: 'End-to-end wedding coordination with venue support, logistics and memorable guest experiences.',
    href: '/services/wedding-planning',
  },
  {
    title: 'Catering',
    description: 'Curated meal experiences, buffet styling, and celebratory hospitality for every guest list size.',
    href: '/services/catering',
  },
  {
    title: 'Decoration & Design',
    description: 'Luxury staging, floral styling, mandaps, entrances and decor stories tailored to your celebration.',
    href: '/services/decoration-design',
  },
  {
    title: 'Event Management',
    description: 'Birthdays, corporate gatherings and family events planned with precision, warmth and polish.',
    href: '/services/event-management',
  },
]

export const stats: StatItem[] = [
  { label: 'Clients', value: '2500+' },
  { label: 'Events', value: '2000+' },
  { label: 'Team members', value: '400+' },
  { label: 'Decor setups', value: '100+' },
]

export const galleryHighlights: GalleryHighlight[] = [
  { title: 'Wedding décor', image: galleryOne, alt: 'Wedding décor scene with warm lighting and floral styling' },
  { title: 'Luxury venue setup', image: galleryTwo, alt: 'Luxury event venue lounge with elegant seating and soft warm tones' },
  { title: 'Stage styling', image: galleryThree, alt: 'Decorative event stage with floral arrangements and chandeliers' },
  { title: 'Premium theme concept', image: galleryFour, alt: 'Premium wedding theme concept with layered draping and rich warm palette' },
]

export const homeFaqs = [
  {
    question: 'What services does Shree Anand cover?',
    answer:
      'The company offers wedding planning, catering, decoration and event management services, with a one-stop approach for celebrations across Noida and surrounding regions.',
  },
  {
    question: 'Do you plan events outside of Noida?',
    answer:
      '[NEEDS CLIENT CONFIRMATION: confirm service-area coverage beyond Noida and nearby cities before publishing as a fact.]',
  },
  {
    question: 'Can I request a custom event quote?',
    answer:
      'Yes. Use the enquiry form or WhatsApp to share your event type, date, guest count and venue preferences, and the team will get back to you with a tailored response.',
  },
]

export const heroImageData = heroImage
