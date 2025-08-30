export const pageTypes = [
  'landing',
  'content',
  'contact',
  'blog',
  'pricing',
  'faq',
  'custom',
] as const
export type PageType = (typeof pageTypes)[number]

export interface PageBase {
  slug: string
  title: string
  type: PageType
}

export interface Page extends PageBase {
  order: number // index in pages array
}
