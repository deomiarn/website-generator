[//]: # 'ADR-002 – Frontend-Framework'
[//]: # 'Zweck: Wahl des Zielframeworks für exportierte Projekte & Studio.'
[//]: # 'Done: Portfolio-relevante Begründung.'

# ADR-002: Framework = Next.js + Tailwind (+ shadcn/ui)

## Kontext

Export soll sofort Vercel-ready, SEO-stark und verbreitet sein; Studio teilt den Stack.

## Entscheidung

Next.js 14 (App Router) + TailwindCSS + shadcn/ui.

## Alternativen

Astro (stark SSG, kleineres Ökosystem), Vite/React (mehr Eigenbau).

## Konsequenzen

- grosses Ökosystem & Beispiele, +Vercel-first, −gewisse Lernkurve (akzeptiert).
