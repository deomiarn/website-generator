import { NextResponse } from 'next/server'
import { parseSitemap } from '@wg/core'

export async function POST(req: Request) {
  const text = await req.text()
  try {
    const result = parseSitemap(text)
    return NextResponse.json(result)
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'parse error' }, { status: 400 })
  }
}
