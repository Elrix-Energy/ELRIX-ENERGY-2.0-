const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

/** Minimum v3 score (0–1). 0.5 is Google's recommended starting point. */
const MIN_SCORE = 0.5;

export function isRecaptchaConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() &&
      process.env.RECAPTCHA_SECRET_KEY?.trim(),
  );
}

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(
  token: string,
  expectedAction = "contact",
): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) return true;

  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  if (!response.ok) return false;

  const data = (await response.json()) as RecaptchaVerifyResponse;
  if (!data.success) return false;
  if (typeof data.score === "number" && data.score < MIN_SCORE) return false;
  if (data.action && data.action !== expectedAction) return false;

  return true;
}
