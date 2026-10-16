const pictureBase = '/images/Pictures'
const bridalScene = `${pictureBase}/Lights.jpeg`
const loungeScene = `${pictureBase}/sitting-area.jpeg`
const stageScene = `${pictureBase}/stage.jpeg`
const venueScene = `${pictureBase}/decoration.jpeg`
const expoEntry = `${pictureBase}/Entrance.jpeg`
const expoDrape = `${pictureBase}/Wall.jpeg`

export type GalleryCategory =
  | 'All'
  | 'Weddings'
  | 'Haldi'
  | 'Mehendi'
  | 'Engagement'
  | 'Catering'
  | 'Corporate Events'

export type GalleryItem = {
  id: string
  category: Exclude<GalleryCategory, 'All'>
  title: string
  alt: string
  src: string
  width: number
  height: number
}

export const galleryCategories: Array<{ label: GalleryCategory; description: string }> = [
  { label: 'All', description: 'All events and mood boards' },
  { label: 'Weddings', description: 'Wedding moments and décor storytelling' },
  { label: 'Haldi', description: 'Photos coming soon' },
  { label: 'Mehendi', description: 'Photos coming soon' },
  { label: 'Engagement', description: 'Photos coming soon' },
  { label: 'Catering', description: 'Photos coming soon' },
  { label: 'Corporate Events', description: 'Photos coming soon' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'wedding-01',
    category: 'Weddings',
    title: 'Luxury wedding ambience',
    alt: 'Wedding décor scene with warm lighting and layered textures',
    src: bridalScene,
    width: 1200,
    height: 900,
  },
  {
    id: 'wedding-02',
    category: 'Weddings',
    title: 'Premium venue styling',
    alt: 'Elegant event lounge with warm seating and luxury styling',
    src: loungeScene,
    width: 1200,
    height: 900,
  },
  {
    id: 'wedding-03',
    category: 'Weddings',
    title: 'Stage story moment',
    alt: 'Decorative event stage with floral arrangements and warm chandeliers',
    src: stageScene,
    width: 1200,
    height: 900,
  },
  {
    id: 'proposal-01',
    category: 'Weddings',
    title: 'Premium theme concept',
    alt: 'Upcoming premium theme proposal with draping, brass details and rich event mood',
    src: venueScene,
    width: 1200,
    height: 900,
  },
  {
    id: 'proposal-02',
    category: 'Weddings',
    title: 'Entrance styling concept',
    alt: 'Luxury event entrance concept with draped fabric and warm welcome styling',
    src: expoEntry,
    width: 1200,
    height: 900,
  },
  {
    id: 'proposal-03',
    category: 'Weddings',
    title: 'Decor texture palette',
    alt: 'Rich drapery and velvet-inspired decorative styling concept',
    src: expoDrape,
    width: 1200,
    height: 900,
  },
]
