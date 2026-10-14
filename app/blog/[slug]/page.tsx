import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Breadcrumbs } from '../../../components/ui/Breadcrumbs'
import { Card } from '../../../components/ui/Card'
import { Section } from '../../../components/ui/Section'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../../../lib/blog-data'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Blog post',
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

function renderMarkdown(content: string) {
  const blocks = content
    .split(/\n\n+/)
    .filter(Boolean)

  return blocks.map((block, index) => {
    if (block.startsWith('# ')) {
      return <h2 key={index} className="mt-8 mb-4 text-3xl text-[var(--color-near-black)]">{block.replace('# ', '')}</h2>
    }

    if (block.startsWith('## ')) {
      return <h3 key={index} className="mt-8 mb-4 text-2xl text-[var(--color-near-black)]">{block.replace('## ', '')}</h3>
    }

    if (block.startsWith('> ')) {
      return <blockquote key={index} className="my-6 border-l-4 border-[var(--color-gold-primary)] bg-[var(--color-cream)] px-5 py-4 text-sm italic text-[var(--color-burgundy)]/80">{block.replace('> ', '')}</blockquote>
    }

    if (block.startsWith('- ')) {
      return <li key={index} className="ml-6 list-disc text-sm leading-7 text-[var(--color-burgundy)]/80">{block.replace('- ', '')}</li>
    }

    return <p key={index} className="mt-4 text-base leading-8 text-[var(--color-burgundy)]/80">{block}</p>
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
      <main>
        <Section eyebrow={post.category} title={post.title} description={post.description}>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.12em] text-[var(--color-gold-dark)]">
              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {post.readTime} · {post.author}
            </p>
            <article className="mt-8">{renderMarkdown(post.content)}</article>
          </div>
        </Section>

        {relatedPosts.length > 0 ? (
          <Section eyebrow="Related posts" title="Continue reading" description="More planning ideas and premium event guidance.">
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Card key={related.slug} className="p-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold-dark)]">{related.category}</p>
                  <h3 className="mt-3 text-2xl text-[var(--color-near-black)]">{related.title}</h3>
                  <div className="mt-4">
                    <Link href={`/blog/${related.slug}`} className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-gold-dark)]">
                      Read more →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        ) : null}
      </main>
    </>
  )
}
