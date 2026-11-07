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
  /** Shown as "From £20/hour". Leave empty for quote-only services. */
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
      "Life is busy. Our regular cleaning service keeps your home fresh and tidy without you having to lift a finger. You choose how often — weekly, fortnightly or monthly — and we work to a checklist that suits your home.",
      "As a family-run business, we keep things personal: you get the same friendly faces each visit, who learn how you like things done.",
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
      "Weekly, fortnightly or monthly house cleaning across Wellington, Taunton, Somerset & Devon. Family-run, reliable and flexible. Get a free quote.",
  },
  {
    slug: "deep-cleaning",
    category: "cleaning",
    title: "Deep Cleaning",
    short:
      "A thorough top-to-bottom spring clean that reaches the places everyday cleaning misses.",
    intro: [
      "A deep clean (also called a general or spring clean) goes far beyond a regular tidy-up. We clean inside, behind and underneath — skirting boards, door frames, light switches, inside cupboards and appliances, limescale and grease build-up.",
      "It's ideal before or after a move, before guests arrive, after an illness, or simply when your home needs a fresh start.",
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
      "Top-to-bottom deep cleaning for homes in Wellington, Taunton, Somerset & Devon. Kitchens, bathrooms, limescale, grease and more. Free quotes.",
  },
  {
    slug: "end-of-tenancy-cleaning",
    category: "cleaning",
    title: "End of Tenancy Cleaning",
    short:
      "Move-out cleaning for tenants, landlords and letting agents — ready for inspection and the next tenant.",
    intro: [
      "Moving out is stressful enough. Our end of tenancy clean is designed to get the property ready for the inventory check, helping tenants get their deposit back and landlords re-let faster.",
      "We work to a detailed checklist covering every room, including kitchen appliances, bathrooms, cupboards, skirting boards and windows. We also clean between tenancies for landlords and holiday lets.",
    ],
    icon: KeyRound,
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
      "End of tenancy and move-out cleaning for tenants, landlords and agents in Somerset & Devon. Detailed checklist, inspection-ready results.",
  },
  {
    slug: "after-builders-cleaning",
    category: "cleaning",
    title: "After Builders Cleaning",
    short:
      "Post-construction and renovation cleaning that removes fine dust, paint splashes and debris.",
    intro: [
      "Building work leaves behind a layer of fine dust that settles everywhere — on surfaces, in cupboards, on window frames and floors. Our after builders clean gets your home or premises ready to live in or use.",
      "We remove dust from every surface, clean windows and frames, take off paint and plaster splashes where safe, and leave floors spotless.",
    ],
    icon: HardHat,
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
      "Post-construction and renovation cleaning in Wellington, Taunton, Somerset & Devon. Dust, paint splashes and debris removed. Free quotes.",
  },
  {
    slug: "commercial-event-cleaning",
    category: "cleaning",
    title: "Commercial & After-Event Cleaning",
    short:
      "Cleaning for cafés, restaurants, offices and venues — including after banquets, parties and events.",
    intro: [
      "We help local businesses stay clean and welcoming. From regular cleaning for small offices and shops to a full clean-up after a banquet, wedding or party in a café, restaurant or hall.",
      "After an event we take care of tables, chairs, floors, kitchens and toilets so the venue is ready for business again — often first thing the next morning.",
    ],
    icon: UtensilsCrossed,
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
      "Cleaning for cafés, restaurants, offices and venues in Wellington & Taunton, including clean-ups after banquets, parties and events.",
  },
  {
    slug: "holiday-let-cleaning",
    category: "cleaning",
    title: "Holiday Let & Airbnb Cleaning",
    short:
      "Changeover cleaning for holiday cottages and Airbnbs — guest-ready on time, with fresh linen and towels.",
    intro: [
      "Great reviews start with a spotless property. We turn your holiday let around between guests: a full clean, beds made with fresh linen, towels laid out and the little touches that make guests feel welcome.",
      "Combine changeovers with our laundry collection service and we'll take care of your bed linen and towels too. After each visit we can send you photos and let you know about anything that needs attention — breakages, low supplies or maintenance issues.",
    ],
    icon: BedSingle,
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
      "Holiday cottage and Airbnb changeover cleaning in Wellington, Taunton, Somerset & Devon. Fresh linen, towels, photo reports. Free quotes.",
  },
  {
    slug: "laundry-ironing-service",
    category: "cleaning",
    title: "Laundry & Ironing Collection",
    short:
      "We collect your laundry, take it to be washed, ironed and folded, then bring it back ready to wear.",
    intro: [
      "Save hours every week. We collect your laundry from your door, take it to the laundry to be washed and dried, have it ironed and folded, and deliver it back to you ready to put away.",
      "Ideal for busy families, professionals, older clients and holiday lets. We can collect on a regular schedule or as a one-off, and clothes are returned hung or folded — just tell us your preference.",
    ],
    icon: Shirt,
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
      "Laundry and ironing with collection and delivery in Wellington, Taunton and surrounding areas. Washed, ironed, folded and returned to your door.",
  },

  // ---------- Upholstery & stains ----------
  {
    slug: "upholstery-cleaning",
    category: "upholstery",
    title: "Sofa & Upholstery Cleaning",
    short:
      "Deep extraction cleaning for sofas, armchairs and soft furniture — lifting dirt, stains and odours.",
    intro: [
      "Your sofa collects everyday dirt, body oils, spills, pet hair and odours that a vacuum can't reach. We use professional hot-water extraction to clean deep inside the fabric and rinse the dirt away.",
      "We check the fabric and its care label first, pre-treat stains and heavy areas, then extract. The result is fresher, brighter furniture that's dry within hours.",
    ],
    icon: Sofa,
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
      "Professional sofa, armchair and upholstery cleaning in Wellington, Taunton, Somerset & Devon. Deep extraction, stain removal, fast drying.",
  },
  {
    slug: "mattress-cleaning",
    category: "upholstery",
    title: "Mattress Cleaning",
    short:
      "Remove stains, sweat, dust mites and odours from your mattress for a fresher, healthier sleep.",
    intro: [
      "We spend a third of our lives in bed, and mattresses absorb sweat, skin cells, dust mites and the occasional accident. Turning or covering a mattress doesn't remove what's inside.",
      "Our mattress cleaning combines vacuuming, stain pre-treatment and deep extraction to remove stains and odours and reduce allergens.",
    ],
    icon: BedDouble,
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
      "Professional mattress cleaning in Somerset & Devon. Removes stains, sweat, dust mites and odours. Ideal for homes and holiday lets.",
  },
  {
    slug: "stain-removal",
    category: "upholstery",
    title: "Stain Removal",
    short:
      "Specialist treatment for stubborn stains on upholstery and mattresses — food, drink, pets, blood and more.",
    intro: [
      "Different stains need different treatments. Coffee, red wine, blood, make-up, ink and pet accidents all react differently — and the wrong product can set a stain permanently.",
      "We identify the type of stain and fabric, choose the right treatment, and remove it as safely and completely as possible.",
    ],
    icon: Droplets,
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
        q: "What should I do straight after a spill?",
        a: "Blot (don't rub) with a clean white cloth and avoid household chemicals — then contact us as soon as possible.",
      },
    ],
    metaTitle: "Stain Removal for Sofas & Mattresses Somerset | Cleanfix24",
    metaDescription:
      "Specialist stain removal for sofas, upholstery and mattresses in Wellington, Taunton, Somerset & Devon. Wine, coffee, pet, blood and more.",
  },

  // ---------- Exterior ----------
  {
    slug: "patio-cleaning",
    category: "exterior",
    title: "Patio Cleaning",
    short:
      "Pressure washing for patios and paths — removing moss, algae, weeds and built-up dirt.",
    intro: [
      "Over time patios turn green and slippery with moss, algae and dirt. Our pressure washing brings slabs, stone and block paving back to their original colour and makes them safer to walk on.",
      "We clear weeds from the joints, wash the surface and rinse everything away, leaving your outdoor space ready to enjoy.",
    ],
    icon: Fence,
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
      "Patio cleaning and pressure washing in Wellington, Taunton, Somerset & Devon. Moss, algae and weeds removed from slabs, stone and paving.",
  },
  {
    slug: "exterior-wall-cleaning",
    category: "exterior",
    title: "Exterior Wall Cleaning",
    short:
      "Cleaning the outside walls of your home — removing green algae, dirt and staining.",
    intro: [
      "Green algae, black streaks and dirt make a house look older than it is. We clean exterior walls to refresh the look of your property without repainting.",
      "We choose the right method for your wall type, from gentle washing for render and painted surfaces to pressure washing for brick and stone.",
    ],
    icon: Building2,
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
        q: "How high can you clean?",
        a: "We clean walls that can be reached safely from ground level. Send a photo and we'll confirm.",
      },
    ],
    metaTitle: "Exterior Wall & Render Cleaning Somerset | Cleanfix24",
    metaDescription:
      "Exterior wall cleaning in Wellington, Taunton, Somerset & Devon. Green algae and dirt removed from render, brick and stone walls.",
  },

  // ---------- Handyman & garden ----------
  {
    slug: "handyman-services",
    category: "handyman",
    title: "Handyman Services",
    short:
      "Furniture assembly, small repairs and odd jobs around the house — the little things on your to-do list.",
    intro: [
      "Every home has a list of small jobs that never seem to get done. We can take care of them for you — from assembling flat-pack furniture to fixing a loose handle or putting up shelves.",
      "It's a handy add-on to a clean, too: ideal for landlords between tenancies, people moving home, or anyone who simply doesn't have the time.",
    ],
    icon: Wrench,
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
      "Furniture assembly, small repairs, shelves, sealant and odd jobs in Wellington, Taunton, Somerset & Devon. Friendly local handyman service.",
  },
  {
    slug: "garden-maintenance",
    category: "handyman",
    title: "Garden Maintenance",
    short:
      "Lawn mowing, hedge and shrub trimming, weeding and garden tidy-ups — one-off or regular.",
    intro: [
      "Keep your garden neat without spending your weekends on it. We mow lawns, trim hedges and shrubs, pull weeds and give overgrown gardens a proper tidy-up.",
      "Book a one-off visit — for example before selling or letting a property — or regular visits through the growing season.",
    ],
    icon: Leaf,
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
      "Lawn mowing, hedge trimming, weeding and garden tidy-ups in Wellington, Taunton, Somerset & Devon. One-off or regular visits.",
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
      "We also give practical advice on ventilation and condensation to help stop it coming back.",
    ],
    icon: ShieldCheck,
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
        q: "Will the mould come back?",
        a: "Mould returns if the cause (usually condensation or damp) remains. We'll advise you on ventilation and prevention.",
      },
    ],
    metaTitle: "Mould Removal Wellington & Taunton | Cleanfix24",
    metaDescription:
      "Safe mould removal for bathrooms, walls and window frames in Somerset & Devon, with advice on preventing it from returning.",
  },
  {
    slug: "car-interior-detailing",
    category: "specialist",
    title: "Car Interior Detailing",
    short:
      "Interior valeting for cars, vans and caravans — seats, mats, dashboard and every corner in between.",
    intro: [
      "We use the same extraction equipment we use on sofas to deep clean car seats and fabric, removing stains, spills and odours.",
      "Every surface is cleaned, from the dashboard and console to door pockets and cup holders — perfect before selling a car or after a family holiday.",
    ],
    icon: Car,
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
      "Car, van and caravan interior detailing in Wellington, Taunton, Somerset & Devon. Seats extracted, stains and odours removed.",
  },
];

export const NOT_OFFERED =
  "we don't offer carpet cleaning or any work at height, such as roof, gutter or high-level window cleaning";

export const servicesIn = (category: CategoryId) =>
  SERVICES.filter((s) => s.category === category);

export const getService = (slug: string | undefined) =>
  SERVICES.find((s) => s.slug === slug);

export const servicePath = (s: Service) => `/services/${s.slug}`;
