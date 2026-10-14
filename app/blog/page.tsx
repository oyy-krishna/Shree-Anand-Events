import type { Metadata } from 'next'
import Link from 'next/link'

import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { getAllPosts } from '../../lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Planning ideas, décor inspiration, budgeting guidance and catering advice for premium weddings and events.',
}

const categories = ['Decoration ideas', 'Catering guides', 'Budgeting', 'Planning advice']

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <main>
        <Section
          eyebrow="Blog"
          title="Ideas, guidance and practical planning notes for memorable events"
          description="A growing set of guidance posts with real event-planning insights and gentle review notes where a fact still needs confirmation."
          align="center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <div key={category} className="rounded-full border border-[var(--color-gold-primary)] bg-[var(--color-white)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--color-burgundy)]">
                {category}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">{post.category}</p>
                  <h3 className="mt-3 text-2xl text-[var(--color-near-black)]">{post.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-burgundy)]/70">
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {post.readTime}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-burgundy)]/80">{post.description}</p>
                  <div className="mt-5">
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-gold-dark)] hover:text-[var(--color-gold-primary)]">
                      Read article →
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}
