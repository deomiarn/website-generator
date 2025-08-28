[//]: # (03 – Requirements)

[//]: # (Zweck: Definiert, was das System können muss – fachlich und qualitativ.)

[//]: # (Inhalt: Funktionale Anforderungen, nicht-funktionale Anforderungen, Akzeptanzkriterien.)

[//]: # (Done: Jedes Requirement ist testbar oder durch ein Akzeptanzkriterium messbar.)

## Funktionale Anforderungen

R1: Eine Sitemap mit KI generieren lassen nach Benutzereingabe (Um was für eine Website handelt es sich?).

R2: Eine Sitemap einlesen und in Seitenstruktur (Wireframe) umwandeln.

R3: Vordefinierte Sections in Wireframe automatisch mappen (z. B. Hero, Features, Pricing, FAQ, Testimonials, Team, CTA,
Contact, Stats, Steps, Gallery, Footer).

R4: Globale Design-Tokens anwenden (Farben, Schriftarten, Radius).

R5: SEO-Metadaten (Title, Description, OG) pro Seite generieren.

R6: Mit KI für Sections / Pages Textvorschläge nach gewählten Keywords generieren.

R7: Ein Next.js-Projekt mit Tailwind, shadcn und Routing erzeugen.

R8: `sitemap.xml` und `robots.txt` automatisch generieren.

R9: Export des Projekts als ZIP mit Vercel-Konfiguration.

R10: KI-Assist in jedem Schritt (Sitemap, Wireframe, Text), für effiziente und benutzerspezifische Lösungen, die auf die
Promps und Keywords passen.

R11: Deploytes System mit Authentifizierung, damit nur ich den Generator nutzen kann.

R12: Vorhandene Datenbank, um Nutzer und Projekte zu speichern.

R13: Vorhandene UI, um Sections auszuwählen, Design-Tokens anzupassen und Keywords einzugeben.

R14: Responsives Design für mobile, tablet und desktop.

R15: Ein hochgeladenes Bild wird automatisch in mehreren Auflösungen und Formaten optimiert und im Export korrekt
eingebunden (SEO-freundlich, `next/image` oder `<picture>`).

## Nicht-funktionale Anforderungen

N1: Sauberer Code mit ESLint & Prettier.

N2: TypeScript strict mode aktiv.

N3: Generationszeit ≤ 30 Sekunden pro Task.

N4: Developer Experience: ≤ 5 Befehle bis zur lauffähigen Demo.

N5: Tests vorhanden (Unit + Integration).

N6: Lauffähige Datenbank

N7: Für MVP kann nur eine Person (deomiarn) auf das Programm zugreifen.

## Akzeptanzkriterien

### Funktionale Anforderungen

**R1 – KI generiert Sitemap nach Benutzereingabe**  
Given ein Prompt mit Website-Typ und Kerninhalten.  
When ich „Sitemap generieren“ ausführe.  
Then entsteht eine YAML/JSON-Sitemap mit mindestens Startseite, einer Content-Seite und einer Kontaktseite, die
editierbar ist.

**R2 – Sitemap einlesen → Seitenstruktur (Wireframe) mit Sections**  
Given eine gültige `sitemap.yml` oder `sitemap.json`.  
When ich den Import starte.
Then werden pro Eintrag die vordefinierten Section-Components für Seiten und ihre Reihenfolge erzeugt und als Wireframe
darstellbar.

**R3 – Sections manuell anpassen**  
Given eine importierte Seitenstruktur mit Sections.  
When ich „CRUD Sections“ ausführe.  
Then werden passende Section-Components empfohlen mit der man die aktuelle Section ersetzen, hinzufügen oder löschen
kann.

**R4 – Globale Design-Tokens anwenden**  
Given eine Token-Konfiguration mit Farben, Schriftarten, Radius.  
When ich Tokens speichere.
Then aktualisieren sich alle Wireframe-Sections konsistent entsprechend der Tokens.

**R5 – SEO-Metadaten generieren**  
Given eine Seite mit Titel und Inhalt.
When ich SEO generieren ausführe.  
Then werden Title, Meta Description und OG-Tags erzeugt und in der Seitendatei abgelegt.

**R6 – KI-Textvorschläge nach Keywords**  
Given definierte Keywords pro Seite oder Section.  
When ich „Textvorschlag generieren“ ausführe.  
Then erhalte ich pro Section einen kurzen, thematisch passenden Text, der editierbar gespeichert wird.

**R7 – Next.js + Tailwind + shadcn + Routing erzeugen**  
Given ein Projektzielverzeichnis.  
When ich „Projekt exportieren“ ausführe.  
Then entsteht ein lauffähiges Next.js 14 Projekt mit Tailwind und shadcn/ui, inkl. Dateirouting entsprechend der
Sitemap.

**R8 – `sitemap.xml` & `robots.txt` generieren**  
Given eine vollständige Seitenstruktur mit Slugs.  
When ich den Export ausführe.  
Then werden `sitemap.xml` und `robots.txt` im `public/` des Next.js-Projekts erzeugt.

**R9 – ZIP-Export + Vercel-Konfiguration**  
Given ein erzeugtes Next.js-Projekt.  
When ich „Export als ZIP“ wähle.  
Then erhalte ich eine ZIP-Datei inkl. `vercel.json` oder erforderlicher Vercel-Einstellungen.

**R10 – KI-Assist in jedem Schritt**  
Given ein aktueller Arbeitsschritt (Sitemap, Wireframe, Text).  
When ich den KI-Assist öffne.  
Then werden kontextbezogene Vorschläge angezeigt, die ich übernehmen oder ablehnen kann und die Historie speichert die
Entscheidung.

**R11 – Authentifizierung für den Generator**  
Given das System ist deployed.  
When ich die App ohne Login öffne.  
Then werde ich auf die Login-Seite weitergeleitet und nur registrierte Nutzer können den Generator nutzen.

**R12 – Datenbank für Nutzer & Projekte**  
Given ich bin eingeloggt.  
When ich ein neues Projekt anlege oder ändere.  
Then werden die Daten persistent in der Datenbank gespeichert und bei erneutem Login korrekt geladen.

**R13 – UI für Section-Auswahl, Tokens, Keywords**  
Given ich bin im Projekt-Editor.  
When ich Sections auswähle, Tokens ändere oder Keywords eingebe.  
Then sehe ich sofort eine Vorschau und kann die Änderungen speichern oder rückgängig machen.

**R14 – Responsives Design**  
Given eine generierte Seite.  
When ich die Vorschau auf Mobile, Tablet und Desktop einstelle.  
Then ist das Layout ohne Overflows oder unlesbare Inhalte korrekt und Bedienelemente sind nutzbar.

### Nicht-funktionale Anforderungen

**N1 – Sauberer Code (ESLint & Prettier)**  
Given ein Pull Request.  
When die CI läuft.  
Then schlägt die Pipeline bei Linting- oder Formatfehlern fehl und PRs ohne Fix können nicht gemerged werden.

**N2 – TypeScript strict**  
Given ein Pull Request.  
When der Build/Type-Check ausgeführt wird.  
Then schlägt die CI fehl, wenn `tsc --noEmit --strict` Typfehler meldet.

**N3 – Generationszeit ≤ 30 s pro Task**  
Given eine Standard-Sitemap mit bis zu 10 Seiten und 12 Sections.  
When ich „Generieren“ oder „Exportieren“ starte.  
Then ist der jeweilige Schritt auf einer Referenzmaschine in ≤ 30 Sekunden abgeschlossen und wird in Logs gemessen.

**N4 – DX: ≤ 5 Befehle bis Demo**  
Given ein frisches Checkout.  
When ich der README folge.  
Then kann ich mit höchstens fünf Befehlen das Beispielprojekt generieren und lokal starten.

**N5 – Tests vorhanden (Unit + Integration)**  
Given die CI.  
When ein PR erstellt wird.  
Then laufen Unit- und Integrations-Tests automatisch und die Pipeline schlägt bei Fehlschlägen fehl.

**N6 – Lauffähige Datenbank**  
Given eine konfigurierte DB-Verbindung.  
When die App startet.  
Then wird die Verbindung erfolgreich aufgebaut und Schema-Migrationen laufen automatisiert.

**N7 – Zugriff nur für eine Person (MVP)**  
Given die Authentifizierung ist aktiv.  
When ein nicht autorisierter Nutzer versucht, sich zu registrieren oder einzuloggen.  
Then wird der Zugriff verweigert und nur der definierte Account `deomiarn` kann sich anmelden.
