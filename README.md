# ZTech Group

Marketing website for **ZTech Group** — a technology studio building websites, Telegram bots, CRM systems, business platforms and custom software.

Frontend-only. No backend, database or auth. Contact flows work entirely through Telegram deep links (`https://t.me/<username>?text=...`).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, hero parallax, mobile menu)
- lucide-react (icons)

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

```
src/
  app/            # routes, metadata, SEO (robots, sitemap, OG/icon images)
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, Services, Projects, Process, Contact, ...
    ui/           # Button, Reveal, SectionHeading, MiniPreview
  lib/            # constants.ts (content), telegram.ts (deep-link helpers)
```

## Editing content

Nearly all copy, services, projects, process steps and Telegram handles live in `src/lib/constants.ts`.

## Deploy

Push to a Git provider and import into [Vercel](https://vercel.com/new) — no environment variables are required. Update `SITE.url` in `src/lib/constants.ts` to your production domain once assigned (used for SEO metadata, sitemap and OG images).
