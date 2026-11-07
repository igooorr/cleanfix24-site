import upholsteryImage from "@/assets/upholstery.webp";
import bathroomImage from "@/assets/bathroom.webp";
import kitchenImage from "@/assets/kitchen.webp";
import emptyRoomImage from "@/assets/end-of-tenancy.webp";
import mattressImage from "@/assets/mattress.webp";
import patioImage from "@/assets/patio.webp";
import gBuildersKitchenBefore from "@/assets/gallery/builders-kitchen-before.webp";
import gBuildersKitchenAfter from "@/assets/gallery/builders-kitchen-after.webp";
import gKitchenDinerBefore from "@/assets/gallery/kitchen-diner-before.webp";
import gKitchenDinerAfter from "@/assets/gallery/kitchen-diner-after.webp";
import gKitchenPartyBefore from "@/assets/gallery/kitchen-party-before.webp";
import gKitchenPartyAfter from "@/assets/gallery/kitchen-party-after.webp";
import gBuildersLivingBefore from "@/assets/gallery/builders-living-before.webp";
import gBuildersLivingAfter from "@/assets/gallery/builders-living-after.webp";
import afterBuildersImage from "@/assets/after-builders.webp";
import gOvenBefore from "@/assets/gallery/oven-before.webp";
import gOvenAfter from "@/assets/gallery/oven-after.webp";
import gBuildersBathroomBefore from "@/assets/gallery/builders-bathroom-before.webp";
import gBuildersBathroomAfter from "@/assets/gallery/builders-bathroom-after.webp";
import gBuildersRoomBefore from "@/assets/gallery/builders-room-before.webp";
import gBuildersRoomAfter from "@/assets/gallery/builders-room-after.webp";
import mouldImage from "@/assets/mould.webp";
import carImage from "@/assets/car-interior.webp";
import carSeatBefore from "@/assets/gallery/car-seat-before.webp";
import carSeatAfter from "@/assets/gallery/car-seat-after.webp";
import carHeadlinerBefore from "@/assets/gallery/car-headliner-before.webp";
import carHeadlinerAfter from "@/assets/gallery/car-headliner-after.webp";
import carPillarBefore from "@/assets/gallery/car-pillar-before.webp";
import carPillarAfter from "@/assets/gallery/car-pillar-after.webp";
import type { LucideIcon } from "lucide-react";
import {
  Sofa,
  BedDouble,
  Droplets,
  Home,
  Sparkles,
  KeyRound,
  HardHat,
  UtensilsCrossed,
  Shirt,
  ShieldCheck,
  Car,
  Fence,
  Building2,
  Wrench,
  Leaf,
  BedSingle,
} from "lucide-react";

export type CategoryId = "cleaning" | "upholstery" | "exterior" | "handyman" | "specialist";

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "cleaning",
    title: "Home & Commercial Cleaning",
    subtitle: "Regular, deep and one-off cleans for homes, rentals and businesses",
  },
  {
    id: "upholstery",
    title: "Upholstery, Mattress & Stain Care",
    subtitle: "Soft furniture, mattresses and stubborn stains are our speciality",
  },
  {
    id: "exterior",
    title: "Exterior Cleaning",
    subtitle: "Bring the outside of your home back to life",
  },
  {
    id: "handyman",
    title: "Handyman & Garden",
    subtitle: "Small jobs around the home and garden",
  },
  {
    id: "specialist",
    title: "Specialist Services",
    subtitle: "Mould treatment and car interior valeting",
  },
];

export interface Faq {
  q: string;
  a: string;
}

/** A before/after photo pair from a real Cleanfix24 job. */
export interface GalleryPair {
  before: string;
  after: string;
  caption: string;
}

