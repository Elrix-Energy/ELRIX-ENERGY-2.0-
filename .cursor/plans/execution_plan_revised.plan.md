---
name: execution plan revised
overview: Reconciles the original audit, the 12-phase execution roadmap, and completed chat history into one phase-gated source of truth with completed items struck through, remaining work listed, and all approval questions prepared up front.
todos:
  - id: phase3-a11y
    content: Phase 3 Accessibility selected scope executed; skipped items remain deferred
    status: completed
  - id: phase4-primitives
    content: Phase 4 shared UI primitives and CSS consolidation executed
    status: completed
  - id: phase5-chrome
    content: Phase 5 layout/navigation/footer/global chrome executed
    status: completed
  - id: phase6-home
    content: Phase 6 home page conversion rebuild executed
    status: completed
  - id: phase7-core-routes
    content: Phase 7 core route refactors executed
    status: completed
  - id: phase8-local-pages
    content: Execute Phase 8 city and service landing cleanup after approval
    status: completed
  - id: phase9-seo-final
    content: Execute final Phase 9 SEO cleanup after approval
    status: completed
  - id: phase10-performance
    content: Execute Phase 10 performance work after approval
    status: completed
  - id: phase11-content-assets
    content: Execute Phase 11 content/assets/trust work after approval
    status: completed
  - id: phase12-hardening
    content: Execute Phase 12 analytics/compliance/production hardening after approval
    status: completed
isProject: false
---

# Execution Plan Revised

## Phase Status (at a glance)

| Phase | Status |
|-------|--------|
| 1 — Brand & Design System | ✅ Complete |
| 2 — Architecture & Hygiene | ✅ Complete |
| 3 — Accessibility | ✅ Complete (selected scope) |
| 4 — UI Primitives | ✅ Complete |
| 5 — Layout & Global Chrome | ✅ Complete |
| 6 — Home Page | ✅ Complete |
| 7 — Core Route Pages | ✅ Complete |
| 8 — City & Service Pages | ✅ Complete |
| 9 — SEO Finalization | ✅ Complete |
| 10 — Performance | ✅ Complete |
| 11 — Content & Assets | ✅ Complete |
| 12 — Production Hardening | ✅ Complete |

## Source Of Truth
- Primary audit: `.cursor/plans/elrix_energy_v2_audit_8d896fdf.plan.md`
- Original execution roadmap: `.cursor/plans/elrix_energy_v2_execution.plan.md`
- Chat history reviewed: [ELRIX V2 audit and implementation](9bc731d8-ee73-4dc5-910f-a1d9a61790d3)

## Ground Rules Going Forward
- Each phase remains gated. I will not implement a phase until you explicitly say `Approve Phase X`.
- The questions below are the frozen question bank. I should not introduce new phase-scope questions later unless implementation reveals a blocker or the code contradicts the plan.
- You can answer questions for one phase at a time or answer all now. I will only execute the phase you approve.
- The original phase numbering is preserved. The SEO work already completed is marked under Phase 9 as an early pass.
- **All 12 phases complete.** Launch checklist: `docs/PRODUCTION.md`.

## Completed Work Ledger

### Phase 1 — Foundation: Brand & Design System
Audit references: Audit §1, §2, §3, §5 A4/A12, §12, Top 25 #1, #2, #7, #19, #24.

Completed:
- ~~Redefine brand palette from monochrome black to navy/gold.~~
- ~~Ensure `--primary` and `--secondary` are distinct.~~
- ~~Add neutral surface/ink color tokens.~~
- ~~Add 4pt spacing scale.~~
- ~~Add modular type tokens and `clamp()` heading baseline.~~
- ~~Set `<html lang="en-IN">`.~~
- ~~Add radius, elevation, z-index, and motion tokens.~~
- ~~Replace important shared `transition: all` patterns with explicit transitions.~~
- ~~Add global `*:focus-visible` baseline.~~
- ~~Remove unused `.dark-glass`.~~
- ~~Update core CSS files: `index.css`, `App.css`, `Navbar.css`, `Home.css`, `CityLanding.css`, `Footer.css`, `StickyCTA.css`.~~
- ~~Production build passed after Phase 1.~~

