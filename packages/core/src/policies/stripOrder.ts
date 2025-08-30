// deep clone and remove `order` on pages (idempotent)
export function stripOrder(input: unknown): unknown {
  const clone = JSON.parse(JSON.stringify(input ?? {})) as unknown

  if (
    clone &&
    typeof clone === 'object' &&
    'pages' in (clone as Record<string, unknown>) &&
    Array.isArray((clone as { pages?: unknown }).pages)
  ) {
    const withPages = clone as { pages: Array<Record<string, unknown>> }
    withPages.pages = withPages.pages.map((p) => {
      if (p && typeof p === 'object') {
        // remove `order`
        return Object.fromEntries(Object.entries(p).filter(([k]) => k !== 'order')) as Record<
          string,
          unknown
        >
      }
      return p
    })
  }

  return clone
}
