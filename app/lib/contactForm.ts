import { FORM_SUBMIT, SITE_URL } from "./siteConfig";

/** Normalize Indian mobile input — strips +91 / 91 prefix and spaces. */
export function normalizeIndianMobile(raw: string): string {
  const digits = raw.trim().replace(/\s+/g, "").replace(/^\+/, "");
  if (digits.startsWith("91") && digits.length === 12) {
    return digits.slice(2);
  }
  return digits;
}

export function isValidIndianMobile(phone: string): boolean {
  return /^[6-9][0-9]{9}$/.test(phone);
}

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

export async function submitInquiryToFormSubmit(fields: {
  name: string;
  phone: string;
  location: string;
  requirement: string;
  monthlyBill?: string;
  leadSource?: string;
  systemSize?: string;
  lifetimeSavings?: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const params = new URLSearchParams();
  params.append("name", fields.name);
  params.append("phone", fields.phone);
  params.append("location", fields.location);
  params.append("requirement", fields.requirement);
  if (fields.monthlyBill) params.append("monthlyBill", fields.monthlyBill);
  if (fields.leadSource) params.append("leadSource", fields.leadSource);
  if (fields.systemSize) params.append("systemSize", fields.systemSize);
  if (fields.lifetimeSavings) params.append("lifetimeSavings", fields.lifetimeSavings);
  params.append("_captcha", "false");
  params.append("_template", "table");
  params.append(
    "_subject",
    `New Solar Inquiry from ${fields.name} — ${fields.location}${
      fields.leadSource ? ` (${fields.leadSource})` : ""
    }`,
  );

  let response: Response;
  try {
    response = await fetch(FORM_SUBMIT.ajaxUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: `${SITE_URL}/contact`,
        Origin: SITE_URL,
      },
      body: params.toString(),
    });
  } catch {
    return {
      ok: false,
      error: "Unable to reach our mail service. Please call us directly.",
    };
  }

  const rawBody = await response.text();
  let data: FormSubmitResponse = {};
  try {
    data = JSON.parse(rawBody) as FormSubmitResponse;
  } catch {
    if (!response.ok) {
      return {
        ok: false,
        error: "Unable to send your inquiry. Please call us directly.",
      };
    }
    return { ok: true };
  }

  const success = data.success === true || data.success === "true";
  if (!success) {
    const message = data.message?.trim();
    if (message?.toLowerCase().includes("activation")) {
      return {
        ok: false,
        error:
          "Our contact form is awaiting email activation. Please call us directly and we will fix this shortly.",
      };
    }
    return {
      ok: false,
      error: message || "Unable to send your inquiry. Please call us directly.",
    };
  }

  return { ok: true };
}