Still carried forward:
- Reduce unused font weights after a deeper usage/performance audit. This belongs in Phase 10.
- Fully retire page-specific inline sizing and duplicate hero/page-header overrides. Partially done in Phases 4–7; remainder in Phase 8.
- Document or implement the final button/component variant matrix. Partially done in Phase 4.

### Phase 2 — Architecture & Codebase Hygiene
Audit references: Audit §8, §11, Top 25 #9, #11, #21, plus production readiness findings.

Completed:
- ~~Create `app/lib/siteConfig.ts`.~~
- ~~Create `app/lib/seoConfig.ts`.~~
- ~~Rename `app/components/pages` to `app/components/views`.~~
- ~~Update route imports to use `components/views`.~~
- ~~Delete orphan `Calculator.tsx`.~~
- ~~Delete orphan `BlogPost.tsx`.~~
- ~~Remove unused `pricingData` from Subsidy and Financing.~~
- ~~Remove unused `ArrowRight` import from Home.~~
- ~~Enable TypeScript `strict`.~~
- ~~Add `baseUrl` and `@/*` path alias.~~
- ~~Type important `useState(null)` and form event handlers.~~
- ~~Add `app/error.tsx`.~~
- ~~Add `app/not-found.tsx`.~~
- ~~Add `.env.example`.~~
- ~~Install Resend and create `app/api/contact/route.ts`.~~
- ~~Move contact form submission from FormSubmit client call to `/api/contact`.~~
- ~~Add server honeypot and simple rate limiting to contact API.~~
- ~~Production build passed after Phase 2.~~

Still carried forward:
- Replace Resend sandbox sender `onboarding@resend.dev` after all phases, once custom sender domain is verified.
- Decide whether to add reCAPTCHA v3. This remains in Phase 12 unless you request it earlier.

### Phase 9 — SEO & Metadata Early Pass
Audit references: Audit §6, Top 25 #12, #13, #14, plus original execution Phase 9.

Completed early:
- ~~Expand `blogData.ts` with `BlogArticle` interface.~~
- ~~Add blog fields: `slug`, `description`, `publishedDate`, `author`, `image`, `keywords`, `content`.~~
- ~~Wire `layout.tsx` to `siteConfig` and `seoConfig`.~~
- ~~Add explicit home metadata.~~
- ~~Add or update route metadata across major indexed pages.~~
- ~~Add per-route Twitter card metadata for major routes.~~
- ~~Update blog `generateMetadata()` to pull dynamically from each blog object.~~
- ~~Add/enrich `BlogPosting` JSON-LD for dynamic blog posts.~~
- ~~Add `BreadcrumbList` JSON-LD to missing static pages.~~
- ~~Update `sitemap.ts` to use `SITE_URL` and blog `slug` / `publishedDate`.~~
- ~~Production build passed after SEO early pass.~~

Still carried forward for final Phase 9:
- Trim every route title to roughly 50-60 characters where still long.
- Trim every route description to roughly 140-160 characters where still long.
- Add `alternates.languages` for `en-IN` via Metadata API and remove redundant manual hreflang if duplicated.
- Re-scope sitewide `HomeAndConstructionBusiness` so it does not appear incorrectly on every route if final SEO strategy requires route-specific schema.
- Add `Service` schema to service subpages.
- Add `FAQPage` schema to city pages from their visible FAQ data.
- Add true per-route/per-city OG images or Vercel OG generation. Current blog image paths are placeholders and assets do not exist yet.
- Add `dateModified`, word count, excerpt/article body improvements to blog schema if content remains in `blogData.ts`.
- Add final internal-linking pass.

## Remaining Execution Roadmap

### Phase 3 — Accessibility (WCAG 2.2)
Audit references: Audit §5 A1-A20, Audit §9, Top 25 #3, #4, #15, #16.

Selected scope executed on May 22, 2026.

