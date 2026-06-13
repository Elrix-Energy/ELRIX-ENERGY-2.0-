---
name: ""
overview: ""
todos: []
isProject: false
---

# ELRIX ENERGY V2 EXECUTION PLAN

> Phase-gated roadmap. Each phase requires explicit approval before starting the next.
> Full audit coverage mapped across Phases 1–12.

---

## Progress Tracker

| Phase | Status | Notes |
|-------|--------|-------|
| 1 — Brand & Design System | ✅ Complete | Navy/gold tokens, typography, motion, focus |
| 2 — Architecture & Hygiene | ✅ Complete | siteConfig, strict TS, Resend API, error boundaries |
| 3 — Accessibility | ✅ Complete (selected scope) | Navbar dropdowns, aria-live, heading fixes; FAQ/Reveal skipped |
| 4 — UI Primitives | ✅ Complete | Button, Card, Section, TrustStrip, EmiCalculator, etc. |
| 5 — Layout & Global Chrome | ✅ Complete | Phone in nav, certification badges, rAF scroll, safe-area |
| 6 — Home Page | ✅ Complete | Testimonial marquee, calc lib, section reorder, blog from data |
| 7 — Core Route Pages | ✅ Complete | Financing hidden+redirect, projects noindex, contact calc prefill |
| 8 — City & Service Pages | ⏳ Pending | Awaiting approval |

---

## Phase 1 — Foundation: Brand & Design System

### Goals
- Establish a real brand identity (not monochrome black-on-black)
- Replace ad-hoc spacing/type/shadow values with a single token source
- Fix global keyboard focus and motion token baseline before page rebuilds

### Tasks

**Brand & color**
- Redefine `--primary` (navy/trust) and `--accent` (solar gold or approved accent); ensure `--primary` ≠ `--secondary`
- Add neutral surface tokens (`--color-surface-0/1/2`, ink scale)
- Map existing utilities (`.text-primary`, `.bg-primary`, `.btn-*`) to new tokens
- Remove pure `#000000` as brand primary unless explicitly approved

**Spacing & layout tokens**
- Add 4pt spacing scale (`--space-1` through `--space-24`)
- Replace hardcoded section padding (`5rem`, `2.25rem`, `2.5rem`, `4rem`) with token references in `index.css`
- Standardize `.container` padding against spacing tokens

**Typography tokens**
- Define modular type ramp (`--text-xs` … `--text-6xl`)
- Apply `clamp()` to `h1`/`h2` globally; retire parallel hero/page-header size overrides (defer page-specific cleanup to Phase 6)
- Reduce `next/font` weights to only those in use (audit Outfit 500/800, Inter 500)
- Set `<html lang="en-IN">` in root layout (align with `openGraph.locale`)

**Radius, shadow, z-index**
- Consolidate radii to token set; document forbidden raw `8px` / `16px` / `50px` in components
- Replace bespoke shadows with `--elev-1/2/3`
- Add z-index tokens (`--z-navbar`, `--z-floating`, `--z-sticky`, `--z-modal`)

**Motion tokens**
- Add `--ease-standard`, `--motion-fast/medium/slow`
- Replace `transition: all` in `index.css` and shared `.btn` with explicit properties
- Add global `@media (prefers-reduced-motion: reduce)` baseline for transitions (Reveal handled in Phase 3)

**Focus & buttons**
- Add global `*:focus-visible` ring using accent token
- Audit button variants: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-hero-primary`, `.btn-hero-outline`, `.btn-sm`; remove or implement dead `.btn-large`
- Document button size/variant matrix for Phases 4–6

**CSS hygiene (foundation only)**
- Remove unused `.dark-glass` from `App.css` if still unreferenced
- Note duplicate selector risks (`.blog-card`, `.trust-item`) for Phase 4

### Questions / Clarifications
- Confirm brand colors: navy primary + gold accent, or provide exact hex values?
- Keep **Outfit + Inter**, or switch fonts?
- Is pure black acceptable anywhere (body text only), or ban `#000` sitewide?
- Any existing brand guidelines, logo SVG, or certification artwork to import in Phase 11?

### Recommended Direction
- Primary `#0B1F3A`, accent `#F5B400`, success `#10B981`; body text `#111827`
- Implement tokens in `app/styles/index.css` first; do not refactor pages until Phase 4+

