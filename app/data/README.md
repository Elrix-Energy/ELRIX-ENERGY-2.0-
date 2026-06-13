# Content data (interim)

Static TypeScript data files power the site until **Sanity CMS** is wired up.

## Planned Sanity document types

| Content | Current file | Notes |
|---------|--------------|--------|
| Blog posts | `blogData.ts` | Keep TS for now; migrate to Sanity `post` |
| Testimonials | `testimonials.ts` | Home marquee |
| Trust / KPI strip | `trustMetrics.ts` + `siteConfig` certifications | Optional numeric KPI bar |
| Projects | `projectsData.ts` | Placeholders until final case studies |
| Pricing slabs | `pricingData.ts` | Subsidy + residential table |

## Public assets

Logo, founder photo, service images, and hero background live in `/public` (WebP/AVIF/JPEG — see `PUBLIC_ASSETS` in `siteConfig`). Re-run `npm run optimize:images` after replacing source art.

## Environment

See `.env.example` for future `NEXT_PUBLIC_SANITY_*` variables.