Completed:
- ~~Fix Navbar dropdowns: keyboard access, `aria-expanded`, `aria-haspopup`, Escape close, and replace Locations `<span>` with `<button type="button">`.~~
- ~~Preserve desktop hover while adding click/keyboard dropdown operation.~~
- ~~Improve mobile menu accessibility: toggle `aria-expanded`, adequate 44px hit targets, Escape close, and focus first mobile link on open.~~
- ~~Ensure calculator/EMI results and contact messages use `role="status"` and `aria-live="polite"` where missing.~~
- ~~Fix heading skips in Contact, Financing, Services, and About where still present.~~
- ~~Ensure map sections have a visually hidden heading and external links consistently use `rel="noopener noreferrer"`.~~
- ~~Run strict TypeScript verification.~~
- ~~Run production build verification.~~

Skipped by user and deferred:
- Replace Home FAQ and CityLanding FAQ div click patterns with an accessible `FaqAccordion` pattern.
- Add `aria-pressed` to Subsidy eligibility Yes/No toggles.
- Update `Reveal` to bypass delayed visibility when `prefers-reduced-motion: reduce` is active.
- Add `aria-hidden="true"` to decorative Lucide icons where appropriate.
- Convert trust strips to semantic lists where applicable.
- ~~Wrap footer link groups in landmark navigation labels.~~ *(completed in Phase 5)*
- Footer credit cleanup deferred to Phase 5. *(credit kept as-is in Phase 5)*

Phase 3 decisions recorded:
- FAQ implementation: skipped.
- Desktop dropdown behavior: hover plus click/keyboard.
- Mobile menu focus behavior: Escape-to-close with improved focus management only.
- Footer credit: defer footer brand cleanup to Phase 5.
- Reveal reduced motion: user answered yes, but implementation was skipped in selected scope.

### Phase 4 — Shared UI Primitives & CSS Consolidation
Audit references: Audit §2, §8, §12, Top 25 #8, #20.

Selected scope executed on May 22, 2026.

Completed:
- ~~Create shared primitives: Button, Input, Select, Textarea, Card, Badge, Eyebrow, Section.~~
- ~~Use global `app/styles/` with BEM-style classes via `app/styles/UI.css`.~~
- ~~Use variant props such as `variant="primary"` and `size="lg"` for shared primitives.~~
- ~~Create shared sections: TrustStrip, PageHeader, FinalCta, HeroCta.~~
- ~~Create shared EmiCalculator for Subsidy and Financing while keeping both pages separate.~~
- ~~Start removing inline styles only where touched by new shared components.~~
- ~~Wire shared TrustStrip/HeroCta into Home and CityLanding.~~
- ~~Wire shared PageHeader/EmiCalculator/FinalCta/Card into Subsidy and Financing.~~
- ~~Wire shared FinalCta into service subpage CTA sections.~~
- ~~Consolidate touched repeated card patterns into Card variants.~~
- ~~Resolve `.blog-card` selector collision by namespacing Home preview cards to `.home-blog-card`.~~
- ~~Resolve `.trust-item` selector collision by namespacing About trust items to `.about-trust-item` and shared trust strip items to `.trust-strip__item`.~~

Skipped by user and deferred:
- Create or wire shared FaqAccordion from Phase 3.
- Full inline style cleanup across all high-count pages; remaining page-specific cleanup deferred to Phases 7/8.

Phase 4 decisions recorded:
- Styling approach: global `app/styles/` with BEM-style classes.
- Component API style: variant props.
- Inline style scope: only extract styles touched by new shared components.
- EMI calculator assumption: keep Subsidy and Financing as separate pages for now.

### Phase 5 — Layout, Navigation & Global Chrome
Audit references: Audit §4, §5 A2/A3/A19/A20, §10, Top 25 #4, #17, #25.

Selected scope executed on May 22, 2026.

