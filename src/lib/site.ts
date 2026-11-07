// Single source of truth for business contact details.
export const SITE = {
  name: "Cleanfix24",
  url: "https://cleanfix24.co.uk",
  phoneDisplay: "07840 475060",
  phoneTel: "07840475060",
  whatsappNumber: "447840475060",
  email: "spihor@gmail.com",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}`;
export const TEL_URL = `tel:${SITE.phoneTel}`;
export const MAILTO_URL = `mailto:${SITE.email}`;
