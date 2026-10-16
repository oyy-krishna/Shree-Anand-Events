import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shree-anand.vercel.app'
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/wedding-planning',
    '/services/catering',
    '/services/decoration-design',
    '/services/event-management',
    '/pictures',
    '/blog',
    '/contact',
  ]

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