Completed:
- ~~Redesign navbar with finalized information architecture (Services + Locations dropdowns kept).~~
- ~~Add desktop phone link: +91 96404 84677.~~
- ~~Style Phase 3 accessible dropdown behavior with click/keyboard + `aria-expanded` indicator.~~
- ~~Improve footer landmarks with `<nav aria-label="…">` on link columns.~~
- ~~Keep footer credit line (“Made by Bhaswanth Vommena”) per user decision.~~
- ~~Replace text-only footer certification strip with SVG-ready `CertificationBadges` slots.~~
- ~~Add scroll throttling with `requestAnimationFrame` for Navbar and StickyCTA.~~
- ~~Improve StickyCTA: read `sessionStorage` on mount; safe-area `padding-bottom` on body when visible.~~
- ~~Ensure Floating WhatsApp and Calculator use z-index tokens, reduced-motion on pulse, and `siteConfig` URLs.~~
- ~~Update ScrollManager to respect reduced motion (`auto` vs `smooth`).~~
- ~~Mobile menu link padding ≥ 44px and padded mobile toggle hit area (carried from Phase 3).~~
- ~~Centralize phone display, cities, and WhatsApp in `siteConfig`; remove navbar brand inline styles.~~
- ~~Run TypeScript/build verification after changes.~~

Phase 5 decisions recorded:
- Final nav structure: keep Services and Locations dropdowns.
- Keep StickyCTA and both floating buttons on all pages (including mobile).
- Desktop navbar phone link: show +91 96404 84677.
- Footer credit: keep as-is (not founder name).

Also completed here (deferred from Phase 3):
- ~~Wrap footer link groups in landmark navigation labels.~~

### Phase 6 — Home Page & Primary Conversion
Audit references: Audit §2, §4, §8, Top 25 #2, #18, #23.

Selected scope executed on May 22, 2026.

Completed:
- ~~Keep hero headline copy unchanged (user decision).~~
- ~~Two-column desktop hero layout (copy + highlight stats panel).~~
- ~~Add WhatsApp CTA in hero alongside quote and call buttons.~~
- ~~Replace stale Home blog previews with 2 most recent posts from `blogArticles` (correct slugs).~~
- ~~Replace “Be among the first” / no-reviews block with scrolling testimonial marquee (6 real reviews in `app/data/testimonials.ts`).~~
- ~~Reorder Home sections: hero → trust → calculator → value props → testimonials → services → subsidy hook → FAQ → blog teaser.~~
- ~~Extract calculator to shared `SolarCalculator` component + `app/lib/calc.ts` (single CO₂/trees formula).~~
- ~~Pass richer calculator query params to Contact: `bill`, `systemSize`, `lifetimeSavings`, `lead_source=calculator`.~~
- ~~Add `SubsidyHook` section linking to `/subsidy` and `/subsidy#emi-calculator`.~~
- ~~Run TypeScript/build verification after changes.~~

Skipped or deferred:
- Split Home into server shell plus client islands — deferred (Home remains client component).
- Add future `data-gtm-event` analytics attributes — deferred to Phase 12.
- Rewrite/shorten hero subheadline — not requested; headline kept as-is.

Phase 6 decisions recorded:
- Hero headline: keep current copy.
- Testimonials: 6 real reviews in left-to-right marquee; easy to replace via `testimonials.ts`.
- Calculator placement: dedicated section after trust strip (approved section order).
- WhatsApp hero CTA: included alongside primary quote and call CTAs.

### Phase 7 — Core Route Pages
Audit references: Audit §4, §8, §11, Top 25 #10, #11, #21.

Selected scope executed on May 22, 2026.

Completed:
- ~~Verify Subsidy page is fully standalone (does not import Financing components).~~
- ~~Hide `/financing` from footer and sitemap; add `noindex`; permanent redirect to `/subsidy`.~~
- ~~Keep `Financing.tsx` on disk (unused) — route redirects, no delete.~~
- ~~Update internal links (footer, `SubsidyHook`) to `/subsidy#emi-calculator`.~~
- ~~Add `#emi-calculator` scroll-margin for navbar offset on Subsidy page.~~
- ~~Projects page: `noindex, nofollow`; excluded from sitemap; not in nav.~~
- ~~Contact: keep single-page form; prefill requirement from calculator URL params; hidden fields for lead metadata.~~
- ~~Contact API: include `leadSource`, `systemSize`, `lifetimeSavings` in notification email when present.~~
- ~~About: remove `dangerouslySetInnerHTML` on smart cards; use typed React content.~~
- ~~Contact API remains server-only with honeypot + rate limiting (from Phase 2).~~
- ~~Run TypeScript/build verification after changes.~~

