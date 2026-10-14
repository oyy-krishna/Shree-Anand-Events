import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React strict mode for catching bugs early
  reactStrictMode: true,

  // Allow images from these external domains (add more as needed)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add external image domains here as needed
    ],
  },

  // Redirect bare http:// and www to https:// canonical (Vercel handles this too,
  // but explicit is better for local awareness)
  async redirects() {
    return []
  },

  // Security headers (basic set; Chunk 9 will harden these)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
