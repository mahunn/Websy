# Websy

Multi-page marketing website for **Websy** — a structured digital studio focused on conversion-focused website development.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — overview with previews linking to deeper pages |
| `/services` | Full service details with deliverables |
| `/work` | Portfolio grid |
| `/work/[slug]` | Individual case studies |
| `/process` | Delivery process |
| `/about` | Studio story & founder |
| `/team` | Team members |
| `/contact` | Contact options + FAQ |
| `/privacy` | Privacy policy (stub) |
| `/terms` | Terms of service (stub) |

## Stack

- Next.js 15 (App Router)
- React 19 · TypeScript · Tailwind CSS 3

## Development

```bash
npm install
npm run dev
```

## Content

Edit all copy, contact, team, services, portfolio, and FAQ in `src/lib/site-config.ts`.

## Deploy

Deploy to Vercel — no environment variables required.
