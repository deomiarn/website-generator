import type { SitemapInput } from '../src'
import { parseSitemap } from '../src'
import { ERRORS } from '../src/utils/errors'

describe('parseSitemap – unicode & auto-slug policy', () => {
  it('generates ASCII-kebab from unicode titles when non-home slug is empty/whitespace', () => {
    const input: SitemapInput = {
      site: { title: 'X' },
      pages: [
        { slug: '', title: 'Start', type: 'landing' },
        { slug: '   ', title: 'Über uns', type: 'content' },
        { slug: '', title: 'Crème brûlée', type: 'content' },
        { slug: 'Kontakt', title: 'Kontakt & Büro', type: 'contact' },
      ],
    }
    const r = parseSitemap(input)
    expect(r.pages.map((p) => p.slug)).toEqual(['', 'ueber-uns', 'creme-brulee', 'kontakt'])
  })

  it('keeps empty slug only for first page; errors if empty on non-home when autoSlugFromTitle=false', () => {
    const bad: SitemapInput = {
      site: { title: 'X' },
      pages: [
        { slug: '', title: 'Home', type: 'landing' },
        { slug: '', title: 'Menu', type: 'content' },
      ],
    }
    expect(() => parseSitemap(bad, { autoSlugFromTitle: false })).toThrow(
      ERRORS.NON_HOME_EMPTY_SLUG
    )
  })

  it('rejects duplicate slugs after normalization', () => {
    const bad: unknown = {
      site: { title: 'X' },
      pages: [
        { slug: '', title: 'Home', type: 'landing' },
        { slug: 'über', title: 'Über', type: 'content' },
        { slug: 'ueber', title: 'Ueber', type: 'content' },
      ],
    }
    expect(() => parseSitemap(bad as object)).toThrow(/duplicate slug/i)
  })

  it('rejects whitespace-only slug literal (not home) when autoSlugFromTitle=false', () => {
    const bad: SitemapInput = {
      site: { title: 'X' },
      pages: [
        { slug: '', title: 'Home', type: 'landing' },
        { slug: '   ', title: 'Team', type: 'content' },
      ],
    }
    expect(() => parseSitemap(bad, { autoSlugFromTitle: false })).toThrow(
      ERRORS.NON_HOME_EMPTY_SLUG
    )
  })
})
