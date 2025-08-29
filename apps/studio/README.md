This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Dependencies Overview

Dieses Projekt nutzt **Next.js 14** (App Router) mit modernen Libraries für **sauberen Code, gutes DX und einfache
Erweiterbarkeit**.

Der Fokus liegt auf einem **schlanken Setup**: nur, was wirklich gebraucht wird.

---

## Core

- **next**

  React Fullstack Framework (App Router, Server Components, Routing, API Routes).

- **react / react-dom**

  UI-Basisbibliothek.

- **typescript**

  Statische Typisierung für Sicherheit und bessere Entwicklererfahrung.

---

## Styling & Utilities

- **tailwindcss**

  Utility-first CSS Framework.

- **class-variance-authority**

  Variablenbasierte, flexible Komponenten.

- **tailwind-merge**

  Automatisches Auflösen von Tailwind-Klassenkonflikten.

- **lucide-react**

  Moderne React-Icons.

---

## Forms & Validation

- **react-hook-form**

  Performanter Form-Handler mit minimalem Boilerplate.

- **zod**

  Schema-basierte Validierung (auch serverseitig wiederverwendbar).

- **@hookform/resolvers**

  Verknüpfung von `react-hook-form` und `zod`.

---

## Data & State

- **@tanstack/react-query**

  Server-State-Management (Fetching, Cache, Sync).

- **@tanstack/react-query-devtools**

  Debugging-Tools für Queries & Cache.

---

## Auth

- **next-auth@beta**

  Authentifizierung & Session-Handling mit App Router Support.

---

## Dev & Tooling

- **eslint / prettier**

  Linting & Code-Formatierung.

- **typescript-eslint**

  Linting mit Typing-Checks.

- **pnpm**

  Schneller, platzsparender Package-Manager.
