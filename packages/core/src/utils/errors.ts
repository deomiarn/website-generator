export const ERRORS = {
  INVALID_INPUT: 'Input is neither valid YAML nor JSON',
  NON_HOME_EMPTY_SLUG: 'pages.slug: non-home must have a slug',
  ONLY_FIRST_PAGE_EMPTY: 'pages: only the first page may have an empty slug',
  NOT_ASCII_KEBAB: 'pages.slug: not ascii-kebab after normalization',
  CANNOT_AUTOGEN_FROM_EMPTY_TITLE: 'pages.slug: cannot generate slug from empty title',
  DUPLICATE_SLUG: (slug: string) => `pages.slug: duplicate slug "${slug}"`,
} as const
