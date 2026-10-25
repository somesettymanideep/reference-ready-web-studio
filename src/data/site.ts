import heroImg from "@/assets/hero.jpg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcConstruction from "@/assets/svc-construction.jpg";
import svcGovernment from "@/assets/svc-government.jpg";
import svcPlans from "@/assets/svc-plans.jpg";
import svcRenovation from "@/assets/svc-renovation.jpg";
import svcRealestate from "@/assets/svc-realestate.jpg";
import svcWaterproofing from "@/assets/svc-waterproofing.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import ctaBlueprint from "@/assets/cta-blueprint.jpg";

export const IMAGES = {
  hero: heroImg,
  about: svcCommercial,
  founder: null,
  blueprint: ctaBlueprint,
} as const;

export const CONTACT = {
  company: "Naidu & Co Private Limited",
  tagline: "Building quality spaces and infrastructure for a better tomorrow.",
  address: "Kattidikeda, Vizianagaram, Andhra Pradesh 535183",
  email: "naiduco.pvt.ltd@gmail.com",
  phone: "+91 76719 70783",
  mapsUrl:
    "https://www.google.com/maps?q=Vizianagaram%2C%20Andhra%20Pradesh%20535183",
  mapsEmbed:
    "https://www.google.com/maps?q=Vizianagaram%2C%20Andhra%20Pradesh%20535183&output=embed",
};

export type Service = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  bullets: string[];
  category: "Construction" | "Real Estate" | "Government Works" | "Renovation";
};

export const SERVICES: Service[] = [
  {
    id: "construction",
    title: "Construction Services",
    blurb:
      "Residential, commercial and end-to-end construction solutions focused on quality, durability and safety.",
    image: svcConstruction,
    bullets: [
      "Residential & commercial construction",
      "Planning & execution",
      "Project management",
      "Quality assurance",
    ],
    category: "Construction",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    blurb:
      "Property development and real estate projects for long-term value and lasting quality.",
    image: svcRealestate,
    bullets: [
      "Residential projects",
      "Commercial spaces",
      "Property development",
      "Property consultation",
    ],
    category: "Real Estate",
  },
  {
    id: "government-works",
    title: "Government Works",
    blurb:
      "Civil infrastructure and public sector project execution with professional planning.",
    image: svcGovernment,
    bullets: [
      "Infrastructure projects",
      "Civil works",
      "Public sector support",
      "Road & highway works",
    ],
    category: "Government Works",
  },
  {
    id: "home-approved-plans",
    title: "Home Approved Plans",
    blurb:
      "Assistance with home planning, drawings and approvals for government rules in mind.",
    image: svcPlans,
    bullets: [
      "Architectural & structural drawings",
      "Vaasthu-based planning",
      "Plan approvals",
      "Site verification",
    ],
    category: "Construction",
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    blurb:
      "Solutions to protect buildings from water damage and damp issues.",
    image: svcWaterproofing,
    bullets: [
      "Terrace waterproofing",
      "Bathroom & walls",
      "Leak repair",
      "Protective coatings",
    ],
    category: "Renovation",
  },
  {
    id: "home-renovation",
    title: "Home Renovation",
    blurb:
      "Renovation, upgrades and improvements that enhance your living space.",
    image: svcRenovation,
    bullets: [
      "Interior upgrades",
      "Repairs & maintenance",
      "Remodelling",
      "Painting & finishing",
    ],
    category: "Renovation",
  },
];

export type Project = {
  title: string;
  location: string;
  category: "Construction" | "Real Estate" | "Government Works" | "Renovation";
  image: string;
};

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Construction",
  "Real Estate",
  "Government Works",
  "Renovation",
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Residential Building",
    location: "Kattidikeda, Vizianagaram",
    category: "Construction",
    image: svcConstruction,
  },
  {
    title: "Commercial Complex",
    location: "Red Hills, Chennai",
    category: "Real Estate",
    image: svcCommercial,
  },
  {
    title: "Road Infrastructure",
    location: "National Highway Works",
    category: "Government Works",
    image: svcGovernment,
  },
  {
    title: "Villa Project",
    location: "ECR, Chennai",
    category: "Real Estate",
    image: projectVilla,
  },
  {
    title: "Renovation Project",
    location: "Anna Nagar, Chennai",
    category: "Renovation",
    image: svcRenovation,
  },
  {
    title: "Industrial Shed",
    location: "Sriperumbudur, Tamil Nadu",
    category: "Construction",
    image: projectIndustrial,
  },
];

export const STATS = [
  { label: "Projects Completed", value: "120+", icon: "building" },
  { label: "Years of Experience", value: "15+", icon: "award" },
  { label: "Happy Clients", value: "200+", icon: "users" },
  { label: "Ongoing Projects", value: "8", icon: "hardhat" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The team at Naidu & Co delivered our project on time with excellent quality. Their attention to detail and professionalism made the entire process smooth.",
    name: "Ramesh Kumar",
    role: "Homeowner",
  },
  {
    quote:
      "Professional execution from planning to handover. They kept us informed at every stage and the finish quality exceeded our expectations.",
    name: "Priya Sharma",
    role: "Property Investor",
  },
  {
    quote:
      "A reliable partner for our commercial development. Transparent pricing, honest timelines and dependable site management throughout.",
    name: "Suresh Reddy",
    role: "Business Owner",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Construction",
  "Real Estate",
  "Government Works",
  "Home Approved Plans",
  "Waterproofing",
  "Home Renovation",
  "Other",
] as const;
