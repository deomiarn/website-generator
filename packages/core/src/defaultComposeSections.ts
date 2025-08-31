import type { PageType } from './types/page.types'
import { type SectionId, sections } from './types/sections.types'

const { Pricing, Footer, FAQ, ContactForm, Content, CTA, Custom, Features, Map, Hero } = sections

const DEFAULT_SECTIONS: Record<PageType, SectionId[]> = {
  landing: [Hero, Features, CTA, Footer],
  content: [Hero, Content, CTA, Footer],
  blog: [Hero, Content, CTA, Footer],
  contact: [Hero, ContactForm, Map, Footer],
  pricing: [Hero, Pricing, FAQ, CTA, Footer],
  faq: [Hero, FAQ, CTA, Footer],
  custom: [Hero, Custom, Footer],
}

export function defaultComposeSections(type: PageType): SectionId[] {
  return DEFAULT_SECTIONS[type] ?? DEFAULT_SECTIONS.custom
}
