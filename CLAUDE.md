# RSC Limousine — Public Marketing & Booking Site

## What this is
Public marketing/booking website for RSC Limousine (Royal Stallion Chauffeurs), a Singapore chauffeur/limo business. Fleet showcase, cinematic hero demo, driver privacy policy, WhatsApp/contact-form booking. Sibling apps in this brand: `rsc-admin` (internal ops), `rsc-b2b` (corporate booking portal), `rsc-driverapp` (driver mobile app).

**Important — this app is purely static/marketing, unlike its siblings**: it does NOT talk to the shared Supabase project. Content is Sanity CMS-driven, contact/booking submissions go through Formspree. Don't go looking for a Supabase client here — there isn't one.

A legacy WordPress site still lives at `rsclimo.com.sg` — per the RSC handoff doc, **do not touch it**. Leftover PHP scripts and a `custom.css` at repo root are remnants of that old site, not part of this Next.js app.

## Stack
- Next.js 16.2.0, React 19.2.4, TypeScript 5.7.3
- Tailwind CSS v4 (CSS-first config in `app/globals.css`)
- Sanity CMS (`next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision`) — Studio mounted at `app/studio`
- Formspree for contact/booking form submissions (`NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`)
- Framer Motion, GSAP, Lenis (smooth scroll), Embla Carousel
- react-hook-form + zod for forms
- Full Radix UI primitive set + shadcn-style components, `next-themes`, `sonner`, `cmdk`, `vaul`
- Server-side video processing: `@ffmpeg-installer/ffmpeg`, `fluent-ffmpeg` (dev only)

## Design system — locked, Theme 2 "Dark Prestige" is live
Full theme reference lives in `RSC Color Theme.txt` at this project's root (3 themes were explored; Theme 2 is what's actually wired into `app/globals.css` — don't pull colors from Theme 1 or 3).
```
--background: #0A0A0A     Black
--primary:    #1A1A1A     Dark
--accent:     #D4A843     Gold
--foreground: #F5F5F0     Ivory
--muted-foreground: #888880
--border: rgba(212, 168, 67, 0.15)
```
Fonts: `--font-sans: 'Inter'`, `--font-serif: 'Playfair Display'` (headings), `--font-mono: 'Geist Mono'`. Tailwind v4 `@theme inline`, radius base `0.5rem`.

## Routes
`app/page.tsx` (home) · `cinematic-demo` (own layout + `cinematic-hero.tsx`) · `fleet/[slug]` (dynamic) · `privacy-driver` · `studio/[[...tool]]` (Sanity Studio) · `terms`

## Components
`components/`: `about-section.tsx`, `cinematic-hero-section.tsx`, `contact-section.tsx`, `fleet-section.tsx`, `footer.tsx`, `header.tsx`, `hero-section.tsx`, `services-section.tsx`, `testimonials-section.tsx`, `whatsapp-button.tsx`, plus `ui/` (Radix/shadcn wrappers)
`lib/`: `i18n.tsx`, `site-settings-data.ts`, `utils.ts`, `vehicle-images.ts`, `vehicles-data.ts`

## Dev server
`npm run dev` — port **3000**. (The `rsc-admin` entry in this project's `.claude/launch.json` points to a stale path — if you need to run rsc-admin/rsc-b2b alongside this app, they're at `Projects\rsc\rsc-admin` (port 3010) and `Projects\rsc\rsc-b2b` (port 3011) per the RSC handoff doc, not the path currently in launch.json.)

## Engagement rules (shared across all RSC apps)
- Terse responses. One-line updates for simple tasks; multi-line only for plans or errors.
- No trailing summaries unless the task is large (>3 files changed).
- No unrequested features, refactors, or "while I'm here" cleanup.
- Don't write code comments that explain *what* the code does — names do that. Comments are for non-obvious *why*.

## Branching is mandatory
- Never commit directly to the default branch.
- Always branch: `feat/<slug>`, `fix/<slug>`, or `chore/<slug>`.
- Push branch and provide PR URL. Do not merge unless the user explicitly says to.

## Pre-existing code policy
- Read the relevant file before editing it.
- Prefer editing existing files over creating new ones.
- Reuse existing components/utilities — don't duplicate logic.
- Before adding a dependency, check if something already in `package.json` covers the need.

## Hard rules
- Never `--no-verify` past a failing pre-commit hook. Fix the hook failure.
- Never `git push --force` to the default branch.
- Never delete a file the user hasn't seen the diff for — show diff first.
- Never commit secrets (`.env`, API keys, Formspree/Sanity tokens).
- Do not modify or reference the legacy WordPress site at `rsclimo.com.sg`.

## Phase gate workflow
Before starting any task that touches >1 file or adds a new feature:
1. Read the relevant files first (no blind edits).
2. Plan — state what will change and why; wait for user confirmation if scope is non-trivial.
3. Implement — one logical change at a time.
4. Verify — `npx tsc --noEmit` must pass; for UI changes open in browser.
5. Commit + push — branch only; provide PR URL.
