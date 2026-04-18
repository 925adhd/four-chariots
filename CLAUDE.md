# FOUR CHARIOTS

Static HTML e-commerce brand site currently running in **waitlist mode** (no live
checkout). Deployed to GitHub Pages at [4chariots.com](https://4chariots.com).

## Project layout

```
/                     → static HTML pages served by GitHub Pages
├── index.html        → homepage
├── shop.html         → product grid (links to individual product pages)
├── drop.html         → current "The Drop" (limited release)
├── membership.html   → 12-drop reserved circle
├── about.html
├── support.html      → FAQs + contact
├── chosen.html
├── forgiven.html
├── grateful.html     → core collection product pages
├── unashamed.html
├── mug.html
├── sticker.html
├── cart.html         → noindex (disabled while in waitlist mode)
├── product.html      → noindex (unused template, gitignored)
├── privacy.html      → noindex legal page
├── terms.html        → noindex legal page
├── notify.js         → waitlist modal (Web3Forms + Supabase)
├── sitemap.xml
├── robots.txt
├── images/           → all site imagery (WebP, except logo.png for favicon)
├── scripts/          → one-off Node scripts used during refactors
└── supabase/
    ├── STATE.md      → GITIGNORED — local audit reference for live Supabase
    ├── migrations/   → SQL migrations for the live DB
    └── functions/    → Edge Functions source (Printify + Stripe integration)
```

## Stack

- **Hosting**: GitHub Pages (static). No build step for HTML.
- **Backend**: Supabase (database + Edge Functions). Stripe + Printify integrations wired up in Edge Functions but not yet used from the client.
- **Waitlist**: [notify.js](notify.js) submits to Web3Forms (email notification) + Supabase `public.waitlist` table (database record). Protected by a honeypot field + Web3Forms domain allowlist + RLS INSERT-only policy on the waitlist table.
- **Imagery**: all product/content images are WebP. `images/logo.png` is the only PNG (needed for favicon + apple-touch-icon + schema.org logo).
- **No framework**: plain HTML + `<style>` inline per page. Intentional — keeps GitHub Pages deploys trivial.

## When to rebuild to Next.js

Not now. The site is on a waitlist and the full e-commerce flow (Supabase Auth, cart, Stripe Checkout, admin dashboard) is not needed until the store actually launches. The Supabase Edge Functions are already scaffolded, so when it's time, the Next.js port will mostly be a UI migration.

## Working conventions

- **One H1 per page.** Keep titles under 60 chars, meta descriptions 120-160.
- **All non-icon images are WebP.** If you add a new image, run it through `scripts/compress-oversized.js` or keep it under 200KB / hero LCP under 100KB.
- **Above-fold images**: no `loading="lazy"`, add `fetchpriority="high"` on the LCP image.
- **Below-fold images**: `loading="lazy"`.
- **Every page** has `<main id="main-content">` wrapping content, a skip-to-content link, `<html lang="en">`, unique canonical, OG tags, and Twitter card.
- **Legal + utility pages** (`cart.html`, `product.html`, `privacy.html`, `terms.html`) are `noindex, nofollow` and excluded from `sitemap.xml`.
- **Footer links**: Contact (mailto), Privacy, Terms. No Instagram — we don't have one.
- **Hamburger** has `aria-expanded` and it toggles on open/close (handled in each page's inline script).
- **Sitemap** must be updated when a new indexable page is added, including `<lastmod>` date.

## Supabase

Do **not** commit secret values. The live-state doc at `supabase/STATE.md` is gitignored on purpose.

- Supabase project ref and anon key are embedded in [notify.js](notify.js) — this is intentional. The anon key is public by design; security comes from RLS policies on `public.waitlist` (INSERT-only for anon).
- Migrations live in `supabase/migrations/` and are applied to the live DB by pasting into the Supabase SQL Editor (no CLI set up yet).
- Edge Functions use `Deno.env.get(...)` to read secrets — never hardcode Printify/Stripe keys in any file.

## Common tasks

| Task                                  | Command / Location                                       |
| ------------------------------------- | -------------------------------------------------------- |
| Compress a new image                  | `node scripts/compress-oversized.js` (edit TARGETS list) |
| Batch update HTML (footer, nav, etc.) | Write a throwaway script in `scripts/`                   |
| Add a new indexable page              | Create `<name>.html`, add to `sitemap.xml` with lastmod  |
| Add a new Supabase table              | Create migration in `supabase/migrations/`, update `supabase/STATE.md`, apply via SQL Editor |

## Deployment

Pushing to `origin/main` triggers GitHub Pages to redeploy within ~30-60 seconds. No other deployment pipeline. CNAME file at root points the domain at the Pages host.
