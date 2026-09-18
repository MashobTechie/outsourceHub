# outsource.hub

Landing page for a freelance & outsourcing agency placing vetted African
professionals with companies in the US and Europe.

Marketing page only — no marketplace, dashboards, auth or payments.

## Stack

| | |
|---|---|
| Framework | Next.js 16.3.5, App Router, Turbopack |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 — no config file, tokens live in `@theme` |
| Fonts | Fraunces (display) + Inter (body), self-hosted via `next/font` |
| Dependencies | react, react-dom, next. That's it — no icon, motion or UI library |

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

## Before you launch — the placeholders

Nothing on this page invents a statistic, testimonial or client. Every value
that is not yet confirmed is marked `PLACEHOLDER` in `src/data/site.ts`, so:

```bash
grep -rn PLACEHOLDER src/
```

prints exactly what is still outstanding. **The token count is the
remaining-work count** — as each real value arrives, replace the `PLACEHOLDER`
comment with a descriptive one.

| Value | What to do |
|---|---|
| `site.whatsappNumber` | Real business number, **digits only**, including country code. This is what `wa.me` expects |
| `site.whatsappDisplay` | The same number, formatted for humans |
| `site.email` | The inbox briefs should land in |
| `site.location` | Where the team is based — shown in the footer |
| `site.socials` | Full profile URLs. Leave as `null` to hide — a link to `"#"` is a dead link |
| `clientLogos` | Drop SVGs in `public/logos/`, add `{ name, src }` entries |
| `claims.*` | See below |

### The `claims` object

Marketing numbers — time-to-shortlist, overlap hours, replacement window,
acceptance rate — are **all `null` by default**, and each component falls back
to qualitative copy when they are. Put a real, defensible number in and the
stronger sentence turns on automatically:

```ts
shortlistDays: null  →  "Shortlists in days, not months."
shortlistDays: 10    →  "Shortlists in 10 business days."
```

Do not fill these in with aspirations. The whole point is that every number on
the page is one you can defend in a sales call.

## Design system

Tokens are in `src/app/globals.css` under `@theme`. Terracotta on bone, warm
neutral ink.

Every text colour is contrast-checked against the bone canvas — `--color-muted-2`
(#6e665c, 5.3:1) is the **floor**. Do not introduce anything lighter for text;
that is exactly where the sister project shipped a sub-AA bug.

Two layout utilities carry the whole page:

- `.section` — vertical rhythm, one source of truth (5.5rem → 7.5rem → 9rem)
- `.shell` — max width and page gutter

## Motion

No motion library. Three pieces:

1. `.reveal` in `globals.css` — the hidden/shown states
2. `src/hooks/useReveal.ts` — **one IntersectionObserver per section**, not per
   element. Reveals are one-shot and unobserve after firing
3. `revealDelay(ms)` in `primitives.tsx` — sets a `--reveal-delay` CSS var for
   stagger, so no bespoke class is needed per item

`prefers-reduced-motion: reduce` is handled globally at the bottom of
`globals.css`: reveals are forced visible and all animation is collapsed.

## The contact form

There is no backend. `RoleForm.tsx` composes the fields into a plain-text
WhatsApp message and opens `wa.me` in a new tab — a submission always has
somewhere to go. Optional fields drop out of the message rather than sending
empty lines.

If a real inbox is wanted later, the change is a route handler at
`src/app/api/brief/route.ts` and swapping the `window.open` for a `fetch`.

## Known gaps

- **No compliance / IP / payments section.** Deliberately cut from v1, but it is
  the question that kills deals at contract stage. Section order in
  `src/app/page.tsx` is flat, so dropping one in is a two-line change.
- **No FAQ.** Same reasoning — the objection-handling surface is not there yet.
- **No OG image.** `openGraph` metadata is set but has no image; add one at
  `src/app/opengraph-image.tsx` before any real link sharing.