### Wait for Approval
- **Stop here.** Reply **“Approve Phase 1”** (with answers to questions) before Phase 2 is written/executed.

---

## Phase 2 — Architecture & Codebase Hygiene
*(Locked until Phase 1 approved)*

### Goals
- Single source of truth for site constants; strict TypeScript; remove dead code; production error boundaries

### Tasks
- Create `app/lib/siteConfig.ts` (phone, email, social, cities, maps URL, WhatsApp template)
- Create `app/lib/seoConfig.ts` (site name, default OG, metadataBase helpers)
- Delete `app/components/pages/Calculator.tsx`, `BlogPost.tsx`
- Remove unused `pricingData` (Subsidy, Financing), unused `ArrowRight` import (Home)
- Enable `strict` + `noImplicitAny` in `tsconfig.json`; type all event handlers and `useState` generics
- Add `app/error.tsx`, `app/not-found.tsx`
- Add `.env.example`: `NEXT_PUBLIC_GA_ID`, `SITE_URL`, `CONTACT_FORM_SECRET`, `RECAPTCHA_SITE_KEY`
- Decide: rename `components/pages` → `components/views` (optional)

### Questions / Clarifications
- Preferred contact backend: keep FormSubmit, Resend, or other?
- Rename `pages` folder to `views`?

### Wait for Approval
- Proceed only after Phase 1 + Phase 2 approval.

---

## Phase 3 — Accessibility (WCAG 2.2)
*(Locked until Phase 2 approved)*

### Goals
- Fix critical interactive patterns before visual page rebuilds

### Tasks
- Build `FaqAccordion` using `<details>/<summary>` or `<button>` + `aria-controls` + panel `id` (replace Home + CityLanding div pattern)
- Navbar: click-to-open dropdowns, `aria-expanded`, `aria-haspopup`, Escape close; replace Locations `<span>` with `<button type="button">`
- Mobile menu: focus trap, `aria-expanded` on toggle, 44px tap targets on links
- Subsidy eligibility: `aria-pressed` on Yes/No toggles
- Calculator results + contact messages: `role="status"` + `aria-live="polite"`
- `Reveal`: skip animation when `prefers-reduced-motion: reduce`
- Fix heading skips (Contact h2→h4, Financing h2→h4, Services guarantee h3/h4 misuse, About structure)
- `aria-hidden="true"` on decorative Lucide icons
- Trust strip → semantic `<ul>`; footer columns → `<nav aria-label="…">`
- Map section: visually hidden `<h2>`; consistent `rel="noopener noreferrer"` on external links

### Questions / Clarifications
- Prefer native `<details>` or Radix/shadcn Accordion for FAQs?

### Wait for Approval

---

## Phase 4 — Shared UI Primitives & CSS Consolidation
*(Locked until Phase 3 approved)*

### Goals
- Eliminate copy-paste; one implementation per pattern; start removing inline styles

### Tasks
- Primitives: `Button`, `Input`, `Select`, `Textarea`, `Card`, `Badge`, `Eyebrow`, `Section`
- Sections: `TrustStrip`, `PageHeader`, `FinalCta`, `HeroCta`
- Shared `EmiCalculator` (Subsidy + Financing + optional Financing merge in Phase 7)
- Shared `FaqAccordion` wired from Phase 3
- Migrate inline `style={{}}` in highest-count files first: Subsidy, Services, CityLanding, Home, service route pages
- Consolidate card classes (`.prop-card`, `.service-card`, `.slab-card`, `.fin-benefit-card`, etc.) into `Card` variants
- Resolve `.blog-card` / `.trust-item` cross-file selector collisions

### Questions / Clarifications
- CSS Modules per component vs. keep global `app/styles/` with BEM?

### Wait for Approval

---

## Phase 5 — Layout, Navigation & Global Chrome
*(Completed — approved with user decisions)*

### Goals
- Premium nav/footer; fix mobile stacking; performance-safe scroll behavior

