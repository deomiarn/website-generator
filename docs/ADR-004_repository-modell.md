[//]: # 'ADR-004 – Repository-Modell'
[//]: # 'Zweck: Struktur & Grenzen; spätere Skalierung.'

# ADR-004: Repository-Modell (Monorepo)

## Kontext

UI, Core, Templates sollen getrennt, aber gemeinsam versioniert & getestet werden.

## Entscheidung

PNPM Workspaces: apps/studio (UI), packages/core (Generator), packages/templates (EJS), optional packages/cli.

## Alternativen

Single-Repo ohne Workspaces (unklare Grenzen), Multi-Repo (höherer CI/Dependency-Aufwand).

## Konsequenzen

- Wiederverwendung, +klare Abhängigkeiten, +später leicht in Services splittbar; −etwas höherer Setup-Aufwand.
