# Production checklist



## Environment variables



Copy `.env.example` to `.env.local` (local) and configure in Vercel (production):



- `NEXT_PUBLIC_SITE_URL` — canonical site URL

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 (optional; gated by cookie consent)

- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (optional; gated by cookie consent)



## Contact form (FormSubmit)



Inquiries post to [FormSubmit](https://formsubmit.co) and are delivered to `elrixenergy@gmail.com` (see `CONTACT.email` in `app/lib/siteConfig.ts`).



On first deploy, submit a test inquiry and **confirm the activation email** from FormSubmit if prompted.



## Analytics events



After accepting cookies, these events fire in GA4 and Meta (custom):



| Event | Trigger |

|-------|---------|

| `cta_click` | Links to `/contact` |

| `phone_click` | `tel:` links |

| `whatsapp_click` | WhatsApp links |

| `calculator_submit` | Solar savings calculator |

| `emi_calculate` | Subsidy EMI calculator |

| `form_submit` | Contact form (success/failure) |



Meta standard events: `Lead` (successful contact), `Contact` (phone/WhatsApp).



## Security headers



Conservative headers are set in `next.config.mjs` (no strict CSP). Review before tightening further.

