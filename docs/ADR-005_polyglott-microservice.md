[//]: # 'ADR-005 – Polyglott-Microservice'
[//]: # 'Zweck: Sprache zeigen, ohne MVP zu gefährden.'

# ADR-005: Polyglott-Microservice (Phase 2)

## Kontext

MVP soll schnell lieferbar sein; gleichzeitiger Zweit-Service erhöht Infra-Overhead (CI/CD, Deploy, CORS, Secrets, Monitoring).

## Entscheidung

MVP: integriertes Next.js-Backend. Phase 2: separater Service (Python/FastAPI oder Java/Quarkus) für ein klar umrissenes Feature (z. B. SEO-Analyzer).

## Alternativen

Separater Service schon im MVP; reines Java/Python-BE ohne Next.js-BE.

## Konsequenzen

- MVP-Fokus & Lieferfähigkeit, +Portfolio-Pfad zu Polyglott; −Sprach-Showcase verschoben (bewusst).