Skipped or deferred:
- Convert Services/About shells to RSC + `next/image` on service routes — deferred to Phase 8/10.
- Subsidy eligibility `aria-pressed` — deferred (Phase 3 skip).
- Multi-step contact wizard — not requested; single-page form kept.
- Projects case studies — remain hidden/noindex until Phase 11 content ready.

Phase 7 decisions recorded:
- Financing: do not delete route; hide from footer/sitemap; redirect to Subsidy.
- Contact UX: keep improved single-page form.
- Projects: hide and noindex.

### Phase 8 — City & Service Landing Pages ✅
Audit references: Audit §6, §10, Top 25 #14, plus local SEO findings.

Completed:
- ~~Add city FAQ JSON-LD from visible city FAQ data.~~ (`citySchema.buildFaqPageSchema`, `CityPageShell`)
- ~~Align LocalBusiness schema across all city pages.~~ (Nellore = full HQ address; Tirupati/Kadapa/Ongole = area-served only)
- ~~Fix city hero mobile spacing/height consistency.~~ (`CityLanding.css` mobile hero padding)
- ~~Add contextual internal links between city, service, subsidy, and contact pages.~~ (`CityLanding.tsx`)
- ~~Add Service schema to Residential, Commercial, Industrial, and Maintenance pages.~~ (`buildServiceSchema` on each route)
- ~~Replace city `whySection` raw HTML with structured typed content.~~ (`WhySectionContent`, `cityData.ts` parts)
- ~~Remove major inline styles from city landing layouts.~~ (BEM classes in `CityLanding.css`)
- ~~OG images for home + four city pages via `opengraph-image.tsx`; other routes keep default `/og-image.png`.~~
- ~~Centralize city content in `cityData.ts`, metadata in `cityPageMetadata.ts`, shared `CityPageShell` + `CityLanding` view.~~
- ~~Production build passed after Phase 8.~~

Phase 8 decisions recorded:
- OG: Next.js file-based generation (`app/opengraph-image.tsx`, per-city `opengraph-image.tsx`); no change to other routes.
- Schema: office/PostalAddress only for Nellore (Vedayapalem); other cities use `areaServed` without local street address.
- `whySection`: structured `{ parts: [{ text, strong? }] }` — no `dangerouslySetInnerHTML`.

### Phase 9 — SEO & Metadata Finalization ✅
Audit references: Audit §6, Top 25 #12, #13, #14.

Completed:
- ~~Trim long titles/descriptions across all routes.~~ (`buildPageMetadata`, shorter page titles, `seoTitle` on blog posts)
- ~~Add `alternates.languages` consistently for `en-IN`.~~ (`buildAlternates` on all routes using `buildPageMetadata`)
- ~~Title suffix `| ELRIX ENERGY` via root `title.template`.~~
- ~~Schema: site org in layout; city LocalBusiness; service Service; blog BlogPosting with `dateModified`.~~
- ~~OG: home + cities (Phase 8); other routes default `/og-image.png`; blog posts use per-article images.~~
- ~~Blog stock images in `public/blog/` with Unsplash credits (`ATTRIBUTION.md`, `imageCredit` on posts).~~
- ~~Blog listing + post hero images (`next/image`); related internal links on posts.~~
- ~~Production build passed after Phase 9.~~

Phase 9 decisions recorded:
- Title suffix: `| ELRIX ENERGY` (global template).
- OG: no change to Phase 8 strategy; blog uses local JPG heroes.
- Blog images: Unsplash stock assets added (not `/og-image.png` fallback).

### Phase 10 — Performance ✅
Audit references: Audit §7, §10, Top 25 #10, #17, #24.

Completed:
- ~~Hero CSS backgrounds → `next/image` via shared `HeroBackground` (home priority, city pages).~~
- ~~Removed hero drift animation (reduced motion / off-screen cost).~~
- ~~Replaced raw `<img>` with `next/image` on Services, service subpages, About, FloatingWhatsApp.~~
- ~~`ContentImage` helper for consistent optimized service imagery.~~
- ~~CSS Modules (incremental): `Contact.module.css`, `CityLanding.module.css`; globals kept for tokens/layout.~~
- ~~`LazyGoogleMap` loads embed on scroll intersection (`rootMargin: 240px`).~~
- ~~Dropped Outfit font weight 800 (use 700 in nav/footer/home highlights).~~
- ~~Production build passed after Phase 10.~~

