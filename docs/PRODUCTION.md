# Production checklist



## Environment variables



Copy `.env.example` to `.env.local` (local) and configure in Vercel (production):



- `NEXT_PUBLIC_SITE_URL` — canonical apex URL: `https://elrixenergy.com` (no `www`, no trailing slash). Set this in Vercel production env. `www.elrixenergy.com` permanently redirects to the apex domain.

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 (optional; gated by cookie consent)

- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (optional; gated by cookie consent)



## Contact form (FormSubmit + reCAPTCHA v3)

Inquiries post to `/api/contact`, which verifies **Google reCAPTCHA v3**, applies rate limiting, then forwards to [FormSubmit](https://formsubmit.co) → `elrixenergy@gmail.com`.

**Required in production:**

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — reCAPTCHA v3 site key ([admin console](https://www.google.com/recaptcha/admin))
- `RECAPTCHA_SECRET_KEY` — matching secret key (server-only)

Add your domain(s) when creating the reCAPTCHA key. Without both keys, captcha verification is skipped (local dev only — set keys before go-live).

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

