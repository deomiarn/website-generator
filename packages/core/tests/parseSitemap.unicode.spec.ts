import { parseSitemap } from '../src'

describe('parseSitemap – unicode & auto-slug policy', () => {
  it('generates ASCII-kebab from unicode titles when non-home slug is empty/whitespace', () => {
    const r = parseSitemap({
      site: { title: 'X' },
      pages: [
        { slug: '', title: 'Start', type: 'landing' },
        { slug: '   ', title: 'Über uns', type: 'content' },
        { slug: '', title: 'Crème brûlée', type: 'content' },
        { slug: 'Kontakt', title: 'Kontakt & Büro', type: 'contact' },
      ],
    } as any)
    expect(r.pages.map((p) => p.slug)).toEqual(['', 'ueber-uns', 'creme-brulee', 'kontakt'])
  })

  it('keeps empty slug only for first page; errors if empty on non-home when autoSlugFromTitle=false', () => {
    expect(() =>
      parseSitemap(
        {
          site: { title: 'X' },
          pages: [
            { slug: '', title: 'Home', type: 'landing' },
            { slug: '', title: 'Menu', type: 'content' },
          ],
        } as any,
        { autoSlugFromTitle: false }
      )
    ).toThrow(/must have a slug|only the first page/i)
  })

  it('rejects duplicate slugs after normalization', () => {
    expect(() =>
      parseSitemap({
        site: { title: 'X' },
        pages: [
          { slug: '', title: 'Home', type: 'landing' },
          { slug: 'über', title: 'Über', type: 'content' },
          { slug: 'ueber', title: 'Ueber', type: 'content' },
        ],
      } as any)
    ).toThrow(/duplicate slug/i)
  })

  it('rejects whitespace-only slug literal (not home) when autoSlugFromTitle=false', () => {
    expect(() =>
      parseSitemap(
        {
          site: { title: 'X' },
          pages: [
            { slug: '', title: 'Home', type: 'landing' },
            { slug: '   ', title: 'Team', type: 'content' },
          ],
        } as any,
        { autoSlugFromTitle: false }
      )
    ).toThrow(/must have a slug|whitespace/i)
  })
})
