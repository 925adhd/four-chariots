# FOUR CHARIOTS

Next.js 15 e-commerce brand site currently running in **waitlist mode** (no live
checkout). Deploys to **Vercel**.

## Project layout

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 → root shell (html/body, NotifyProvider, SkipLink)
│   │   ├── globals.css                → shared primitives (btn, topbar, nav, footer, fade-up, fcNotify)
│   │   ├── (site)/                    → marketing route group (TopBar + wrap + Footer + JSON-LD)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               → homepage (/)
│   │   │   ├── HomepageDropGallery.tsx
│   │   │   ├── shop/
│   │   │   │   ├── page.tsx           → /shop (product grid)
│   │   │   │   ├── _components/ProductViewer.tsx  → shared client viewer for core tees
│   │   │   │   ├── _components/productStyles.ts
│   │   │   │   ├── chosen/page.tsx    → /shop/chosen
│   │   │   │   ├── forgiven/page.tsx  → /shop/forgiven
│   │   │   │   ├── grateful/page.tsx  → /shop/grateful
│   │   │   │   ├── unashamed/page.tsx → /shop/unashamed
│   │   │   │   ├── mug/page.tsx + MugPdp.tsx
│   │   │   │   └── sticker/page.tsx + StickerPdp.tsx
│   │   │   ├── drop/page.tsx + DropShowcase.tsx + CraftScroll.tsx   → /drop
│   │   │   ├── membership/page.tsx    → /membership
│   │   │   ├── about/page.tsx + NewsletterForm.tsx  → /about
│   │   │   └── support/page.tsx       → /support
│   │   └── (legal)/                   → thin layout, noindex
│   │       ├── layout.tsx
│   │       ├── privacy/page.tsx       → /privacy
│   │       └── terms/page.tsx         → /terms
│   ├── components/
│   │   ├── TopBar.tsx                 → site nav + hamburger
│   │   ├── Footer.tsx
│   │   ├── SkipLink.tsx
│   │   ├── NotifyModal.tsx            → context provider + modal (Web3Forms + Supabase)
│   │   ├── NotifyButton.tsx           → wrapper button that opens the modal
│   │   └── HomeAnimator.tsx           → client-side entrance animations for homepage
│   └── lib/supabase/
│       ├── client.ts                  → browser client (anon)
│       ├── server.ts                  → RSC/route handler client (cookies)
│       └── admin.ts                   → service-role client (webhooks, admin)
├── public/
│   ├── images/                        → all WebP imagery (logo.png for favicon)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── CNAME
├── supabase/
│   ├── STATE.md                       → GITIGNORED — local audit reference
│   ├── migrations/                    → SQL migrations for the live DB
│   └── functions/                     → Deno Edge Functions (Printify + Stripe, not yet used from client)
├── scripts/                           → one-off Node scripts for image compression, etc.
├── next.config.ts                     → includes .html → clean-URL redirects
├── tailwind.config.ts                 → brand color tokens (most styling lives in globals.css + page <style> blocks)
├── vercel.json
└── .env.example
```

## Stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Hosting**: Vercel. CNAME in `public/` preserved from the old GH Pages setup.
- **Styling**: Plain CSS in [src/app/globals.css](src/app/globals.css) for shared primitives; per-page `<style>{...}</style>` blocks for page-specific CSS (hoisted to `<head>` by React 19). Tailwind is installed for the color tokens but barely used — by design.
- **Backend**: Supabase (database + Edge Functions). Stripe + Printify integrations scaffolded in Edge Functions but not yet used from the client.
- **Waitlist**: [src/components/NotifyModal.tsx](src/components/NotifyModal.tsx) submits to Web3Forms (email notification) + Supabase `public.waitlist` table. Protected by honeypot + Web3Forms domain allowlist + RLS INSERT-only policy on the waitlist table.
- **Imagery**: all product/content images are WebP. `public/images/logo.png` is the only PNG (favicon + apple-touch-icon + schema.org logo).

## When to flip to live e-commerce

Not now. The waitlist captures demand while Stripe + Printify integration solidifies. When it's time to launch:
- Wire `/api/checkout/route.ts` to Stripe Checkout
- Wire `/api/webhooks/stripe/route.ts` to create orders
- Add `/cart`, `/account`, `/admin` routes (a new `(account)` route group)
- Replace `<NotifyButton>` CTAs with add-to-cart handlers

Supabase Edge Functions are already scaffolded, so the flip is mostly UI + wiring.

## Working conventions

- **One H1 per page.** Keep titles under 60 chars, meta descriptions 120–160. Set page-level title via `export const metadata: Metadata` in each `page.tsx`; the root layout's title template `%s | FOUR CHARIOTS` applies automatically.
- **All non-icon images are WebP.** If you add a new image, run `node scripts/compress-oversized.js` or keep it under 200KB / hero LCP under 100KB.
- **Above-fold images**: no `loading="lazy"`, add `fetchPriority="high"` on the LCP image.
- **Below-fold images**: `loading="lazy"`.
- **Legal pages** (`privacy`, `terms`) live under `(legal)/` and have their own thin layout. They are `noindex, nofollow` and excluded from `sitemap.xml`.
- **Footer links**: Contact (mailto), Privacy, Terms. No Instagram — we don't have one.
- **Sitemap** ([public/sitemap.xml](public/sitemap.xml)) must be updated when a new indexable page is added, including `<lastmod>` date.
- **Skip-to-content** and `<main id="main-content">` are already wired in the two layouts. Don't re-add per page.
- **NotifyButton vs useNotify**: use `<NotifyButton productId=".." productName=".." variant="..">TEXT</NotifyButton>` for static CTAs. For dynamic CTAs (variant depends on selected color/size), use the `useNotify()` hook inside a client component.

## Supabase

Do **not** commit secret values. `supabase/STATE.md` is gitignored on purpose.

- Supabase URL + anon key live in `.env.local` (gitignored). [.env.example](.env.example) documents them. The anon key is public by design; security comes from RLS policies on `public.waitlist` (INSERT-only for anon).
- Migrations live in `supabase/migrations/` and are applied to the live DB via the Supabase SQL Editor (no CLI set up yet).
- Edge Functions use `Deno.env.get(...)` — never hardcode Printify/Stripe keys.
- TypeScript excludes `supabase/functions/` (Deno runtime, different imports).

## Env vars

See [.env.example](.env.example) for the full list. Minimum required for the waitlist to work:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_WEB3FORMS_KEY`

## Common tasks

| Task                                  | Command / Location                                       |
| ------------------------------------- | -------------------------------------------------------- |
| Run dev server                        | `npm run dev`                                            |
| Production build                      | `npm run build`                                          |
| Compress a new image                  | `node scripts/compress-oversized.js` (edit TARGETS list) |
| Add a new indexable page              | Create `src/app/(site)/<name>/page.tsx`, add to `public/sitemap.xml` with lastmod |
| Add a new Supabase table              | Create migration in `supabase/migrations/`, apply via SQL Editor, update `supabase/STATE.md` |

## Deployment

Pushing to `origin/main` triggers Vercel to redeploy. Env vars are configured in the Vercel dashboard (not committed). `.html` → clean URLs are redirected permanently in [next.config.ts](next.config.ts) so old inbound links still resolve.
