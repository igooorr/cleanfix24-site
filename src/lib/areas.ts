export interface Area {
  slug: string;
  name: string;
  county: "Somerset" | "Devon";
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
    county: "Somerset",
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
    county: "Somerset",
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
  {
    slug: "bridgwater",
    name: "Bridgwater",
    county: "Somerset",
    intro: [
      "Cleanfix24 travels from Taunton to Bridgwater and the villages along the M5 for house cleaning, end of tenancy cleans and sofa, mattress and patio cleaning.",
      "Bridgwater has a busy rental market, so we work a lot with tenants, landlords and letting agents who need a property ready for inspection or the next tenant — with a fixed price agreed before we start.",
    ],
    nearby: ["North Petherton", "Durleigh", "Wembdon", "Cannington", "Puriton", "Woolavington", "Bawdrip", "Chilton Trinity", "Westonzoyland", "Huntworth"],
    featured: ["end-of-tenancy-cleaning", "deep-cleaning", "after-builders-cleaning", "upholstery-cleaning", "patio-cleaning", "regular-cleaning"],
    metaTitle: "Cleaners in Bridgwater & North Petherton | Cleanfix24",
    metaDescription:
      "Family-run cleaning in Bridgwater and North Petherton: end of tenancy, deep cleans, after builders, sofa and patio cleaning. Fixed-price quotes.",
  },
  {
    slug: "wiveliscombe",
    name: "Wiveliscombe",
    county: "Somerset",
    intro: [
      "Wiveliscombe and the villages towards the Brendon Hills are only a short drive from our base in Wellington, so we can offer regular cleaning on a fixed day as well as one-off cleans.",
      "Many homes here are older stone cottages and farmhouses, and many are holiday lets near Exmoor — we clean between guests, wash the linen, and treat the damp and mould that older properties are prone to.",
    ],
    nearby: ["Milverton", "Langford Budville", "Fitzhead", "Chipstable", "Huish Champflower", "Waterrow", "Brompton Ralph", "Clatworthy", "Ashbrittle", "Bathealton"],
    featured: ["regular-cleaning", "holiday-let-cleaning", "deep-cleaning", "mould-removal", "garden-maintenance", "laundry-ironing-service"],
    metaTitle: "Cleaners in Wiveliscombe & Milverton | Cleanfix24",
    metaDescription:
      "Local family cleaners for Wiveliscombe, Milverton and nearby villages: regular house cleaning, holiday let changeovers, deep cleans and mould removal.",
  },
  {
    slug: "tiverton",
    name: "Tiverton",
    county: "Devon",
    intro: [
      "We cross the border from Wellington to Tiverton and the Exe Valley for house cleaning, end of tenancy cleans and sofa, mattress and car interior cleaning.",
      "Whether you're moving out of a rental, getting a house ready to sell or simply want a reliable cleaner on a regular day, you'll deal directly with the owners and get a clear price first.",
    ],
    nearby: ["Bampton", "Sampford Peverell", "Halberton", "Willand", "Bickleigh", "Washfield", "Chevithorne", "Uplowman", "Calverleigh", "Cove"],
    featured: ["end-of-tenancy-cleaning", "regular-cleaning", "deep-cleaning", "upholstery-cleaning", "mattress-cleaning", "car-interior-detailing"],
    metaTitle: "Cleaners in Tiverton, Mid Devon | Cleanfix24",
    metaDescription:
      "Family-run cleaners serving Tiverton, Bampton and Sampford Peverell: house cleaning, end of tenancy, deep cleans, sofa and mattress cleaning.",
  },
  {
    slug: "cullompton",
    name: "Cullompton",
    county: "Devon",
    intro: [
      "Cullompton, Uffculme and the Culm Valley villages are just down the road from our base in Wellington, which makes regular visits and short-notice cleans easy to arrange.",
      "We clean family homes, new-build houses, rentals and holiday lets — including after builders cleans on new developments and patio and garden tidy-ups in the spring and summer.",
    ],
    nearby: ["Uffculme", "Willand", "Culmstock", "Hemyock", "Kentisbeare", "Bradninch", "Plymtree", "Craddock", "Clayhidon", "Hele"],
    featured: ["regular-cleaning", "after-builders-cleaning", "end-of-tenancy-cleaning", "patio-cleaning", "upholstery-cleaning", "garden-maintenance"],
    metaTitle: "Cleaners in Cullompton & Uffculme | Cleanfix24",
    metaDescription:
      "Local family cleaners for Cullompton, Uffculme, Willand and the Culm Valley: house cleaning, after builders, end of tenancy, sofa and patio cleaning.",
  },
];

export const areaPath = (a: Area) => `/areas/${a.slug}`;
export const getArea = (slug: string | undefined) => AREAS.find((a) => a.slug === slug);
