[//]: # '06 – Test Strategy'
[//]: # 'Zweck: Testebenen, Automatisierung und TDD-Vorgehen.'
[//]: # 'Inhalt: Unit, Integration, Smoke, CI-Triggers, Metriken, TDD.'
[//]: # 'Done: Klar, wann PRs „grün“ sind und wie TDD gelebt wird.'

# Test Strategy

## Ebenen

Unit-Tests prüfen Parser, Token Engine und SEO Builder.  
Integrationstests prüfen die Pipeline bis zum Export.  
Ein Smoke-Test startet das generierte Next.js-Projekt und rendert Kern-Sections.

## TDD-Ansatz

Tests werden pro Feature zuerst geschrieben.  
Die Tests schlagen rot fehl und leiten die Implementierung.  
Nach der Implementierung laufen die Tests grün.  
Dann wird der Code behutsam refaktoriert.

## Automatisierung

PRs auf main führen Lint, Unit und Integration aus.  
Tags führen den Smoke-Test aus.  
Die CI blockiert Merges bei Fehlschlägen.

## Metriken

Coverage für Unit liegt bei mindestens 70 Prozent.  
Der Smoke-Test benötigt höchstens zwei Minuten.  
Die Generationszeit eines Standardprojekts liegt unter dreissig Sekunden.
