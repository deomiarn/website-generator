[//]: # 'ADR-003 – Persistenz & Auth'
[//]: # 'Zweck: DB-/Auth-Entscheid inkl. Rollen & MVP-Whitelist.'

# ADR-003: Persistenz & Auth

## Kontext

Nutzer, Projekte, Sitemaps, Tokens, Keywords, Exporte. Mehrbenutzerfähig geplant; MVP zunächst nur Whitelist-Account.

## Entscheidung

Prisma ORM; SQLite (dev), Postgres/Neon (prod). Auth.js (Credentials + optional OAuth). RBAC light (Owner/Admin/User). Whitelist (zunächst `deomiarn`).

## Alternativen

Supabase (schnell, stärkerer Lock-in); eigene JWT-Lösung (mehr Security-Aufwand).

## Konsequenzen

- schneller Start, +einfache Migration auf Postgres, +sichtbare Auth/RBAC im Portfolio; −leichte Kopplung an Next.js.
