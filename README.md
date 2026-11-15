# Venture Learning Collective (VLC)

Marketing and application site for the **Venture Learning Collective**, an entrepreneurship and funding-readiness initiative I co-founded with Oyeta Kokoroko. VLC ran a cohort-based program that helped early-stage founders turn an idea into a structured, fundable venture.

The flagship program was the **Youth Funding Readiness Lab**, a 3-week cohort delivered in partnership with [GRANTED](https://granted.tech), pairing a strategy session each week with a hands-on lab. The program was supported by a C$2,800 micro-grant from Weston Frontlines, and culminated in a project showcase with prizes for participants.

This repo is the public-facing site: the program description, the ecosystem it sits in, the team behind it, and the application form.

## What I built

- The full landing page (hero, problem/solution framing, program breakdown, ecosystem, team, and application sections) in `src/components/vlc/`.
- The application flow: a form that posts directly to Formspree, with a matching `ApplicationSubmission` data shape defined in `base44/entities/`.
- Auth and routing scaffolding (`src/lib/AuthContext.jsx`, `src/App.jsx`) wired to the Base44 platform the app is built on.
- A configured AI assistant (`base44/agents/vlc_assistant.jsonc`) that answers questions about the program, team, and how to apply. It's currently disabled in the UI (`VLCChat.jsx` is a no-op) — the configuration is still in the repo for reference.

## Tech stack

- **React 18 + Vite 6** — build tooling and dev server
- **[Base44](https://base44.com)** — low-code app platform handling auth, hosting, and the client SDK (`@base44/sdk`)
- **Tailwind CSS + Radix UI primitives** (shadcn-style components in `src/components/ui/`)
- **Framer Motion** — scroll-triggered reveal animations
- **React Router**, **TanStack Query**, **React Hook Form + Zod** — routing, data fetching, and form scaffolding from the Base44 template
- **Formspree** — handles the live application form submissions

Some dependencies in `package.json` (e.g. Stripe, charting libraries) come from the base Base44 template and aren't used by this site.

## Project structure

```text
src/
├── App.jsx                     # Routing + auth gate
├── pages/LandingPage.jsx        # Assembles all page sections
├── components/vlc/              # VLC-specific sections (Hero, Problem, Solution, Program, Ecosystem, Team, Apply, Nav, Footer, Chat)
├── components/ui/               # Shared UI primitives (shadcn/Radix-based)
├── lib/                          # Auth context, app params, query client
└── api/base44Client.js          # Base44 SDK client

base44/
├── agents/vlc_assistant.jsonc   # AI assistant configuration (not currently wired into the UI)
└── entities/ApplicationSubmission.jsonc  # Schema for application form data
```

## Run locally

```bash
npm install
npm run dev
```

This is a Base44 app, so it expects Base44 app credentials as environment variables (`.env.local`, not committed):

```text
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=your_backend_url
```

Other scripts: `npm run build` (production build), `npm run lint`, `npm run typecheck`, `npm run preview`.

## Status

Completed. The program ran one cohort and the initiative has since wrapped up; this repo reflects the site as it was during that program.
