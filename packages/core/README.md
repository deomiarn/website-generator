# @wg/core – Sitemap Parser (R3)

Ein schlanker Parser für KMU-Sitemaps: YAML/JSON → **validiertes & normalisiertes** Objekt.

## API

```ts
import { parseSitemap } from '@wg/core'
import type { Sitemap } from '@wg/core'

const { site, pages }: Sitemap = parseSitemap(input, {
  homepageEmptySlugOnly: true, // Home (erste Seite) darf '' als Slug haben
  autoSlugFromTitle: true, // Nicht-Home: leer/whitespace -> Slug aus Title erzeugen
  forceAsciiKebabOutput: true, // Unicode in -> ASCII-kebab out (stabile URLs)
})
```

### Optionen (optional)

- **homepageEmptySlugOnly** (bool, default `true`): Leerer Slug nur auf erster Seite erlaubt.
- **autoSlugFromTitle** (bool, default `true`): Nicht-Home, leerer/whitespace Slug → aus `title` generieren.
- **forceAsciiKebabOutput** (bool, default `true`): Ausgabe-Slugs immer ASCII-kebab.

## Exports

**Types**

- `PageType`, `PageBase`, `Page`
- `SiteMeta`, `Sitemap`

**Schemas**

- `PageBaseSchema`, `SitemapInputSchema`

**Utils**

- `toAsciiKebab(input: string): string`
- `isAsciiKebab(s: string): boolean`

**Funktion**

- `parseSitemap(input: string | object, options?): Sitemap`

## Validierung & Normalisierung

- Input: YAML **oder** JSON → Zod-Schema (`SitemapInputSchema`, strict).
- `title` wird getrimmt, Slugs werden normalisiert (Unicode→ASCII-kebab).
- Policy: Home darf `''` haben; sonst Auto-Slug (konfigurierbar).
- `order` wird im Output als `0..n-1` gesetzt (Eingabereihenfolge).

## Fehlerformat

Wirft `Error` mit Pfadhinweisen, z. B.:

```
pages.0.slug: invalid slug
pages.slug: duplicate slug "about"
```

## Beispiele

### YAML Input

```yaml
site:
  title: 'Pizza Napoli'
pages:
  - slug: ''
    title: 'Home'
    type: 'landing'
  - slug: 'Über uns'
    title: 'Über uns'
    type: 'content'
```

### Output-Slugs

```
['', 'ueber-uns']
```
