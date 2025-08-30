import { NextResponse } from 'next/server'
import type { Sitemap } from '@wg/core'
import { parseSitemap } from '@wg/core'

export async function POST(req: Request) {
  const text = await req.text()
  try {
    const result: Sitemap = parseSitemap(text)
    return NextResponse.json(result)
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'parse error'
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}
