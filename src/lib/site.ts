// Single source of truth for business contact details and trust claims.
export const SITE = {
  name: "Cleanfix24",
  url: "https://cleanfix24.co.uk",
  phoneDisplay: "07840 475060",
  phoneTel: "07840475060",
  whatsappNumber: "447840475060",
  email: "info@cleanfix24.co.uk",
  owners: "Ihor and Ruslana",
} as const;

/**
 * Only switch these to true once you actually hold the certificate/policy —
 * the matching badges then appear everywhere on the site automatically.
 */
export const TRUST = {
  dbsChecked: false,
  insured: false,
} as const;

/**
 * Free key from https://web3forms.com (enter the email that should receive enquiries).
 * While empty, "Send by email" opens the visitor's email app instead.
 */
export const WEB3FORMS_KEY = "5cf64c93-76ae-48d6-b47e-acc70ead7158";

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}`;
export const TEL_URL = `tel:${SITE.phoneTel}`;
export const MAILTO_URL = `mailto:${SITE.email}`;
