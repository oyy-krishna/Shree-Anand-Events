'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { galleryCategories, galleryItems, type GalleryCategory } from '../../lib/gallery-data'

export default function PicturesPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const selectedItem = filteredItems.find((item) => item.id === selectedId) ?? filteredItems[0] ?? null

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!selectedItem) return

      if (event.key === 'Escape') {
        setSelectedId(null)
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
        const nextIndex = event.key === 'ArrowRight'
          ? (currentIndex + 1) % filteredItems.length
          : (currentIndex - 1 + filteredItems.length) % filteredItems.length

        setSelectedId(filteredItems[nextIndex]?.id ?? null)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [filteredItems, selectedItem])

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pictures' }]} />
      <main>
        <Section
          eyebrow="Pictures"
          title="Real moments from our premium wedding and event styling"
          description="Browse our picture gallery and explore the work that best reflects our design language and execution style."
          align="center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category.label
              const itemCount = category.label === 'All' ? galleryItems.length : galleryItems.filter((item) => item.category === category.label).length

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
                  className={isActive ? 'rounded-full border border-[var(--color-gold-primary)] bg-[var(--color-gold-primary)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--color-near-black)]' : 'rounded-full border border-[var(--color-cream-border)] bg-[var(--color-white)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--color-burgundy)]'}
                >
                  {category.label} {itemCount > 0 ? `(${itemCount})` : ''}
                </button>
              )
            })}
          </div>

          {filteredItems.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <button type="button" onClick={() => setSelectedId(item.id)} className="block w-full text-left" aria-label={`View ${item.title}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold-dark)]">{item.category}</p>
                      <h3 className="mt-2 text-xl text-[var(--color-near-black)]">{item.title}</h3>
                    </div>
                  </button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-dashed border-[var(--color-gold-primary)] bg-[var(--color-cream)] p-10 text-center text-[var(--color-burgundy)]/80">
              <p className="text-lg font-medium text-[var(--color-near-black)]">Photos coming soon</p>
              <p className="mt-3">This category is still being populated with real event photography.</p>
            </div>
          )}
        </Section>

        {selectedItem ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,10,11,0.8)] p-4" role="dialog" aria-modal="true" aria-label={selectedItem.title}>
            <div className="relative w-full max-w-4xl rounded-[1.25rem] border border-[var(--color-gold-primary)] bg-[var(--color-white)] p-4 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-[var(--color-burgundy)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[var(--color-white)]"
              >
                Close
              </button>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[0.8rem]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">{selectedItem.category}</p>
                  <h3 className="mt-2 text-2xl text-[var(--color-near-black)]">{selectedItem.title}</h3>
                </div>
                <div className="flex gap-2">
                  <Button href="/contact" variant="ghost">Get a quote</Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  )
}
