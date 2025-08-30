'use client'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Alert } from '@/components/ui/alert'
import type { Sitemap } from '@wg/core'

const SAMPLE = `site:
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

type ErrorResponse = { error: string }

function isErrorResponse(x: unknown): x is ErrorResponse {
  if (typeof x !== 'object' || x === null) return false
  const rec = x as Record<string, unknown>
  return typeof rec.error === 'string'
}

export default function ParsePage() {
  const [input, setInput] = useState<string>(SAMPLE)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<Sitemap | null>(null)

  async function onParse() {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/parse', { method: 'POST', body: input })
      const json: unknown = await res.json()

      if (!res.ok) {
        const msg = isErrorResponse(json) ? json.error : 'Parse failed'
        throw new Error(msg)
      }

      setResult(json as Sitemap)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 grid gap-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold">Sitemap Parser</h1>

      <Textarea
        className="font-mono h-56"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="YAML oder JSON hier einfügen"
      />

      <div className="flex gap-2">
        <Button onClick={onParse} disabled={loading}>
          {loading ? 'Parsing…' : 'Parse'}
        </Button>
        <Button variant="secondary" onClick={() => setInput(SAMPLE)}>
          Beispiel laden
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            setInput('')
            setResult(null)
            setError(null)
          }}
        >
          Reset
        </Button>
      </div>

      {error && (
        <Alert className="border-red-300 text-red-700 bg-red-50">
          <div className="font-medium">Fehler</div>
          <div className="text-sm">{error}</div>
        </Alert>
      )}

      {result && (
        <Card className="p-4">
          <h2 className="font-semibold mb-2">Ergebnis</h2>
          <pre className="text-sm overflow-auto max-h-96">{JSON.stringify(result, null, 2)}</pre>
        </Card>
      )}
    </div>
  )
}
