// Unicode -> ASCII-kebab normalization
// Rules:
// - trim, lower
// - specific German umlauts/ß handling (ä->ae, ö->oe, ü->ue, ß->ss)
// - NFKD + remove combining characters (diacritics)
// - everything not [a-z0-9 ] -> space
// - whitespace -> '-'; multiple '-' -> single '-'
// - remove leading/trailing '-'

const deMap: Record<string, string> = {
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  Ä: 'ae',
  Ö: 'oe',
  Ü: 'ue',
  ß: 'ss',
}

export function toAsciiKebab(input: string): string {
  if (!input) return ''
  let s = input.trim()

  // 1) Handle DE special cases first
  s = s.replace(/[äöüÄÖÜß]/g, (m) => deMap[m] ?? m)

  // 2) Unicode normalization + remove diacritics
  s = s.normalize('NFKD').replace(/\p{M}+/gu, '') // combining marks

  // 3) lower + non-ASCII-word chars to space
  s = s.toLowerCase().replace(/[^a-z0-9]+/g, ' ')

  // 4) whitespace -> '-' ; reduce multiple '-'
  s = s.trim().replace(/\s+/g, '-').replace(/-+/g, '-')

  return s
}

// Guard: is ascii-kebab?
export function isAsciiKebab(s: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)
}