Phase 10 decisions recorded:
- Hero: `next/image` with `fill` + overlay variants (not CSS `background-image`).
- CSS: keep global `index.css` / shared layout; page CSS modules for Contact + City landing first.
- Maps: intersection-triggered load (not click-to-load).

Still deferred to later phases:
- Full `Home.module.css` migration (Home sections still in global `Home.css`).
- Services/About/Subsidy/Blog CSS module migration.
- Broader RSC split and Reveal/IO consolidation.

### Phase 11 — Content, Assets & Trust ✅
Audit references: Audit §2, §6, §11, Top 25 #5, #6, #22, #23.

Completed:
- ~~Verified `/public` assets (logo, md-photo, service PNGs, hero-bg.avif) and documented in `PUBLIC_ASSETS`.~~
- ~~Certification badge SVGs in `/public/certifications/` + footer `CertificationBadges` via `next/image`.~~
- ~~Testimonials unchanged (real reviews in `testimonials.ts`, names shown in marquee).~~
- ~~Six placeholder project cards in `projectsData.ts` + gallery UI; page stays `noindex`, not in sitemap.~~
- ~~Shared `pricingData.ts` + `PricingTable` on Residential; Subsidy slabs + calculator use same subsidy math.~~
- ~~Blog reading time + h2 table of contents on post pages; unique blog JPGs from Phase 9.~~
- ~~`blogData.ts` retained; `app/data/README.md` + `.env.example` Sanity placeholders for future CMS.~~
- ~~`trustMetrics.ts` stub for future KPI strip CMS.~~
- ~~Production build passed after Phase 11.~~

Phase 11 decisions recorded:
- All core static assets present in `public/` (user-confirmed).
- Testimonials: real names/locations (already live).
- Projects: placeholder portfolio only; `noindex` until final content; Sanity planned.
- Blog: keep `blogData.ts`; Sanity migration later (not MDX in this phase).

Deferred:
- Expand blog to 12 posts; MDX/Sanity migration.
- WebP conversion for large PNG service images (optional perf pass).
- Replace project placeholder imagery with real site photos.

### Phase 12 — Analytics, Compliance & Production Hardening
Audit references: Audit §4, §11, Top 25 #25, production readiness findings.

Phase 12 decisions recorded:
- Analytics: **GA4 + Meta Pixel** (env-gated; no hardcoded GA ID).
- Cookie consent: **custom lightweight banner** (`CookieConsent.tsx`); scripts load only after accept.
- Error monitoring: **skipped** (no Sentry).
- Security headers: **conservative** (`next.config.mjs`; no strict CSP).

Completed:
- ~~`app/lib/analytics.ts` — consent storage, GA4 + Meta events.~~
- ~~`AnalyticsProvider`, `AnalyticsScripts`, `CookieConsent`.~~
- ~~Delegated tracking for `tel:`, WhatsApp, `/contact` CTAs; explicit events on calculators and contact form.~~
- ~~Navbar phone + quote CTA `data-analytics-location`.~~
- ~~`app/manifest.ts`, `themeColor` via `viewport` export, `appleWebApp` metadata.~~
- ~~Conservative security headers in `next.config.mjs`.~~
- ~~`.env.example` — `NEXT_PUBLIC_META_PIXEL_ID`.~~
- ~~`docs/PRODUCTION.md` launch checklist.~~
- ~~Production build verified.~~

Deferred:
- Full accessibility audit on all templates.
- Lighthouse runs (Home, city, service, Contact).
- reCAPTCHA v3 on contact form.

## Recommended Next Move
**Phases 1–12 are complete.** Before go-live: set env vars in Vercel, verify Resend domain sender, add real Meta Pixel ID, and run Lighthouse manually if desired. See `docs/PRODUCTION.md`.
