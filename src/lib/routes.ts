import { SERVICES, servicePath } from "@/lib/services";
import { AREAS, areaPath } from "@/lib/areas";
import { SITE } from "@/lib/site";
import { LANDINGS, landingPath } from "@/lib/landing";

export interface PageMeta {
  title: string;
  description: string;
}

const STATIC_META: Record<string, PageMeta> = {
  "/": {
    title: "Cleaners in Wellington & Taunton, Somerset | Cleanfix24",
    description:
      "Family-run cleaners in Wellington & Taunton: regular, deep and end of tenancy cleaning, sofas, mattresses, patios and more. Clear prices, free quotes.",
  },
  "/about": {
    title: "About Us | Cleanfix24 - Family-Run Cleaners in Somerset",
    description:
      "Meet Ihor and Ruslana, the family behind Cleanfix24, a trusted local cleaning business serving Wellington, Taunton and the Somerset & Devon area.",
  },
  "/services": {
    title: "Our Cleaning Services | Cleanfix24 - Somerset & Devon",
    description:
      "House, deep, end of tenancy and after builders cleaning, sofas, mattresses, patios, laundry, handyman and garden work in Wellington, Taunton & Somerset.",
  },
  "/home-care": {
    title: "Home Care & Property Checks for Owners Away | Cleanfix24",
    description:
      "Property checks while you're away: regular inspections, post collection, airing, trades and a clean before you return. Wellington, Taunton & Somerset.",
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
  const area = AREAS.find((a) => areaPath(a) === path);
  if (area) return { title: area.metaTitle, description: area.metaDescription };
  const landing = LANDINGS.find((l) => landingPath(l) === path);
  if (landing) return { title: landing.metaTitle, description: landing.metaDescription };
  return NOT_FOUND_META;
}

/** Every indexable URL on the site (used for prerendering and sitemap). */
export const ALL_PATHS: string[] = [
  ...Object.keys(STATIC_META),
  ...SERVICES.map(servicePath),
  ...AREAS.map(areaPath),
];

/** Ad landing pages: prerendered with noindex and kept out of the sitemap. */
export const LANDING_PATHS: string[] = LANDINGS.map(landingPath);

export const canonicalUrl = (path: string) => `${SITE.url}${path === "/" ? "/" : path}`;
