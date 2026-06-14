import { NextResponse } from "next/server";
import {
  isValidIndianMobile,
  normalizeIndianMobile,
} from "@/app/lib/contactForm";
import { isRecaptchaConfigured, verifyRecaptchaToken } from "@/app/lib/recaptcha";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  recaptchaToken?: string;
  honey?: string;
  name?: string;
  phone?: string;
  location?: string;
  requirement?: string;
  monthlyBill?: string;
  leadSource?: string;
  systemSize?: string;
  lifetimeSavings?: string;
};

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

/** Verify spam protection + field validation. Email delivery happens in the browser via FormSubmit. */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later or call us directly." },
      { status: 429 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.honey?.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (isRecaptchaConfigured()) {
    if (!body.recaptchaToken?.trim()) {
      return NextResponse.json({ error: "Captcha verification required." }, { status: 400 });
    }

    const captchaValid = await verifyRecaptchaToken(body.recaptchaToken, "contact");
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Captcha verification failed. Please refresh and try again." },
        { status: 403 },
      );
    }
  }

  const name = body.name?.trim() ?? "";
  const phone = normalizeIndianMobile(body.phone ?? "");
  const location = body.location?.trim() ?? "";
  const requirement = body.requirement?.trim() ?? "";

  if (!name || !phone || !location || !requirement) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidIndianMobile(phone)) {
    return NextResponse.json(
      { error: "Enter a valid 10-digit Indian mobile number (without +91)." },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
