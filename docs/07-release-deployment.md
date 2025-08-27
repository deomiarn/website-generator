[//]: # (08 – Release & Deployment)
[//]: # (Zweck: Reproduzierbarer Auslieferungsprozess.)
[//]: # (Inhalt: Branching, Versionierung, Artefakte, Environments.)
[//]: # (Done: Stabiler Weg von Code zu Release.)

# Release & Deployment

## Branching
Trunk-Based mit einem geschützten main.  
Änderungen gelangen nur per Pull Request in den Hauptzweig.

## Versionierung
SemVer in der 0.x.y-Phase für das MVP.  
Preview-Tags tragen das Suffix test.  
Stable-Tags tragen kein Suffix.

## Artefakte
Der Export wird als ZIP erzeugt.  
Eine Vercel-Konfiguration wird beigelegt.  
Release Notes dokumentieren Änderungen kompakt.

## Environments
Entwicklung läuft lokal.  
Preview wird über Preview-Tags ausgelöst.  
Produktion wird über Stable-Tags ausgeliefert.  
