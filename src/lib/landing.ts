import { getService, type Faq, type Service } from "@/lib/services";

/**
 * Ad landing pages (/quote/<slug>): one focused page per advertised service,
 * with a short quote form above the fold. They are noindex and left out of the
 * sitemap so they don't compete with the main service pages in Google.
 */
export interface Landing {
  slug: string;
  /** Services this page sells; the first one supplies image and icon. */
  serviceSlugs: string[];
  /** Service name sent with the enquiry. */
  serviceName: string;
  eyebrow: string;
  headline: string;
  sub: string;
  /** Short reasons shown as ticks in the hero. */
  points: string[];
  metaTitle: string;
  metaDescription: string;
}

export const LANDINGS: Landing[] = [
  {
    slug: "end-of-tenancy-cleaning",
    serviceSlugs: ["end-of-tenancy-cleaning"],
    serviceName: "End of Tenancy Cleaning",
    eyebrow: "End of tenancy cleaning",
    headline: "Moving out? Get the property inspection-ready",
    sub: "A full move-out clean for tenants, landlords and letting agents in Wellington, Taunton and nearby — kitchen, oven, bathrooms, cupboards and more.",
    points: [
      "Detailed move-out checklist, every room",
      "Oven, hob and extractor included",
      "Add sofa or mattress cleaning in the same visit",
    ],
    metaTitle: "End of Tenancy Cleaning Wellington & Taunton | Free Quote | Cleanfix24",
    metaDescription:
      "Inspection-ready end of tenancy cleaning in Wellington, Taunton & Somerset. Family-run, detailed checklist. Get a free quote in 30 seconds.",
  },
  {
    slug: "regular-cleaning",
    serviceSlugs: ["regular-cleaning"],
    serviceName: "Regular House Cleaning",
    eyebrow: "Regular house cleaning",
    headline: "Come home to a clean house, every week",
    sub: "Weekly, fortnightly or monthly cleaning in Wellington, Taunton and nearby, by the same friendly local family each visit.",
    points: [
      "The same cleaners every visit",
      "We bring all products and equipment",
      "Your checklist, your day and time",
    ],
    metaTitle: "Regular House Cleaner Wellington & Taunton | From £20/hour | Cleanfix24",
    metaDescription:
      "Weekly or fortnightly house cleaning in Wellington & Taunton from £20/hour. Same friendly local cleaners every visit. Free quote in 30 seconds.",
  },
  {
    slug: "sofa-mattress-cleaning",
    serviceSlugs: ["upholstery-cleaning", "mattress-cleaning"],
    serviceName: "Sofa / Mattress Cleaning",
    eyebrow: "Sofa & mattress cleaning",
    headline: "Fresh, clean sofas and mattresses — in your home",
    sub: "Deep hot-water extraction that lifts dirt, stains and odours from sofas, armchairs and mattresses. Serving Wellington, Taunton and nearby.",
    points: [
      "Stains and odours pre-treated",
      "Dry within hours, not days",
      "Send a photo for a quick, clear price",
    ],
    metaTitle: "Sofa & Mattress Cleaning Wellington & Taunton | Free Quote | Cleanfix24",
    metaDescription:
      "Professional sofa, armchair and mattress cleaning at your home in Wellington & Taunton. Stains and odours lifted, fast drying. Free quote.",
  },
  {
    slug: "patio-cleaning",
    serviceSlugs: ["patio-cleaning"],
    serviceName: "Patio Cleaning",
    eyebrow: "Patio cleaning & pressure washing",
    headline: "Green, slippery patio? We'll bring it back",
    sub: "Pressure washing for patios, paths and steps in Wellington, Taunton and nearby — moss, algae, weeds and dirt removed.",
    points: [
      "Slabs, natural stone and block paving",
      "Weeds cleared from the joints",
      "Send a photo for a quick, clear price",
    ],
    metaTitle: "Patio Cleaning & Pressure Washing Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Patio and path pressure washing in Wellington & Taunton. Moss, algae and weeds removed. Family-run, free quote in 30 seconds.",
  },
];

export const landingPath = (l: Landing) => `/quote/${l.slug}`;

export const getLanding = (slug: string | undefined) => LANDINGS.find((l) => l.slug === slug);

/** Services behind a landing page, with features, steps and FAQs merged. */
export function landingContent(l: Landing) {
  const services = l.serviceSlugs.map((s) => getService(s)).filter(Boolean) as Service[];
  const unique = (xs: string[]) => [...new Set(xs)];
  const faqs: Faq[] = services.flatMap((s) => s.faqs);
  return {
    services,
    primary: services[0],
    image: services.find((s) => s.image)?.image,
    priceFrom: services.find((s) => s.priceFrom)?.priceFrom,
    features: unique(services.flatMap((s) => s.features)).slice(0, 9),
    process: services[0].process,
    faqs,
  };
}
