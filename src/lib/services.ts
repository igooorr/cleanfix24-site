import upholsteryImage from "@/assets/upholstery.webp";
import heroImage from "@/assets/hero.webp";
import mouldImage from "@/assets/mould.webp";
import carImage from "@/assets/car.webp";
import type { LucideIcon } from "lucide-react";
import { Sofa, BedDouble, Droplets, Home, ShieldCheck, Car, Fence, Building2 } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  features: string[];
}

export const INTERIOR_SERVICES: Service[] = [
  {
    title: "Upholstery Cleaning",
    description:
      "Deep hot-water extraction cleaning for sofas, armchairs and other soft furniture. We lift dirt, stains and odours from deep inside the fabric.",
    icon: Sofa,
    image: upholsteryImage,
    features: [
      "Sofas, corner sofas & sofa beds",
      "Armchairs & recliners",
      "Dining chairs & headboards",
      "Fabric-safe products",
      "Fast drying",
    ],
  },
  {
    title: "Mattress Cleaning",
    description:
      "Professional mattress cleaning that removes stains, sweat, dust mites and odours for a fresher, healthier night's sleep.",
    icon: BedDouble,
    features: [
      "Deep extraction cleaning",
      "Sweat & urine stain removal",
      "Dust mite & allergen reduction",
      "Odour neutralising",
      "Single, double & king size",
    ],
  },
  {
    title: "Stain Removal",
    description:
      "Specialist treatment for stubborn stains on upholstery and mattresses. We identify the stain and use the right method to remove it safely.",
    icon: Droplets,
    features: [
      "Food & drink (coffee, wine, tea)",
      "Pet stains & odours",
      "Blood & sweat stains",
      "Make-up & ink marks",
      "Water marks",
    ],
  },
  {
    title: "House & Apartment Cleaning",
    description:
      "From regular cleans to one-off deep cleans after parties, tenancies or building work.",
    icon: Home,
    image: heroImage,
    features: [
      "Regular weekly / fortnightly cleaning",
      "End of tenancy cleaning",
      "After builders cleaning",
      "After-party deep cleaning",
      "One-off deep cleans",
    ],
  },
  {
    title: "Mould Removal",
    description:
      "Safe mould treatment for bathrooms, window frames and damp areas, plus advice to help stop it coming back.",
    icon: ShieldCheck,
    image: mouldImage,
    features: [
      "Bathroom & shower mould",
      "Window frames & sealant",
      "Surface sanitising",
      "Prevention advice",
    ],
  },
  {
    title: "Car Interior Detailing",
    description:
      "Interior valeting for cars, vans and caravans — seats, mats, dashboard and every corner in between.",
    icon: Car,
    image: carImage,
    features: [
      "Seat & upholstery extraction",
      "Deep vacuum",
      "Dashboard & console detailing",
      "Odour removal",
    ],
  },
];

export const EXTERIOR_SERVICES: Service[] = [
  {
    title: "Patio Cleaning",
    description:
      "Pressure washing for patios and paths. We remove moss, algae, weeds and built-up dirt to bring your paving back to life.",
    icon: Fence,
    features: [
      "Pressure washing",
      "Moss & algae removal",
      "Weed removal from joints",
      "Slabs, stone & block paving",
      "Garden paths & steps",
    ],
  },
  {
    title: "Exterior Wall Cleaning",
    description:
      "Cleaning for the outside walls of your home — removing green algae, dirt and staining to refresh the look of your property.",
    icon: Building2,
    features: [
      "Render & painted walls",
      "Brick & stone walls",
      "Green algae & dirt removal",
      "Garden walls & fences",
    ],
  },
];

export const NOT_OFFERED = "Carpet cleaning, roof cleaning and gutter cleaning";