### Tasks
- ✅ Navbar: apply new tokens; desktop phone link (+91 96404 84677); Services + Locations dropdowns kept
- ✅ Replace hover-only dropdown CSS with Phase 3 click pattern styles + aria-expanded indicator
- ✅ Footer: certification badge slots (SVG-ready); credit line kept; `nav` landmarks on link columns
- ✅ `StickyCTA`: `requestAnimationFrame` scroll throttle; read `sessionStorage` on mount; safe-area `padding-bottom` on body when visible
- ✅ Floating WhatsApp + Calculator: z-index from tokens; reduced-motion on pulse animations; siteConfig URLs
- ✅ `ScrollManager`: respect reduced motion (`auto` vs `smooth`)
- ✅ Mobile menu link padding ≥ 44px; mobile toggle padded hit area (Phase 3)

### User Decisions (locked)
- Keep Services + Locations dropdowns
- Keep StickyCTA + both floating buttons on all pages (including mobile)
- Desktop navbar: show phone +91 96404 84677
- Footer credit: keep "Made by Bhaswanth Vommena"

### Wait for Approval
- **Phase 6** — Reply **"Approve Phase 6"** (with answers to Phase 6 questions) to proceed.

---

## Phase 6 — Home Page & Primary Conversion
*(Completed — approved with user decisions)*

### Goals
- Fix broken hero, strengthen funnel, remove trust-damaging placeholders

### Tasks
- ✅ Hero headline kept as-is; two-column desktop layout (copy + highlight stats)
- ✅ WhatsApp CTA added in hero alongside call + quote buttons
- ✅ Calculator extracted to `SolarCalculator` + shared `app/lib/calc.ts`
- ✅ Post-calc CTA passes `bill`, `systemSize`, `lifetimeSavings`, `lead_source=calculator`
- ✅ Blog previews pull from `blogArticles` (2 most recent, correct slugs)
- ✅ Replaced placeholder experience block with scrolling testimonial marquee (6 reviews)
- ✅ Section order: hero → trust → calculator → value props → testimonials → services → subsidy hook → FAQ → blog
- ✅ Added `SubsidyHook` section linking to `/subsidy` and `/financing`
- ⏭ Split Home into RSC shell + client islands — deferred (Home remains client component)
- ⏭ `data-gtm-event` hooks — deferred to Phase 12

### User Decisions (locked)
- Keep hero headline copy unchanged
- 6 real testimonials in left-to-right marquee (`app/data/testimonials.ts`)
- Two-column hero layout approved
- Section order approved

### Wait for Approval
- **Phase 7** — Reply **"Approve Phase 7"** (with answers to Phase 7 questions) to proceed.

---

## Phase 7 — Core Route Pages (Subsidy, Financing, Services, About, Contact, Projects)
*(Completed — approved with user decisions)*

### Goals
- RSC where possible; deduplicate Subsidy/Financing; production-ready contact

### Tasks
- ✅ **Financing:** Subsidy page is fully standalone (does not import Financing). `/financing` hidden from footer + sitemap, `noindex`, permanent redirect to `/subsidy`. `Financing.tsx` kept but unused.
- ✅ **Projects:** `noindex, nofollow`; excluded from sitemap; not in nav (unchanged)
- ✅ **Contact:** single-page form kept; calculator query params prefill requirement + hidden fields; API includes lead source / system size / savings
- ✅ **About:** removed `dangerouslySetInnerHTML` on smart cards (typed React content)
- ⏭ Services RSC + `next/image` — deferred to Phase 8
- ⏭ Subsidy eligibility `aria-pressed` — deferred (Phase 3 skip)

### User Decisions (locked)
- Do not delete Financing route; hide from footer/sitemap; redirect to Subsidy
- Keep contact form as single-page
- Projects: hide and noindex

### Wait for Approval
- **Phase 8** — Reply **"Approve Phase 8"** (with answers to Phase 8 questions) to proceed.

---

## Phase 8 — City & Service Landing Pages
*(Locked until Phase 7 approved)*

### Goals
- Local SEO pages with unique schema, OG, and consistent UX

### Tasks
- City pages: inject `FAQPage` JSON-LD from `faqs` prop; align `LocalBusiness` (address/geo on all cities like Nellore)
- City hero: consistent height `clamp(min, 80vh, max)`; fix excessive mobile `6rem` padding
- Per-city OG image generation (`app/og/[city]/route.tsx` or static assets)
- City `whySection`: replace raw `dangerouslySetInnerHTML` with sanitized HTML or MDX snippet
- Service subpages (`residential`, `commercial`, `industrial`, `maintenance`): add `Service` schema; remove inline grid styles; use `ServiceSplit` / shared layouts
- Add contextual internal links between city ↔ service ↔ subsidy pages
- Duplicate content: differentiate Subsidy/Financing EMI copy if not merged

