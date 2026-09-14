# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

This repo is currently just the raw `create-next-app` scaffold (Next.js 16.3.5, React 19.2.8, Tailwind v4, TypeScript, App Router) — `app/` only has the default `layout.tsx`/`page.tsx`/`globals.css`. No database, auth, or business logic exists yet.

**Read [PLANNING.md](PLANNING.md) before implementing any feature.** It's the actual spec for this project: the concept (a multi-vendor ticket-drop platform built specifically to exercise high-concurrency/race-condition problems), the full ERD (User/Drop/Ticket/Order/QueueEntry), the chosen tech stack with reasoning for each choice (Postgres over MySQL for exclusion constraints, Prisma, Upstash Redis, BullMQ, Better Auth, Stripe deferred, etc.), explicitly rejected alternatives and why, AWS EC2 free-tier safety notes, and the numbered build order. Don't re-derive or second-guess those decisions from scratch — they were already deliberated; if something in the code contradicts PLANNING.md, flag the mismatch rather than silently picking one.

The build order in PLANNING.md is deliberate and staged — notably step 6 (naive buy flow → load-test to *prove* overselling → row locking → idempotency → rate limiting → waiting room → background jobs) is meant to be built incrementally with each layer's failure mode demonstrated before the fix is added, not implemented all at once.

## Commands

- `npm run dev` — start the dev server (Turbopack, per Next.js 16 default)
- `npm run build` — production build
- `npm run start` — run a production build
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

No test runner is configured yet. PLANNING.md specifies Vitest (unit), Playwright (E2E), k6 (load testing), and Testcontainers (integration) for when that stage of the build order is reached.

## Architecture notes

- Path alias `@/*` maps to the repo root (`tsconfig.json`), not `src/` — there is no `src/` directory.
- Styling is Tailwind v4 via `@tailwindcss/postcss` (CSS-based config, not a `tailwind.config.js`).
- Per AGENTS.md: this Next.js version has breaking changes versus training data — check `node_modules/next/dist/docs/` for the relevant guide before writing App Router code (Server/Client Components, Server Actions, routing conventions may differ from what's expected).
