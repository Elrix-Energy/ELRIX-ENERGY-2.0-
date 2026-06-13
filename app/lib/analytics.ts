/**
 * Client-side analytics helpers (GA4 + Meta Pixel).
 * Scripts load only after cookie consent — see AnalyticsProvider.
 */

export const CONSENT_STORAGE_KEY = "elrix_analytics_consent";

export type ConsentStatus = "accepted" | "rejected";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID?.trim() || "";

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";

export const ANALYTICS_ENABLED =
  Boolean(GA_MEASUREMENT_ID || META_PIXEL_ID);

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function getStoredConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setStoredConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, status);
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === "accepted";
}

function cleanParams(params?: EventParams): Record<string, string | number> {
  if (!params) return {};
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as Record<string, string | number>;
}

export function trackEvent(
  eventName: string,
  params?: EventParams,
): void {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  const payload = cleanParams(params);

  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag("event", eventName, payload);
  }

  if (META_PIXEL_ID && window.fbq) {
    window.fbq("trackCustom", eventName, payload);
  }
}

export function trackCtaClick(location: string, label: string, href?: string): void {
  trackEvent("cta_click", {
    event_category: "engagement",
    cta_location: location,
    cta_label: label,
    link_url: href,
  });
}

export function trackPhoneClick(location: string): void {
  trackEvent("phone_click", { event_category: "contact", contact_location: location });
  if (META_PIXEL_ID && window.fbq) {
    window.fbq("track", "Contact", { contact_location: location });
  }
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", { event_category: "contact", contact_location: location });
  if (META_PIXEL_ID && window.fbq) {
    window.fbq("track", "Contact", { contact_method: "whatsapp", contact_location: location });
  }
}

export function trackCalculatorSubmit(monthlyBill: number, systemSizeKw?: string): void {
  trackEvent("calculator_submit", {
    event_category: "calculator",
    monthly_bill: monthlyBill,
    system_size_kw: systemSizeKw,
  });
}

export function trackEmiCalculate(principal: number, emi: number, tenureMonths: number): void {
  trackEvent("emi_calculate", {
    event_category: "calculator",
    loan_principal: principal,
    monthly_emi: emi,
    tenure_months: tenureMonths,
  });
}

export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent("form_submit", {
    event_category: "lead",
    form_name: formName,
    success,
  });
  if (success && META_PIXEL_ID && window.fbq) {
    window.fbq("track", "Lead", { form_name: formName });
  }
}
