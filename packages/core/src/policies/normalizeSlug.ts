// normalize slug with policy
import { toAsciiKebab } from '../utils/slug'
import { ERRORS } from '../utils/errors'
import { ParseOptions } from '../parseSitemap'

export function normalizeSlug(
  raw: string,
  title: string,
  isHome: boolean,
  opt: Required<ParseOptions>
): string {
  const original = (raw ?? '').trim()
  const empty = original === ''

  if (isHome) {
    if (empty) return ''
    const ascii = toAsciiKebab(original)
    return opt.forceAsciiKebabOutput ? ascii : original
  }

  if (empty) {
    if (!opt.autoSlugFromTitle) throw new Error(ERRORS.NON_HOME_EMPTY_SLUG)
    const gen = toAsciiKebab(title)
    if (!gen) throw new Error(ERRORS.CANNOT_AUTOGEN_FROM_EMPTY_TITLE)
    return gen
  }

  const ascii = toAsciiKebab(original)
  return opt.forceAsciiKebabOutput ? ascii : original
}
