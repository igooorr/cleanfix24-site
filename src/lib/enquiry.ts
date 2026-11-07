import { SITE, WEB3FORMS_KEY, WHATSAPP_URL } from "@/lib/site";

export type EnquiryFields = Record<string, string>;

/** Plain-text body: one "Label: value" line per filled field. */
export const formatEnquiry = (title: string, fields: EnquiryFields) =>
  `${title}\n\n` +
  Object.entries(fields)
    .filter(([, v]) => v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

export function sendViaWhatsApp(title: string, fields: EnquiryFields) {
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(formatEnquiry(title, fields))}`, "_blank");
}

/**
 * Sends the enquiry by email. Uses Web3Forms when a key is configured
 * (delivered straight to our inbox), otherwise opens the visitor's email app.
 * Returns "sent" or "opened-mail-app".
 */
export async function sendViaEmail(
  title: string,
  fields: EnquiryFields,
  replyTo?: string,
): Promise<"sent" | "opened-mail-app"> {
  if (!WEB3FORMS_KEY) {
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      title,
    )}&body=${encodeURIComponent(formatEnquiry(title, fields))}`;
    return "opened-mail-app";
  }
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `${title} — cleanfix24.co.uk`,
      from_name: "Cleanfix24 website",
      ...(replyTo ? { replyto: replyTo } : {}),
      ...fields,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || "Could not send message");
  return "sent";
}
