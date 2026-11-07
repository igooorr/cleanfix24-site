export interface Area {
  slug: string;
  name: string;
  intro: string[];
  nearby: string[];
  /** Service slugs to highlight on the page. */
  featured: string[];
  metaTitle: string;
  metaDescription: string;
}

export const AREAS: Area[] = [
  {
    slug: "wellington",
    name: "Wellington",
    intro: [
      "Cleanfix24 is a family-run cleaning business based in Wellington, Somerset. We look after homes, rentals, holiday lets and small businesses across the town and the surrounding villages.",
      "Because we're local, we can offer flexible times, regular visits by the same friendly team, and quick help when you need a one-off clean — from a move-out clean to a fresh-looking sofa before guests arrive.",
    ],
    nearby: [
      "Rockwell Green",
      "Tonedale",
      "Westford",
      "West Buckland",
      "Sampford Arundel",
      "Langford Budville",
      "Nynehead",
      "Milverton",
      "Bradford-on-Tone",
      "Culmstock",
      "Hemyock",
      "Burlescombe",
    ],
    featured: [
      "regular-cleaning",
      "end-of-tenancy-cleaning",
      "upholstery-cleaning",
      "holiday-let-cleaning",
      "laundry-ironing-service",
      "garden-maintenance",
    ],
    metaTitle: "Cleaning Services in Wellington, Somerset | Cleanfix24",
    metaDescription:
      "Local, family-run cleaning in Wellington, Somerset: house cleaning, end of tenancy, sofa & mattress cleaning, holiday lets, laundry collection and garden jobs.",
  },
  {
    slug: "taunton",
    name: "Taunton",
    intro: [
      "We provide professional, family-run cleaning services across Taunton and the surrounding area — from regular house cleaning and end of tenancy cleans to sofa, mattress and patio cleaning.",
      "Landlords, letting agents, busy families and local businesses in Taunton use us for reliable, thorough cleaning at times that suit them, with free, no-obligation quotes.",
    ],
    nearby: [
      "Bishops Hull",
      "Comeytrowe",
      "Trull",
      "Staplegrove",
      "Norton Fitzwarren",
      "Bishops Lydeard",
      "Kingston St Mary",
      "Monkton Heathfield",
      "Creech St Michael",
      "Ruishton",
      "North Curry",
      "Henlade",
    ],
    featured: [
      "regular-cleaning",
      "deep-cleaning",
      "end-of-tenancy-cleaning",
      "after-builders-cleaning",
      "commercial-event-cleaning",
      "mattress-cleaning",
    ],
    metaTitle: "Cleaning Services in Taunton, Somerset | Cleanfix24",
    metaDescription:
      "Family-run cleaning in Taunton: regular and deep house cleaning, end of tenancy, after builders, commercial cleaning, sofa and mattress cleaning. Free quotes.",
  },
];

export const areaPath = (a: Area) => `/areas/${a.slug}`;
export const getArea = (slug: string | undefined) => AREAS.find((a) => a.slug === slug);
