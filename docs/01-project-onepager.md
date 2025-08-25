[//]: # (01 – Project One‑Pager)
[//]: # (Zweck: Elevator‑Pitch + Problem/Lösung + Ziele + Erfolgskriterien auf 1 Seite.)
[//]: # (Inhalt: TL;DR, Problem, Lösung &#40;MVP&#41;, 2‑Wochen‑Ziele, messbare Kriterien.)
[//]: # (Done: Aussenstehende verstehen in 2 Min., was & warum; keine technischen Details.)
[//]: # (Fehler: Zu lang, Feature‑Liste ohne Nutzen, keine Metriken.)

# Project One-Pager

## TL;DR
Lean, code-first Website-Generator für KMU (1–10 Seiten).  
Aus einem Prompt wird eine Sitemap generiert, die vom Nutzer angepasst werden kann.  
Diese Sitemap lässt sich in Wireframes umwandeln, die mit unseren Section-Komponenten aufgebaut sind.  
Der Benutzer kann sich so die Website visuell zusammenstellen und vorstellen.  
Anschliessend lassen sich die Sections über den Style Guide, ein zentrales Design-Token-System stylen (Farben, Schriftarten, Radius), anpassen und individualisieren.
Die Wireframes enthalten bereits KI-gestützte Textvorschläge, die manuell angepasst werden können.  
Zur Optimierung wird ein SEO-Check durchgeführt, ergänzt durch Keyword-basierte Textoptimierung pro Seite.  
SEO-Defaults (Title, Description, OG, sitemap/robots) werden automatisch ergänzt.  
Zum Abschluss erfolgt der Export als sauberes Next.js/Tailwind/shadcn-Projekt – Vercel-ready.  
Ziel ist es, dass der Benutzer in wenigen Minuten eine moderne, konkurrenzfähige und SEO-starke Website generieren, anpassen und exportieren kann.  

## Problem
Aktuelle Produkte fokussieren sich mehr auf No-Code Plattformen. 
Oft ist der erzeugte Code schwer wartbar und kaum für Entwickler nutzbar, da er an proprietäre Systeme gebunden ist. 
Code nicht up to date, schlechte Performance und fehlende SEO-Optimierung sind häufige Probleme.
Übergaben an Developer scheitern häufig an Tool-Lock-ins.
SEO und Performance bleiben bei generischen Themes meist auf der Strecke.
Websites brauchen heute mehr denn je eine gute SEO-Basis, um in Suchmaschinen gefunden zu werden.
Entwickler wollen unabhängig von No-Code Plattformen bleiben und sauberen, wartbaren Code erhalten, der in Zukunft einfach erweitert werden kann.

## Lösung (MVP)
Bereitstellung von 50-100 sofort einsetzbaren Section-Components (Hero, Features, Pricing, FAQ, Testimonials, Team, CTA, Contact, Stats, Steps, Gallery, Footer, usw.).  
Globale Design-Tokens für Farben, Schriftarten und Radius sorgen für Konsistenz.
KI gestützte Prozesse in allen Schritten (Sitemap, Wireframes, Style-Guide, Textvorschläge, SEO-Check, Keyword-Optimierung).
Innerhalb von zwei Stunde eine komplette lauffähige, stylische und lauffähige Website generieren, anpassen und exportieren können.
Nicht die komplexesten Websites vom aussehen aber die performantesten Websites die im aktuellen Markt obenauf sind.
Individuelle Anpassungen durch Entwickler sind jederzeit möglich, da sauberer Code exportiert wird.
Export erfolgt als Next.js 14 Projekt mit TailwindCSS und shadcn, optimiert für Deployment auf Vercel.  

## Zielbild (2 Wochen)
In Woche 1 entsteht die Projektplanung und Dokumentation, ergänzt durch Architektur-Übersicht und erste ADRs.  
Das Generator-Skeleton mit Parser- und Token-Interfaces sowie einem CLI-Entrypoint wird aufgesetzt.  

In Woche 2 folgen die Section-Templates, SEO- und Export-Funktionen.  
Abgeschlossen wird die Arbeit mit Unit- und Integrationstests, einem Smoke-Test für das generierte Projekt sowie einer Demo-Deployment auf Vercel.  

## Nutzen / Differenzierung
Erstellung einer vollständigen Website in unter zwei Stunden.
Sauberer, verständlicher Next.js/Tailwind-Code/shadcn ohne Lock-ins.
SEO-Stärke durch automatische Defaults und individuellen Benutzer Keyword-Optimierungen.
Kosteneffizienter als Agenturen oder Freelancer durch automatisierte Prozesse.
Flexibel anpassbar durch Entwickler, da kein proprietärer Code.
Zukunftssicher durch moderne Technologien und Best Practices.
Einfache Bedienung durch visuelle Anpassungen und KI-gestützte Vorschläge.

## Erfolgskriterien
Time-to-Site beträgt maximal zwei Stunden von der Sitemap bis zum Deployment.  
Die Startseite erreicht in Lighthouse bei SEO, Performance und Best Practices jeweils mindestens 90 Punkte.  
Die Generationszeit des Projekts bleibt lokal unter 30 Sekunden.
