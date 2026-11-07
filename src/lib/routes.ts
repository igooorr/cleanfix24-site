import { SERVICES, servicePath } from "@/lib/services";
import { SITE } from "@/lib/site";

export interface PageMeta {
  title: string;
  description: string;
}

const STATIC_META: Record<string, PageMeta> = {
  "/": {
    title: "Cleanfix24 - Professional Cleaning Services | Wellington & Taunton, Somerset",
    description:
      "Family-run cleaning in Wellington, Taunton, Somerset & Devon: regular, deep and end of tenancy cleaning, sofa & mattress cleaning, stain removal, patio cleaning, laundry collection, handyman and garden services. Free quotes.",
  },
  "/about": {
    title: "About Us | Cleanfix24 - Family-Run Cleaners in Somerset",
    description:
      "Meet Ihor and Ruslana, the family behind Cleanfix24, a trusted local cleaning business serving Wellington, Taunton and the Somerset & Devon area.",
  },
  "/services": {
    title: "Our Cleaning Services | Cleanfix24 - Somerset & Devon",
    description:
      "House, deep, end of tenancy, after builders and commercial cleaning, sofa & mattress cleaning, stain removal, patio and wall cleaning, laundry collection, handyman and garden work.",
  },
  "/contact": {
    title: "Contact Us | Cleanfix24 - Free Quotes in Somerset & Devon",
    description:
      "Get a free cleaning quote from Cleanfix24. Call, WhatsApp or send a message - serving Wellington, Taunton and surrounding areas.",
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: "Page Not Found | Cleanfix24",
  description: STATIC_META["/"].description,
};

export function getMeta(path: string): PageMeta {
  if (STATIC_META[path]) return STATIC_META[path];
  const service = SERVICES.find((s) => servicePath(s) === path);
  if (service) return { title: service.metaTitle, description: service.metaDescription };
  return NOT_FOUND_META;
}

/** Every indexable URL on the site (used for prerendering and sitemap). */
export const ALL_PATHS: string[] = [...Object.keys(STATIC_META), ...SERVICES.map(servicePath)];

export const canonicalUrl = (path: string) => `${SITE.url}${path === "/" ? "/" : path}`;
