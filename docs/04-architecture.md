[//]: # '04 – Architektur'
[//]: # 'Zweck: 80/20-Architekturbild + Technologie-Entscheide + Qualitätsmassnahmen.'
[//]: # 'Inhalt: Überblick, C4-Light, Daten-/Ablauf, Tech-Stack, Grenzen, ADR-Verweise.'
[//]: # 'Done: Leser versteht Hauptbausteine & Flüsse in 5 Minuten. Keine Implementierungsdetails.'

# Architektur

## Überblick

Das System besteht aus einer UI-Anwendung in Next.js und einer wiederverwendbaren Core-Bibliothek (zuständig für die
Geschäftslogik).  
Die UI-Anwendung ist für die Interaktion mit dem Nutzer zuständig, während die Core-Bibliothek die Hauptlogik und
Funktionalität bereitstellt.
Persistenz, Authentifizierung und API-Endpunkte laufen im integrierten Backend von Next.js.
Die Core-Bibliothek kapselt Parsing, Section-Components, Token-Anwendung, SEO-Building, den Export, usw.
Ein AI-Adapter ermöglicht einen Mock im MVP und echte Provider in späteren Phasen.

## C4-Light: Container

**Studio (Next.js App Router).**  
Server Components, Route Handlers, Auth.js, Prisma, Tailwind und shadcn/ui.  
Zuständig für Authentifizierung, Projekt-CRUD, Vorschau und das Orchestrieren von Generierungsaktionen.

**Core (Node-Bibliothek).**  
Parser, Section Composer, Token Engine, SEO Builder, Scaffolder und Exporter.  
Framework-arm, abhängig lediglich von EJS für Templates.

**Templates (Package).**  
EJS / TSX-Snippets für Sections, Layouts und SEO-Bausteine.  
Versioniert und separat testbar.

**Datenbank.**  
SQLite in Entwicklung und Postgres (Neon) in Produktion.  
Gemanagt über Prisma Migrations.

**AI-Service (Adapter).**  
Mock-Provider im MVP und umschaltbarer Real-Provider per Umgebungsvariable.

## C4-Light: Komponenten im Core

**Parser.**  
Liest YAML / JSON-Sitemaps und validiert Struktur und Slugs.

**Section Composer.**  
Mappt Seiten auf passende Section-Components anhand von Defaults und Heuristiken.

**Token Engine.**  
Wendet globale Design-Tokens für Farben, Schriftarten und Radius konsistent an.

**SEO Builder.**  
Erzeugt Title, Description, OG-Tags sowie Hilfsdateien wie sitemap.xml und robots.txt.

**Scaffolder & Exporter.**  
Erzeugt ein lauffähiges Next.js-Projekt, packt ein ZIP und legt Vercel-Konfiguration bei.

## Datenfluss (High-Level)

- Der Nutzer erstellt oder importiert eine Sitemap.
- Die UI speichert Projekte, Tokens und Keywords in der Datenbank.
- Bei Aktionen ruft die UI Funktionen aus `@generator/core` auf.
- Core erzeugt Artefakte in einem temporären Arbeitsverzeichnis.
- Die UI zeigt Wireframes und Previews und bietet Download und Deployment an.

## Tech-Stack

Next.js 14 (App Router) mit TypeScript, TailwindCSS und shadcn/ui.  
Prisma ORM mit SQLite (dev) und Postgres (prod).  
Auth.js für Authentifizierung mit Credentials und optionalen OAuth-Providern.  
EJS als Template-Engine für TSX / JSON / Config-Snippets.

## Grenzen & Modularität

Die UI konsumiert ausschliesslich die öffentliche API von `@generator/core`.  
`@generator/templates` wird nur über den Core verwendet.  
Der AI-Zugriff erfolgt über ein Interface und ist austauschbar.  
Exportierte Projekte sind eigenständig lauffähig und nicht vom Studio abhängig.

## Qualität & Tests (Test Driven Development)

ESLint, Prettier und TypeScript strict im ges amten Monorepo.  
Das Projekt TDD mit Fokus auf Kernlogik und öffentliche APIs.
Unit-Tests für Parser, Token Engine und SEO Builder.  
Integrationstests für die Pipeline bis zum Export.  
Smoke-Test für das generierte Next.js-Projekt mit Start und Rendering von Kern-Sections.  
CI führt Lint, Tests und Build aus und prüft Docs-Vollständigkeit.

## Sicherheit & Policies

Auth.js mit Sessions und optionalen OAuth-Providern.  
RBAC light mit Owner, Admin und User.  
Whitelist für den MVP, damit zunächst nur ein definierter Account Zugriff hat.  
Eingabedaten werden validiert und geloggt, und Secrets werden in Umgebungsvariablen gehalten.

## Evolutionspfad

Phase 1 liefert den integrierten Full-Stack MVP mit UI.  
Phase 2 ergänzt einen kleinen Python-Microservice über HTTP für spezialisierte Aufgaben.  
Die bestehenden Interfaces im Core ermöglichen die spätere Auslagerung ohne Bruch.

## ADR-Verweise

- ADR-001: Template-Engine = EJS
- ADR-002: Framework = Next.js + Tailwind
- ADR-003: Persistenz & Auth (Prisma, SQLite/Postgres, Auth.js)
- ADR-004: Repository-Modell (PNPM Workspaces)
- ADR-005: Polyglott-Microservice (Phase 2)