### Questions / Clarifications
- OG images: auto-generated (Vercel OG) or designer-provided static files per city?

### Wait for Approval

---

## Phase 9 — SEO & Metadata
*(Locked until Phase 8 approved)*

### Goals
- SERP-ready titles/descriptions; correct social cards; rich results

### Tasks
- Trim all route titles to ~50–60 chars; descriptions to ~140–160
- Shorten blog post titles (drop or shorten `| ELRIX ENERGY` suffix)
- Per-route `openGraph` + `twitter` (stop inheriting homepage Twitter on child routes)
- Fix root layout title/description length
- `alternates.canonical` on all indexed routes; confirm `/projects` handling
- `alternates.languages` for `en-IN` per route via Metadata API; remove redundant manual hreflang if duplicated
- Schema strategy: sitewide `HomeAndConstructionBusiness` only on home/about; `@id` linking to city `LocalBusiness`
- Enrich `BlogPosting`: `dateModified`, `wordCount`, `articleBody` or excerpt, per-post `image`
- `BreadcrumbList` retained on service subs
- Sitemap: `lastModified` from build time or content dates (not hardcoded `2026-05-18` only)
- Home: keep `FAQPage` schema in sync with visible FAQs
- Add internal links audit pass (Home → `/financing` or `/subsidy`, blog ↔ services)

### Questions / Clarifications
- Default meta title suffix: `| ELRIX ENERGY` or `| ELRIX`?

### Wait for Approval

---

## Phase 10 — Performance
*(Locked until Phase 9 approved)*

### Goals
- Core Web Vitals: LCP, CLS, INP

### Tasks
- Hero: `<link rel="preload" as="image" href="/hero-bg.avif">` and/or `next/image` `priority` hero (if moving off CSS background)
- Replace all `<img>` with `next/image` (width/height required); Navbar/Footer logo included
- Stop global import of all 14 CSS files on every route — CSS Modules or route-level imports
- Convert static page shells to RSC (Services, Projects, About, Blog list, service subs where possible)
- Hoist Home FAQ/static arrays to server; client islands only for interactive blocks
- Shared single `IntersectionObserver` for `Reveal` (or CSS `@supports` scroll-driven animations fallback)
- Throttle Navbar + StickyCTA scroll with `requestAnimationFrame`
- Lazy-load Google Maps iframe via `dynamic(..., { ssr: false })` + intersection trigger
- Disable hero `background-position` animation on mobile and when off-screen
- Drop unused font weights after audit

### Questions / Clarifications
- Keep CSS background hero, or switch to positioned `next/image`?

### Wait for Approval

---

## Phase 11 — Content, Assets & Trust
*(Locked until Phase 10 approved)*

### Goals
- No broken images; credible social proof; blog as SEO engine

### Tasks
- Add `public/logo.png` (schema + nav + footer)
- Add `md-photo.png`, `residential_solar.png`, `commercial_solar.png`, `industrial_solar.png`, `solar_maintenance.png` (optimized WebP/AVIF)
- Trust strip: MNRE / APSPDCL / ISO / MSME badge SVGs with alt text
- Testimonials: 3–6 entries + optional `AggregateRating` schema when real data exists
- Projects: minimum 3 case studies (kW, city, savings, photo) or keep page noindex
- Blog: migrate `blogData.ts` → MDX (`content/blog/*.mdx`); target 12 posts, 1500+ words each, images, FAQ blocks where relevant
- Blog: reading time, TOC, unique OG per post
- De-duplicate pricing table between blog post 4 and residential page (single source)
- Sanitize any remaining HTML content (`isomorphic-dompurify` or MDX-only)
- Curly quotes and copy polish on About MD message

### Questions / Clarifications
- Real customer names/photos permissible for testimonials?
- Who provides project case study copy and images?

### Wait for Approval

---

## Phase 12 — Analytics, Compliance & Production Hardening
*(Locked until Phase 11 approved)*

### Goals
- Measurable funnel; legal baseline; deploy-safe config

