# Operating Model v1.0
## Branching
- Hauptzweig: `main` (geschützt)
- Arbeitszweige: `feat/*`, `fix/*`, `chore/*`, `docs/*`
- Merge nur via PR (mind. 1 Review – Solo: Selbstreview)

## CI/CD
- PR→main: Build/Lint/Tests
- Tags: `v0.x.y-test` (Preview), `v0.x.y` (Stable) → Smoke (später erweitern)

## Versionierung & Tags
- SemVer in 0.x.y, Preview mit `-test`

## Definition of Done (DoD)
- PR hat: grüne CI, Akzeptanzkriterien erfüllt, README/Docs aktualisiert, Commit‑Konventionen eingehalten
