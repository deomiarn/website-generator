[//]: # 'ADR-001 – Template-Engine'
[//]: # 'Zweck: Wahl der Templating-Technik für Generator-Ausgabe.'
[//]: # 'Done: Begründete Wahl, Alternativen, Konsequenzen.'

# ADR-001: Template-Engine = EJS

## Kontext

Der Generator produziert TSX/JSON/Config-Dateien aus Platzhaltern (Sections, Layout, SEO). MVP braucht schnelle Iteration, geringe Komplexität.

## Entscheidung

EJS als Template-Engine.

## Alternativen

Handlebars (ähnlich, mehr Boilerplate); AST/CodeGen (mächtig, zu komplex für MVP).

## Konsequenzen

- sehr schneller Start, +einfach zu lesen/erweitern; −weniger Struktur als AST (vertretbar im MVP).
