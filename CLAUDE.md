# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SmileSure Dental Care - a marketing/booking website for a dental clinic in Noida, India. Deployed on Vercel at smilesure.in.

## Commands

```bash
npm run dev          # Start dev server (Next.js + Turbopack)
npm run build        # Production build (uses Turbopack)
npm run lint         # ESLint (flat config, core-web-vitals + typescript)
npm run start        # Serve production build locally
```

No test framework is configured.

## Architecture

- **Next.js 16** with App Router, React 19, TypeScript
- **Tailwind CSS v4** (PostCSS plugin, configured in `globals.css` via `@theme inline` - no `tailwind.config`)
- **Framer Motion** for scroll-triggered animations (shared variants in `src/constants/animations.ts`)
- **Resend** for transactional email (contact form submissions)
- **Vercel** deployment with custom security headers in `next.config.ts`

### Path Alias

`@/*` maps to the project root (e.g., `@/src/components/navbar`, `@/lib/mail`).

### Directory Layout

- `app/` - Next.js App Router pages and API routes
- `src/components/` - React components (all client-side, use framer-motion)
- `src/constants/` - Shared animation variants
- `src/data/` - Static data (testimonials)
- `src/hooks/` - Custom hooks (contact form logic)
- `lib/` - Server utilities (email via Resend)
- `public/` - Static assets (images, video, logos)

### Key Patterns

- Pages export `metadata` objects for SEO (title, description, canonical, OpenGraph)
- Layout includes structured data (JSON-LD) for the dental clinic schema
- Contact form flow: `useContactEmail` hook -> `POST /api/send-email` -> `lib/mail.ts` (Resend)
- The API route has in-memory rate limiting (3 req/min per IP)
- CSS uses `prefers-reduced-motion` to disable animations and hide autoplay video
- Background parallax only on desktop (scroll on mobile to avoid jank)

### Environment Variables

- `RESEND_API_KEY` - Resend API key for sending emails
- `RESEND_FROM_EMAIL` - Sender address (defaults to care@smilesure.in)
- `CONTACT_FORM_RECIPIENT` - Where form submissions go (defaults to care@smilesure.in)

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on push/PR to main: lint, build, and `npm audit`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