### Tasks
- Cookie consent banner; load GA only after consent (`gtag('consent', 'default'/'update')`)
- GA4 events: `cta_click`, `phone_click`, `whatsapp_open`, `calc_submit`, `form_submit`, `emi_calculate`
- `next.config` security headers: CSP, Referrer-Policy, X-Frame-Options, Permissions-Policy
- Sentry (or equivalent) for client/server errors
- Metadata: `viewport`, `themeColor`, `manifest.webmanifest`, `icons` in layout metadata
- Remove hardcoded GA ID / FormSubmit URL from client bundles (env only)
- Optional: `robots` review, Search Console verification retained
- Final a11y pass (axe/Lighthouse) on all templates
- Final Lighthouse pass on Home, one city page, one service page, Contact

### Questions / Clarifications
- Analytics: GA4 only, or add PostHog/Meta Pixel?
- Cookie consent vendor: custom vs Cookiebot/OneTrust?

### Wait for Approval

---

## Audit Coverage Checklist (all phases)

| Audit area | Phase(s) |
|------------|----------|
| Monochrome brand / primary === secondary | 1 |
| Hero word-dark contrast | 1 tokens, 6 implementation |
| Inline styles (150+) | 4, 7, 8 |
| Design tokens (spacing, type, motion, z-index) | 1 |
| transition: all | 1 |
| No focus-visible | 1 |
| FAQ div role=button | 3, 4 |
| Nav hover-only / Locations span | 3, 5 |
| aria-live calc/form | 3, 6 |
| aria-pressed eligibility | 3 |
| Reveal reduced motion | 1 baseline, 3 |
| Heading hierarchy skips | 3, 7 |
| lang en vs en-IN | 1 |
| Trust strip semantic list | 3 |
| Footer landmarks / personal credit | 5 |
| Missing images (6 assets) | 11 |
| logo.png schema | 11 |
| Dead code Calculator/BlogPost/pricingData | 2 |
| Stale blog previews 2023 | 6 |
| Calculator logic fork CO₂×31 vs ×40 | 2 lib, 6 |
| use client overuse / RSC | 6, 7, 10 |
| Global CSS on every route | 10 |
| Hero background LCP / preload | 10 |
| next/image / CLS | 10, 11 |
| Scroll listener INP | 5, 10 |
| Shared IntersectionObserver | 10 |
| Meta title/description length | 9 |
| Twitter inherits homepage | 9 |
| Single OG image | 8, 9 |
| FAQPage city schema | 8 |
| Service schema | 8 |
| BlogPosting enrich | 9 |
| HomeAndConstructionBusiness every page | 9 |
| Sitemap lastModified | 9 |
| Duplicate Subsidy/Financing | 7 |
| Thin blog content | 11 |
| Experience “no reviews” section | 6, 11 |
| Projects placeholder | 7, 11 |
| FormSubmit client exposed | 7, 12 |
| No captcha/honeypot | 7 |
| CTA fatigue / section order | 6 |
| Multi-step wizard | 7 |
| WhatsApp hero CTA | 6 |
| Calculator above fold | 6 |
| Certification text-only trust | 5, 11 |
| City hero mobile padding | 8 |
| Tablet breakpoint gap | 1 clamp, 5, 10 |
| btn-large dead class | 1 |
| .dark-glass unused | 1 |
| dangerouslySetInnerHTML XSS risk | 7, 8, 11 |
| GA no consent DPDP | 12 |
| No error/not-found boundaries | 2 |
| strict TypeScript | 2 |
| siteConfig centralization | 2 |
| Merge financing recommendation | 7 |
| Agency rebuild nav simplification | 5 |
| Per-city maps (future) | 8 note |
| hreflang | 9 |
| Internal linking gaps | 8, 9 |
| Duplicate pricing blog/residential | 11 |
| Guarantee heading misuse | 3, 7 |
| Map iframe lazy | 10 |
| Font weight bloat | 1, 10 |
| Hero infinite animation | 1, 10 |
| StickyCTA sessionStorage flicker | 5 |
| body:has() floating offset | 5 |
| OpenGraph locale | 9 |
| Blog MDX | 11 |
| 12 posts 1500 words | 11 |
| AggregateRating when ready | 11 |
| CSP / Sentry | 12 |
| manifest / theme-color | 12 |