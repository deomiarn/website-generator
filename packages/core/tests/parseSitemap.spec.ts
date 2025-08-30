import type { Sitemap } from '../src'
import { parseSitemap } from '../src'

const yamlInput = `
site:
  title: "Pizza Napoli"
pages:
  - slug: ""
    title: "Home"
    type: "landing"
  - slug: "menu"
    title: "Menu"
    type: "content"
  - slug: "contact"
    title: "Contact"
    type: "contact"
`

const jsonInput = {
  site: { title: 'Pizza Napoli' },
  pages: [
    { slug: '', title: 'Home', type: 'landing' },
    { slug: 'menu', title: 'Menu', type: 'content' },
    { slug: 'contact', title: 'Contact', type: 'contact' },
  ],
}

describe('parseSitemap (happy + core errors)', () => {
  it('parses YAML into a normalized structure (incl. order)', () => {
    const r: Sitemap = parseSitemap(yamlInput)
    expect(r.site.title).toBe('Pizza Napoli')
    expect(r.pages).toHaveLength(3)
    expect(r.pages[0]).toMatchObject({ slug: '', title: 'Home', type: 'landing', order: 0 })
    expect(r.pages.map((p) => p.order)).toEqual([0, 1, 2])
  })

  it('parses JSON object into the same structure', () => {
    const r: Sitemap = parseSitemap(jsonInput as any)
    expect(r.pages.map((p) => p.slug)).toEqual(['', 'menu', 'contact'])
  })

  it('throws error if pages are missing', () => {
    expect(() => parseSitemap(`site:\n  title: X`)).toThrow(/pages/i)
  })

  it('normalizes non-kebab slugs to kebab-case (no throw)', () => {
    const bad = {
      site: { title: 'X' },
      pages: [{ slug: 'Bad Space', title: 'Oops', type: 'content' }],
    }
    const r = parseSitemap(bad as any)
    expect(r.pages[0].slug).toBe('bad-space')
  })

  it('handles empty YAML string input', () => {
    expect(() => parseSitemap('')).toThrow(/neither valid YAML nor JSON/i)
  })

  it('handles malformed JSON string input', () => {
    expect(() => parseSitemap('{bad json}')).toThrow(/neither valid YAML nor JSON/i)
  })

  it('requires site.title (SEO)', () => {
    const input = { site: {} as any, pages: [{ slug: '', title: 'Home', type: 'landing' }] }
    expect(() => parseSitemap(input)).toThrow(/site\.title/i)
  })

  it('preserves input order for "order" field', () => {
    const input = {
      site: { title: 'Test' },
      pages: [
        { slug: 'third', title: '3', type: 'content' },
        { slug: 'first', title: '1', type: 'content' },
        { slug: 'second', title: '2', type: 'content' },
      ],
    }
    const result = parseSitemap(input)
    expect(result.pages.map((p) => p.order)).toEqual([0, 1, 2])
    expect(result.pages.map((p) => p.slug)).toEqual(['third', 'first', 'second'])
  })

  it('validates page type values', () => {
    const input = {
      site: { title: 'Test' },
      pages: [{ slug: '', title: 'Invalid', type: 'invalid-type' as any }],
    }
    expect(() => parseSitemap(input)).toThrow()
  })

  it('rejects array and null input', () => {
    expect(() => parseSitemap([] as any)).toThrow()
    expect(() => parseSitemap(null as any)).toThrow()
  })

  it('does not mutate the original input object', () => {
    const input = {
      site: { title: 'X' },
      pages: [{ slug: '  spaced  ', title: '  T  ', type: 'content' }],
    }
    const clone = JSON.parse(JSON.stringify(input))
    parseSitemap(input as any)
    expect(input).toEqual(clone)
  })

  it('is idempotent (parsing result again yields same slugs & order)', () => {
    const input = {
      site: { title: 'X' },
      pages: [
        { slug: '', title: 'Home', type: 'landing' },
        { slug: 'menu', title: 'Menu', type: 'content' },
      ],
    }
    const r1 = parseSitemap(input)
    const r2 = parseSitemap(r1 as any)
    expect(r2.pages.map((p) => [p.slug, p.order])).toEqual(r1.pages.map((p) => [p.slug, p.order]))
  })
})
