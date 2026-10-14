import fs from 'fs'
import path from 'path'

export type BlogPostCategory =
  | 'Decoration ideas'
  | 'Catering guides'
  | 'Budgeting'
  | 'Planning advice'

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: BlogPostCategory
  date: string
  author: string
  readTime: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) {
    return {
      frontmatter: {},
      content: markdown,
    }
  }

  const [, rawFrontmatter, content] = match
  const frontmatter: Record<string, string> = {}

  for (const line of rawFrontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    frontmatter[key] = value.replace(/^['"]|['"]$/g, '')
  }

  return { frontmatter, content }
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))

  return files
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const markdown = fs.readFileSync(filePath, 'utf8')
      const { frontmatter, content } = parseFrontmatter(markdown)

      return {
        slug: file.replace(/\.mdx$/, ''),
        title: frontmatter.title || 'Untitled post',
        description: frontmatter.description || '',
        category: (frontmatter.category as BlogPostCategory) || 'Planning advice',
        date: frontmatter.date || '2026-10-14',
        author: frontmatter.author || 'Shree Anand',
        readTime: frontmatter.readTime || '4 min read',
        content: content.trim(),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, category: BlogPostCategory, max = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, max)
}
