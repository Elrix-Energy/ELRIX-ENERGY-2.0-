import { FORM_SUBMIT } from "./siteConfig";

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

export type InquiryFields = {
  name: string;
  phone: string;
  location: string;
  requirement: string;
  monthlyBill?: string;
  leadSource?: string;
  systemSize?: string;
  lifetimeSavings?: string;
};

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

function parseFormSubmitResponse(
  response: Response,
  rawBody: string,
): { ok: true } | { ok: false; error: string } {
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

function appendInquiryFields(target: FormData | URLSearchParams, fields: InquiryFields): void {
  target.append("name", fields.name);
  target.append("phone", fields.phone);
  target.append("location", fields.location);
  target.append("requirement", fields.requirement);
  if (fields.monthlyBill) target.append("monthlyBill", fields.monthlyBill);
  if (fields.leadSource) target.append("leadSource", fields.leadSource);
  if (fields.systemSize) target.append("systemSize", fields.systemSize);
  if (fields.lifetimeSavings) target.append("lifetimeSavings", fields.lifetimeSavings);
  target.append("_captcha", "false");
  target.append("_template", "table");
  target.append(
    "_subject",
    `New Solar Inquiry from ${fields.name} - ${fields.location}${
      fields.leadSource ? ` (${fields.leadSource})` : ""
    }`,
  );
}

/**
 * Submit from the browser — FormSubmit expects a real page context and often
 * rejects server-side proxy requests from Vercel/AWS.
 */
export async function submitInquiryToFormSubmit(
  fields: InquiryFields,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const formData = new FormData();
  appendInquiryFields(formData, fields);

  let response: Response;
  try {
    response = await fetch(FORM_SUBMIT.ajaxUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
  } catch {
    return {
      ok: false,
      error: "Unable to reach our mail service. Please check your connection and try again.",
    };
  }

  return parseFormSubmitResponse(response, await response.text());
}
