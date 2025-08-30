import { parse as parseYaml } from 'yaml'
import { SitemapInputSchema } from './schema/sitemap.schema'
import type { Sitemap } from './types/sitemap.types'
import { isAsciiKebab } from './utils/slug'
import { ERRORS } from './utils/errors'
import { normalizeSlug } from './policies/normalizeSlug'
import { stripOrder } from './policies/stripOrder'

export interface ParseOptions {
  /** Only page[0] may have empty slug '' */
  homepageEmptySlugOnly?: boolean
  /** Non-home empty/whitespace slug → generate from title */
  autoSlugFromTitle?: boolean
  /** Force ASCII-kebab output */
  forceAsciiKebabOutput?: boolean
}

const defaults: Required<ParseOptions> = {
  homepageEmptySlugOnly: true,
  autoSlugFromTitle: true,
  forceAsciiKebabOutput: true,
}

export function parseSitemap(input: string | object, options?: ParseOptions): Sitemap {
  const opt = { ...defaults, ...(options ?? {}) }

  // 1) Parse input
  let data: unknown

  if (typeof input === 'string') {
    const raw = input.trim()
    if (!raw) throw new Error(ERRORS.INVALID_INPUT)

    // JSON-first if it starts with { or [
    const first = raw[0]
    if (first === '{' || first === '[') {
      try {
        data = JSON.parse(raw)
      } catch {
        throw new Error(ERRORS.INVALID_INPUT)
      }
    } else {
      // YAML, then JSON fallback
      try {
        const y = parseYaml(raw)
        if (y == null || typeof y !== 'object') throw new Error('not-an-object')
        data = y
      } catch {
        try {
          data = JSON.parse(raw)
        } catch {
          throw new Error(ERRORS.INVALID_INPUT)
        }
      }
    }
  } else {
    data = stripOrder(input)
  }

  // 2) Validate shape (strict)
  const parsed = SitemapInputSchema.safeParse(data)
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')
    throw new Error(msg)
  }

  // 3) Normalize + policies
  const { site, pages } = parsed.data
  const normalized = pages.map((p, i) => {
    const title = p.title.trim()
    const slug = normalizeSlug(p.slug, title, i === 0, opt)

    if (opt.homepageEmptySlugOnly && i !== 0 && slug === '') {
      throw new Error(ERRORS.ONLY_FIRST_PAGE_EMPTY)
    }
    if (opt.forceAsciiKebabOutput && slug !== '' && !isAsciiKebab(slug)) {
      throw new Error(ERRORS.NOT_ASCII_KEBAB)
    }
    return { ...p, title, slug }
  })

  // 4) Duplicate slugs (ignore empty homepage slug)
  const nonEmpty = normalized.map((p) => p.slug).filter((s) => s !== '')
  const dup = nonEmpty.find((s, i) => nonEmpty.indexOf(s) !== i)
  if (dup) throw new Error(ERRORS.DUPLICATE_SLUG(dup))

  // 5) Assign order
  return { site, pages: normalized.map((p, i) => ({ ...p, order: i })) }
}