export interface Service {
  slug: string;
  category: CategoryId;
  title: string;
  /** One or two sentences for cards. */
  short: string;
  /** Paragraphs for the service page. */
  intro: string[];
  icon: LucideIcon;
  image?: string;
  /** Guide "from" price, shown as "From £20/hour". Final price is always quoted first. */
  priceFrom?: string;
  features: string[];
  process: string[];
  faqs: Faq[];
  /** Before/after photos — only real jobs, never stock or internet images. */
  gallery?: GalleryPair[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: Service[] = [
  // ---------- Home & commercial cleaning ----------
  {
    slug: "regular-cleaning",
    category: "cleaning",
    title: "Regular House Cleaning",
    short:
      "Weekly, fortnightly or monthly cleaning by the same trusted team, so your home always stays on top.",
    intro: [
      "Come home to a clean house without giving up your evenings or weekends. We clean weekly, fortnightly or monthly, working to a checklist built around your home and your priorities — kitchen, bathrooms, dusting, floors and the jobs you never get round to.",
      "You get the same friendly faces every visit: Ihor, Ruslana or a member of our small team, who learn how you like things done. We bring all products and equipment, and you can leave us a key so we clean while you're at work.",
      "We clean homes across Wellington and Taunton and the surrounding towns and villages, including Rockwell Green, Milverton, Wiveliscombe, Bishops Lydeard, Norton Fitzwarren, Creech St Michael and over the border in Culmstock, Uffculme and Cullompton.",
    ],
    icon: Home,
    image: bathroomImage,
    priceFrom: "£20/hour",
    features: [
      "Weekly, fortnightly or monthly visits",
      "Kitchens: worktops, hob, sink, appliance fronts",
      "Bathrooms: toilet, bath, shower, basin, tiles",
      "Dusting, vacuuming and mopping throughout",
      "Bins emptied and beds made on request",
      "Flexible checklist tailored to your home",
    ],
    process: [
      "Tell us about your home and how often you'd like a clean",
      "We agree a checklist and a regular day and time",
      "The same team arrives with all products and equipment",
      "You come home to a clean house — every time",
    ],
    faqs: [
      {
        q: "How much does a regular cleaner cost?",
        a: "Our regular cleaning starts from £20 per hour. Most homes need 2–3 hours per visit; we'll suggest the right time after a quick chat or a look at your home, so you know the cost before we start.",
      },
      {
        q: "Is there a minimum visit length?",
        a: "We usually book a minimum of 2 hours per visit so there's enough time to make a real difference.",
      },
      {
        q: "Do I need to provide cleaning products?",
        a: "No, we bring our own products and equipment. If you prefer us to use specific products, just let us know.",
      },
      {
        q: "Do I need to be at home?",
        a: "Not at all. Many clients give us a key or a door code so we can clean while they're out.",
      },
    ],
    gallery: [
      { before: gKitchenDinerBefore, after: gKitchenDinerAfter, caption: "Kitchen-diner: tidied and cleaned" },
    ],
    metaTitle: "Regular House Cleaning in Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Weekly or fortnightly house cleaning in Wellington, Taunton & nearby villages from £20/hour. Same friendly local cleaners every visit. Free quote.",
  },
  {
    slug: "deep-cleaning",
    category: "cleaning",
    title: "Deep Cleaning",
    short:
      "A thorough top-to-bottom spring clean that reaches the places everyday cleaning misses.",
    intro: [
      "A deep clean is a top-to-bottom reset for your home. We go inside, behind and underneath: skirting boards, door frames, light switches, kitchen cupboards, the oven, limescale on taps and tiles, and the grease and dust that everyday cleaning leaves behind.",
      "It's ideal for a spring clean, before guests or a family celebration, after illness, before putting a house on the market, or as a first visit before regular cleaning starts.",
      "We carry out deep cleans in Wellington, Taunton, Bridgwater, Wiveliscombe, Ilminster, Langport and the villages in between, as well as Tiverton and Cullompton in Mid Devon.",
    ],
    icon: Sparkles,
    image: kitchenImage,
    priceFrom: "£22/hour",
    features: [
      "Kitchen degreasing, inside oven & microwave",
      "Limescale removal in bathrooms",
      "Skirting boards, doors, frames & switches",
      "Inside cupboards and drawers",
      "Behind and under furniture where possible",
      "Interior windows, sills and mirrors",
    ],
    process: [
      "Send us photos or tell us about the property",
      "We give you a clear, fixed quote",
      "Our team carries out a room-by-room deep clean",
      "We walk round with you to make sure you're happy",
    ],
    faqs: [
      {
        q: "How much does a deep clean cost?",
        a: "Deep cleaning starts from £22 per hour. A typical 2–3 bedroom house takes one or two of us 5–8 hours depending on its condition. Send us a few photos and we'll give you a clear fixed quote.",
      },
      {
        q: "Is oven cleaning included?",
        a: "Yes — the oven, hob and extractor are part of our deep clean.",
      },
      {
        q: "How long does a deep clean take?",
        a: "It depends on the size and condition of the property. Most homes take between half a day and a full day.",
      },
      {
        q: "Can I combine a deep clean with sofa or mattress cleaning?",
        a: "Yes — many clients add upholstery or mattress cleaning to their deep clean for a complete refresh.",
      },
    ],
    gallery: [
      { before: gOvenBefore, after: gOvenAfter, caption: "Oven door: grease and smears removed" },
      { before: gKitchenPartyBefore, after: gKitchenPartyAfter, caption: "Kitchen after a party: spills and rubbish cleared" },
    ],
    metaTitle: "Deep Cleaning & Spring Cleaning in Somerset | Cleanfix24",
    metaDescription:
      "Deep cleaning and spring cleans in Wellington, Taunton & Somerset from £22/hour: kitchens, ovens, bathrooms, skirting and limescale. Free quote.",
  },
  {
    slug: "end-of-tenancy-cleaning",
    category: "cleaning",
    title: "End of Tenancy Cleaning",
    short:
      "Move-out cleaning for tenants, landlords and letting agents — ready for inspection and the next tenant.",
    intro: [
      "Moving out is stressful enough without worrying about the deposit. Our end of tenancy clean gets the property ready for the check-out inspection, using a detailed room-by-room checklist that matches what letting agents look for.",
      "We clean the oven, hob and extractor, descale bathrooms, wipe inside every cupboard and drawer, clean skirting boards, doors, switches and interior windows, and finish the floors. Sofa, mattress and carpet-area spot cleaning can be added in the same visit.",
      "We work for tenants, landlords and letting agents in Taunton, Wellington, Bridgwater, Tiverton, Cullompton, Chard, Ilminster and the surrounding villages, and can arrange key collection with your agent.",
    ],
    icon: KeyRound,
    priceFrom: "£160",
    image: emptyRoomImage,
    features: [
      "Full kitchen clean incl. oven, hob & extractor",
      "Bathrooms descaled and sanitised",
      "Inside all cupboards, drawers and wardrobes",
      "Skirting boards, doors, sockets & switches",
      "Interior windows and sills",
      "Add-on: sofa and mattress cleaning",
    ],
    process: [
      "Book your clean for after you've moved your belongings out",
      "We clean the property using a full move-out checklist",
      "You check the result before you hand back the keys",
    ],
    faqs: [
      {
        q: "How much does an end of tenancy clean cost?",
        a: "Prices start from £160 for a one-bedroom flat. Larger homes and properties that need extra attention cost more — send us the number of bedrooms and a few photos and we'll give you a fixed price.",
      },
      {
        q: "How long does it take?",
        a: "Most flats take 4–6 hours and family houses a full day. We often send two people to finish faster.",
      },
      {
        q: "Do you work with landlords and letting agents?",
        a: "Yes. We clean between tenancies and can arrange key collection with agents.",
      },
      {
        q: "Should the property be empty?",
        a: "Ideally yes — an empty property lets us reach every area and gives the best result.",
      },
    ],
    gallery: [
      { before: gOvenBefore, after: gOvenAfter, caption: "Oven door: grease and smears removed" },
      { before: gKitchenPartyBefore, after: gKitchenPartyAfter, caption: "Kitchen: spills and rubbish cleared" },
      { before: gKitchenDinerBefore, after: gKitchenDinerAfter, caption: "Kitchen-diner: cleared and cleaned" },
    ],
    metaTitle: "End of Tenancy Cleaning Wellington & Taunton | Cleanfix24",
    metaDescription:
      "End of tenancy cleaning in Taunton, Wellington & nearby from £160. Detailed checklist for tenants, landlords and agents. Fixed-price quote.",
  },
  {
    slug: "after-builders-cleaning",
    category: "cleaning",
    title: "After Builders Cleaning",
    short:
      "Post-construction and renovation cleaning that removes fine dust, paint splashes and debris.",
    intro: [
      "Building work leaves fine dust everywhere — on every surface, inside cupboards, on window frames, light fittings and floors — and it keeps coming back if it isn't removed properly. Our after builders clean gets your home or premises ready to live in or hand over.",
      "We vacuum and wipe down every surface top to bottom, clean windows and frames, remove paint and plaster splashes where it's safe to do so, clean new kitchens and bathrooms, and leave floors spotless.",
      "We clean after extensions, renovations and new builds in Taunton, Wellington, Bridgwater, North Petherton, Wiveliscombe, Tiverton and the surrounding area, for homeowners, builders and developers.",
    ],
    icon: HardHat,
    priceFrom: "£22/hour",
    image: afterBuildersImage,
    features: [
      "Fine dust removal from all surfaces",
      "Paint, plaster and adhesive marks",
      "Windows, frames and sills",
      "Kitchens and bathrooms cleaned & polished",
      "Floors vacuumed and washed",
      "Suitable for homes and commercial premises",
    ],
    process: [
      "Let us know what work was done and send a few photos",
      "We quote and schedule the clean after the trades finish",
      "We remove dust, residue and marks room by room",
      "Your space is ready to move in or open",
    ],
    faqs: [
      {
        q: "How much does an after builders clean cost?",
        a: "After builders cleaning starts from £22 per hour. The time depends on the size of the property and how much dust is left — send us photos and we'll give you a fixed quote.",
      },
      {
        q: "When should I book it?",
        a: "Once the trades have finished and the property is safe to work in — ideally after the last coat of paint is dry.",
      },
      {
        q: "Do you remove building rubbish?",
        a: "We clean the property; heavy building waste should be removed by the builders before we start.",
      },
    ],
    gallery: [
      { before: gBuildersBathroomBefore, after: gBuildersBathroomAfter, caption: "Washroom: tile adhesive haze and debris cleared" },
      { before: gBuildersRoomBefore, after: gBuildersRoomAfter, caption: "Room: rubble removed and floor cleaned" },
      { before: gBuildersKitchenBefore, after: gBuildersKitchenAfter, caption: "New kitchen: dust and offcuts removed" },
      { before: gBuildersLivingBefore, after: gBuildersLivingAfter, caption: "Living room: building mess cleared, floor cleaned" },
    ],
    metaTitle: "After Builders Cleaning in Somerset & Devon | Cleanfix24",
    metaDescription:
      "After builders and post-renovation cleaning in Taunton, Wellington & Somerset from £22/hour. Dust, paint splashes and new kitchens cleaned.",
  },
  {
    slug: "commercial-event-cleaning",
    category: "cleaning",
    title: "Commercial & After-Event Cleaning",
    short:
      "Cleaning for cafés, restaurants, offices and venues — including after banquets, parties and events.",
    intro: [
      "We help local businesses stay clean and welcoming — small offices, shops, salons, cafés, village halls and holiday parks — with regular cleaning or one-off visits.",
      "After a wedding, party, banquet or community event we take care of tables, chairs, floors, kitchens and toilets so the venue is ready again, often first thing the next morning. We can work early mornings, evenings and weekends.",
      "We cover businesses and venues in Taunton, Wellington, Bridgwater, Wiveliscombe, Langport, Ilminster and the villages across Somerset and Mid Devon.",
    ],
    icon: UtensilsCrossed,
    priceFrom: "£22/hour",
    features: [
      "After banquets, parties and private events",
      "Cafés, restaurants, pubs and halls",
      "Small offices and shops",
      "Kitchen and toilet cleaning",
      "Floors, tables and chairs",
      "Early morning or late evening slots",
    ],
    process: [
      "Tell us about your venue and the date of the event",
      "We agree a time that doesn't disrupt your business",
      "Our team cleans the venue top to bottom",
      "You're ready to open again on time",
    ],
    faqs: [
      {
        q: "How much does commercial cleaning cost?",
        a: "Commercial and event cleaning starts from £22 per hour. For regular contracts we agree a fixed monthly price after a short visit to your premises.",
      },
      {
        q: "Can you clean outside opening hours?",
        a: "Yes, we can work early mornings, evenings or straight after your event.",
      },
      {
        q: "Do you offer regular contracts for businesses?",
        a: "Yes, we offer regular cleaning for small businesses — contact us for a quote.",
      },
    ],
    metaTitle: "Commercial & After-Event Cleaning Somerset | Cleanfix24",
    metaDescription:
      "Office, shop and after-event cleaning in Taunton, Wellington & Somerset from £22/hour. Early, late and weekend cleans. Free quote.",
  },
  {
    slug: "holiday-let-cleaning",
    category: "cleaning",
    title: "Holiday Let & Airbnb Cleaning",
    short:
      "Changeover cleaning for holiday cottages and Airbnbs — guest-ready on time, with fresh linen and towels.",
    intro: [
      "Great reviews start with a spotless property. We turn your holiday let or Airbnb around between guests: a full clean, beds made with fresh linen, towels laid out and the small touches that make guests feel welcome.",
      "Combine changeovers with our laundry service and we'll take care of bed linen and towels too. After each visit we can send photos and let you know about breakages, low supplies or anything that needs attention.",
      "We look after holiday lets in and around Wellington, Taunton, Wiveliscombe, Dulverton, Williton, Watchet and the edge of Exmoor, as well as Mid Devon villages around Tiverton and Bampton.",
    ],
    icon: BedSingle,
    priceFrom: "£45 per changeover",
    image: bathroomImage,
    features: [
      "Full clean between guests",
      "Beds made with fresh linen",
      "Towels and welcome touches laid out",
      "Kitchen and bathroom restocked (your supplies)",
      "Linen and towel laundry available",
      "Photo report and issue alerts after each visit",
    ],
    process: [
      "Share your booking calendar and access details with us",
      "We clean and prepare the property after each checkout",
      "Linen and towels are changed and laundered",
      "You get a photo report — the property is guest-ready",
    ],
    faqs: [
      {
        q: "How much does a holiday let changeover cost?",
        a: "Changeovers start from £45 for a small one-bedroom property. Larger homes and linen service are priced per property — tell us the number of bedrooms and we'll send a fixed price.",
      },
      {
        q: "Can you do same-day changeovers?",
        a: "Yes, we can clean between a morning checkout and an afternoon check-in — just let us know your usual times.",
      },
      {
        q: "Do you provide the linen?",
        a: "We wash, dry and iron your own linen and towels through our laundry collection service.",
      },
    ],
    metaTitle: "Holiday Let & Airbnb Cleaning Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Holiday let and Airbnb changeover cleaning near Wellington, Taunton & Exmoor from £45. Linen, photos after each visit. Free quote.",
  },
  {
    slug: "laundry-ironing-service",
    category: "cleaning",
    title: "Laundry & Ironing Collection",
    short:
      "We collect your laundry, take it to be washed, ironed and folded, then bring it back ready to wear.",
    intro: [
      "Get your evenings back. We collect your laundry from your door, have it washed, dried, ironed and folded, and deliver it back ready to put away.",
      "It's ideal for busy families, professionals, older clients and holiday lets. We can collect on a regular day each week or as a one-off, and return clothes hung or folded — just tell us your preference.",
      "Collection and delivery is available in Wellington, Taunton, Rockwell Green, Milverton, Bishops Lydeard, Norton Fitzwarren and nearby villages. Ask us about other areas.",
    ],
    icon: Shirt,
    priceFrom: "£18 per bag",
    features: [
      "Collection from your door",
      "Washing and drying",
      "Ironing and folding",
      "Delivered back ready to wear",
      "Regular weekly or one-off collections",
      "Bedding and towels for holiday lets",
    ],
    process: [
      "Book a collection day that suits you",
      "We pick up your laundry",
      "Your items are washed, dried, ironed and folded",
      "We deliver everything back to your door",
    ],
    faqs: [
      {
        q: "How much does the laundry service cost?",
        a: "Wash, dry and fold starts from £18 per standard bag. Ironing is priced per item or per bag — ask us for the current price list.",
      },
      {
        q: "How often can you collect?",
        a: "As often as you need — weekly, fortnightly or one-off collections.",
      },
      {
        q: "Which areas do you cover?",
        a: "Wellington, Taunton and the surrounding area. Contact us to check your address.",
      },
    ],
    metaTitle: "Laundry & Ironing Collection Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Laundry and ironing collection in Wellington, Taunton & nearby villages from £18 per bag. Collected, washed, ironed and delivered back.",
  },

  // ---------- Upholstery & stains ----------
  {
    slug: "upholstery-cleaning",
    category: "upholstery",
    title: "Sofa & Upholstery Cleaning",
    short:
      "Deep extraction cleaning for sofas, armchairs and soft furniture — lifting dirt, stains and odours.",
    intro: [
      "Your sofa collects everyday dirt, body oils, spills, pet hair and odours that a vacuum can't reach. We use professional hot-water extraction to clean deep inside the fabric and rinse the dirt away — in your own home.",
      "We check the fabric and its care label first, pre-treat stains and heavy areas, then extract. The result is fresher, brighter furniture that's usually dry within a few hours.",
      "We clean sofas, armchairs and dining chairs across Taunton, Wellington, Bridgwater, Tiverton, Cullompton, Wiveliscombe, Chard and the surrounding villages.",
    ],
    icon: Sofa,
    priceFrom: "£50",
    image: upholsteryImage,
    features: [
      "Sofas, corner sofas & sofa beds",
      "Armchairs & recliners",
      "Dining chairs & headboards",
      "Fabric check and spot test",
      "Stain pre-treatment",
      "Odour neutralising & fast drying",
    ],
    process: [
      "Send us a photo of your furniture and any stains",
      "We check the fabric and pre-treat stains",
      "Deep hot-water extraction cleaning",
      "Furniture left fresh and drying quickly",
    ],
    faqs: [
      {
        q: "How much does sofa cleaning cost?",
        a: "Prices start from £50 for a two-seater sofa or two armchairs. Three-seaters, corner sofas and heavy staining cost more — send us a photo on WhatsApp for a quick, clear price.",
      },
      {
        q: "How long does it take to dry?",
        a: "Usually between 4 and 8 hours depending on the fabric and ventilation.",
      },
      {
        q: "Can you clean leather?",
        a: "Please contact us with a photo — we'll tell you what we can do for your furniture.",
      },
    ],
    metaTitle: "Sofa & Upholstery Cleaning Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Sofa and upholstery cleaning at home in Taunton, Wellington & nearby from £50. Hot-water extraction, stains and odours lifted, fast drying.",
  },
  {
    slug: "mattress-cleaning",
    category: "upholstery",
    title: "Mattress Cleaning",
    short:
      "Remove stains, sweat, dust mites and odours from your mattress for a fresher, healthier sleep.",
    intro: [
      "We spend a third of our lives in bed, and mattresses soak up sweat, skin cells, dust mites and the occasional accident. Turning or covering a mattress doesn't remove what's inside.",
      "Our mattress cleaning combines a thorough vacuum, stain and odour pre-treatment and deep hot-water extraction to lift stains, freshen the mattress and reduce allergens.",
      "We clean mattresses for families, landlords and holiday lets in Wellington, Taunton, Bridgwater, Tiverton, Cullompton and the villages around them.",
    ],
    icon: BedDouble,
    priceFrom: "£35",
    image: mattressImage,
    features: [
      "Single, double, king and super king",
      "Sweat and urine stain removal",
      "Dust mite and allergen reduction",
      "Odour neutralising",
      "Children's and cot mattresses",
      "Great for holiday lets and rentals",
    ],
    process: [
      "Thorough vacuum of the mattress surface",
      "Stain and odour pre-treatment",
      "Deep extraction cleaning",
      "Mattress left to air dry",
    ],
    faqs: [
      {
        q: "How much does mattress cleaning cost?",
        a: "From £35 for a single mattress. Doubles, kings and both sides cost a little more — and there's a discount when you book several mattresses or add a sofa.",
      },
      {
        q: "When can I sleep on it again?",
        a: "We recommend leaving it to dry for a few hours — usually it's ready by the evening.",
      },
      {
        q: "Will all stains come out?",
        a: "Most stains improve significantly. Very old stains may fade rather than disappear completely — we'll be honest with you beforehand.",
      },
    ],
    metaTitle: "Mattress Cleaning in Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Mattress cleaning in Wellington, Taunton & Somerset from £35. Removes stains, sweat, dust mites and odours. Ideal for homes and holiday lets.",
  },
  {
    slug: "stain-removal",
    category: "upholstery",
    title: "Stain Removal",
    short:
      "Specialist treatment for stubborn stains on upholstery and mattresses — food, drink, pets, blood and more.",
    intro: [
      "Different stains need different treatments. Coffee, red wine, blood, make-up, ink and pet accidents all react differently — and the wrong product can set a stain for good.",
      "We identify the stain and the fabric, choose the right treatment, and remove it as safely and completely as possible from sofas, chairs, mattresses and rugs.",
      "We treat stains in homes across Taunton, Wellington and the surrounding towns and villages, often on the same visit as a sofa or mattress clean.",
    ],
    icon: Droplets,
    priceFrom: "£30",
    image: upholsteryImage,
    features: [
      "Coffee, tea and red wine",
      "Food, grease and sauce",
      "Pet stains and odours",
      "Blood and sweat",
      "Make-up and ink marks",
      "Water marks and rings",
    ],
    process: [
      "Send us a photo and tell us what the stain is",
      "We identify the stain and fabric type",
      "Targeted treatment and extraction",
      "Area rinsed and left to dry",
    ],
    faqs: [
      {
        q: "How much does stain removal cost?",
        a: "Spot stain removal starts from £30. If the whole piece of furniture needs cleaning, we'll price it as a sofa or mattress clean instead.",
      },
      {
        q: "What should I do straight after a spill?",
        a: "Blot (don't rub) with a clean white cloth and avoid household chemicals — then contact us as soon as possible.",
      },
    ],
    metaTitle: "Stain Removal for Sofas & Mattresses Somerset | Cleanfix24",
    metaDescription:
      "Professional stain removal for sofas, mattresses and rugs in Taunton, Wellington & Somerset from £30. Wine, coffee, pet and make-up stains.",
  },

  // ---------- Exterior ----------
  {
    slug: "patio-cleaning",
    category: "exterior",
    title: "Patio Cleaning",
    short:
      "Pressure washing for patios and paths — removing moss, algae, weeds and built-up dirt.",
    intro: [
      "Over time patios turn green and slippery with moss, algae and dirt. Our pressure washing brings slabs, natural stone and block paving back to their original colour and makes them safer to walk on.",
      "We clear weeds from the joints, wash the whole surface and rinse everything away, leaving your outdoor space ready to enjoy. Paths, steps and small driveways can be done at the same time.",
      "We clean patios in Wellington, Taunton, Bridgwater, Wiveliscombe, Milverton, Ilminster, Langport, Tiverton, Cullompton and the villages in between.",
    ],
    icon: Fence,
    priceFrom: "£80",
    image: patioImage,
    features: [
      "Pressure washing",
      "Moss and algae removal",
      "Weeds cleared from joints",
      "Slabs, natural stone and block paving",
      "Garden paths and steps",
      "Safer, non-slip surfaces",
    ],
    process: [
      "Send us a photo and the approximate size of the area",
      "We clear loose debris and weeds",
      "Pressure wash the whole surface",
      "Final rinse and tidy up",
    ],
    faqs: [
      {
        q: "How much does patio cleaning cost?",
        a: "Patio cleaning starts from £80 for a small patio, and is usually about £3 per square metre for larger areas. Send us a photo and the rough size for a fixed price.",
      },
      {
        q: "Do you need water and power?",
        a: "Yes, we need access to an outside tap and a power socket.",
      },
      {
        q: "Do you clean roofs or gutters?",
        a: "No — we don't do any work at height, so roof and gutter cleaning aren't part of our services.",
      },
    ],
    metaTitle: "Patio Cleaning & Pressure Washing Wellington & Taunton",
    metaDescription:
      "Patio cleaning and pressure washing in Wellington, Taunton & Somerset from £80. Moss, algae and weeds removed from slabs, stone and paving.",
  },
  {
    slug: "exterior-wall-cleaning",
    category: "exterior",
    title: "Exterior Wall Cleaning",
    short:
      "Cleaning the outside walls of your home — removing green algae, dirt and staining.",
    intro: [
      "Green algae, black streaks and dirt make a house look older than it is. We clean exterior walls to refresh your home's appearance without repainting.",
      "We choose the right method for your wall — gentle low-pressure washing for render and painted surfaces, pressure washing for brick and stone — and work only from ground level for safety.",
      "We clean walls on houses and bungalows in Taunton, Wellington, Bridgwater, Tiverton and the surrounding towns and villages.",
    ],
    icon: Building2,
    priceFrom: "£120",
    image: patioImage,
    features: [
      "Render and painted walls",
      "Brick and stone walls",
      "Green algae and dirt removal",
      "Garden walls and fences",
      "Method matched to the surface",
    ],
    process: [
      "Send us photos of the walls",
      "We recommend the right cleaning method",
      "Walls cleaned and rinsed",
      "Surrounding area tidied",
    ],
    faqs: [
      {
        q: "How much does wall cleaning cost?",
        a: "Exterior wall cleaning starts from £120 for a small area. Every house is different, so send us photos for a fixed quote.",
      },
      {
        q: "How high can you clean?",
        a: "We clean walls that can be reached safely from ground level. Send a photo and we'll confirm.",
      },
    ],
    metaTitle: "Exterior Wall & Render Cleaning Somerset | Cleanfix24",
    metaDescription:
      "Exterior wall and render cleaning in Taunton, Wellington & Somerset from £120. Algae and black streaks removed from ground level.",
  },

  // ---------- Handyman & garden ----------
  {
    slug: "handyman-services",
    category: "handyman",
    title: "Handyman Services",
    short:
      "Furniture assembly, small repairs and odd jobs around the house — the little things on your to-do list.",
    intro: [
      "Every home has a list of small jobs that never get done. We take care of them — assembling flat-pack furniture, putting up shelves, curtain rails and pictures, fixing loose handles, sealing around baths and small repairs.",
      "It's a handy add-on to a clean, too: ideal for landlords between tenancies, people moving home, or anyone who simply doesn't have the time.",
      "We do handyman jobs around Wellington, Taunton, Milverton, Wiveliscombe, Bishops Lydeard, Norton Fitzwarren and nearby villages.",
    ],
    icon: Wrench,
    priceFrom: "£30/hour",
    features: [
      "Flat-pack furniture assembly",
      "Small repairs around the home",
      "Shelves, pictures, mirrors and curtain rails",
      "Door handles, hinges and cupboard doors",
      "Bathroom and kitchen sealant renewal",
      "Odd jobs for landlords and tenants",
    ],
    process: [
      "Send us your list of jobs (photos help)",
      "We give you a quote and agree a time",
      "We complete the jobs and tidy up after ourselves",
    ],
    faqs: [
      {
        q: "How much does a handyman cost?",
        a: "From £30 per hour, with a one-hour minimum. Send us a list of jobs and we'll tell you roughly how long they'll take.",
      },
      {
        q: "Do you do work at height, such as gutters or roofs?",
        a: "No — we only take on jobs that can be done safely from the ground or a small step.",
      },
      {
        q: "Can you combine handyman jobs with a clean?",
        a: "Yes, many clients book small repairs alongside an end of tenancy or deep clean.",
      },
    ],
    metaTitle: "Handyman Services Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Handyman services in Wellington, Taunton & nearby villages from £30/hour: flat-pack assembly, shelves, curtain rails and small repairs.",
  },
  {
    slug: "garden-maintenance",
    category: "handyman",
    title: "Garden Maintenance",
    short:
      "Lawn mowing, hedge and shrub trimming, weeding and garden tidy-ups — one-off or regular.",
    intro: [
      "Keep your garden neat without spending your weekends on it. We mow lawns, trim hedges and shrubs, pull weeds, clear leaves and give overgrown gardens a proper tidy-up.",
      "Book a one-off visit — for example before selling or letting a property — or regular visits through the growing season. We take the green waste away on request.",
      "We look after gardens in Wellington, Taunton, Rockwell Green, Milverton, Bishops Lydeard, Trull, Creech St Michael and nearby villages.",
    ],
    icon: Leaf,
    priceFrom: "£25/hour",
    features: [
      "Lawn mowing and edging",
      "Hedge and shrub trimming (ground level)",
      "Weeding of beds and borders",
      "Leaf clearing",
      "Overgrown garden tidy-ups",
      "One-off or regular visits",
    ],
    process: [
      "Send us a few photos of the garden",
      "We quote for a one-off visit or regular care",
      "We cut, trim, weed and tidy",
      "Your garden is left neat and ready to enjoy",
    ],
    faqs: [
      {
        q: "How much does garden maintenance cost?",
        a: "From £25 per hour. Regular lawn mowing for an average garden is usually a fixed price per visit — tell us the size and we'll quote.",
      },
      {
        q: "How often should my lawn be mowed?",
        a: "During spring and summer most lawns look best mowed every one to two weeks.",
      },
      {
        q: "Can you cut tall hedges?",
        a: "We trim hedges and shrubs that can be reached safely from the ground — we don't do work at height.",
      },
    ],
    metaTitle: "Garden Maintenance & Lawn Mowing Wellington & Taunton",
    metaDescription:
      "Garden maintenance in Wellington, Taunton & nearby from £25/hour: lawn mowing, hedge trimming, weeding and garden tidy-ups.",
  },

  // ---------- Specialist ----------
  {
    slug: "mould-removal",
    category: "specialist",
    title: "Mould Removal",
    short:
      "Safe mould treatment for bathrooms, window frames and damp areas, plus advice to stop it returning.",
    intro: [
      "Black mould is unsightly and can affect your health. We treat mould on walls, ceilings, sealant and window frames using suitable products and safe methods.",
      "We also give practical advice on ventilation and condensation to help stop it coming back — something many older Somerset homes and rentals struggle with in winter.",
      "We treat mould in homes and rental properties across Taunton, Wellington, Bridgwater, Tiverton and the surrounding area.",
    ],
    icon: ShieldCheck,
    priceFrom: "£60",
    image: mouldImage,
    features: [
      "Bathroom and shower mould",
      "Window frames and sealant",
      "Walls and ceilings",
      "Surface sanitising",
      "Prevention advice",
    ],
    process: [
      "We inspect the affected areas",
      "Mould is treated and removed",
      "Surfaces are cleaned and sanitised",
      "We advise on preventing regrowth",
    ],
    faqs: [
      {
        q: "How much does mould removal cost?",
        a: "From £60 for a small area such as a bathroom ceiling or window reveals. Larger areas are quoted from photos.",
      },
      {
        q: "Will the mould come back?",
        a: "Mould returns if the cause (usually condensation or damp) remains. We'll advise you on ventilation and prevention.",
      },
    ],
    metaTitle: "Mould Removal Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Mould removal in Taunton, Wellington & Somerset from £60. Bathrooms, walls, ceilings and window frames, plus advice on stopping it returning.",
  },
  {
    slug: "car-interior-detailing",
    category: "specialist",
    title: "Car Interior Detailing",
    short:
      "Interior valeting for cars, vans and caravans — seats, mats, dashboard and every corner in between.",
    intro: [
      "We use the same extraction equipment we use on sofas to deep clean car seats, carpets and mats, lifting stains, spills and odours that a quick hoover can't touch.",
      "Every surface is cleaned, from the dashboard and console to door pockets, cup holders, headlining marks and the boot — perfect before selling a car, after a family holiday or for a car that carries dogs.",
      "We come to you in Wellington, Taunton, Bridgwater, Tiverton, Cullompton and nearby villages — all we need is a power socket nearby.",
    ],
    icon: Car,
    priceFrom: "£45",
    image: carImage,
    features: [
      "Seat and fabric extraction",
      "Deep vacuum of seats and mats",
      "Dashboard, console and door panels",
      "Stain and odour removal",
      "Cars, vans and caravans",
    ],
    process: [
      "Thorough vacuum of the interior",
      "Seats and fabrics pre-treated and extracted",
      "Hard surfaces cleaned and detailed",
      "Final check and fresh finish",
    ],
    faqs: [
      {
        q: "How much does a car interior valet cost?",
        a: "From £45 for a small car. Larger cars, 7-seaters and vans, or heavily soiled interiors, cost more — send a photo for a quick price.",
      },
      {
        q: "Can you come to me?",
        a: "Yes, we can clean your vehicle at your home. We'll need a power socket nearby.",
      },
    ],
    gallery: [
      { before: carSeatBefore, after: carSeatAfter, caption: "Fabric seat: stains and grime extracted" },
      { before: carHeadlinerBefore, after: carHeadlinerAfter, caption: "Roof lining: marks lifted" },
      { before: carPillarBefore, after: carPillarAfter, caption: "Door pillar: dirty patches cleaned" },
    ],
    metaTitle: "Car Interior Valeting & Detailing Somerset | Cleanfix24",
    metaDescription:
      "Mobile car interior valeting in Wellington, Taunton & nearby from £45. Seats and carpets extracted, stains and odours removed, at your home.",
  },
];

export const NOT_OFFERED =
  "we don't offer carpet cleaning or any work at height, such as roof, gutter or high-level window cleaning";

export const servicesIn = (category: CategoryId) =>
  SERVICES.filter((s) => s.category === category);

export const getService = (slug: string | undefined) =>
  SERVICES.find((s) => s.slug === slug);

export const servicePath = (s: Service) => `/services/${s.slug}`;
