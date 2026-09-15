import { ecoIcons } from "@/lib/eco-assets";

export const clientLogos = [
  "client_logo_19.webp",
  "client_logo_20.webp",
  "client_logo_21.webp",
  "client_logo_22.webp",
  "client_logo_23.webp",
  "client_logo_24.webp",
] as const;

export const services = [
  {
    icon: ecoIcons.meter,
    alt: "Smart gas meter",
    title: "Smart Metering",
    href: "/services",
    text: "Each flat gets its own meter. Flow goes out over NB-IoT or LoRaWAN, tied to a serial so you always know which unit used what.",
  },
  {
    icon: ecoIcons.topup,
    alt: "Prepaid gas top-up",
    title: "Prepaid Vending",
    href: "/the-app",
    text: "Residents pay by card, transfer or USSD. The wallet funds the meter straight away. No chasing facility staff for a refill slip.",
  },
  {
    icon: ecoIcons.valve,
    alt: "Motorised gas valve",
    title: "Motorised Valves",
    href: "/how-it-works",
    text: "Credit keeps the valve open. Zero balance closes it. Facility teams can force open or shut for maintenance or a real emergency.",
  },
  {
    icon: ecoIcons.tank,
    alt: "Bulk LPG tank",
    title: "Bulk Tank Telemetry",
    href: "/the-console",
    text: "You see the central tank level as it drops. Reorder alerts go out early enough that cooking never has to stop mid-week.",
  },
  {
    icon: ecoIcons.app,
    alt: "Resident gas app",
    title: "Resident App",
    href: "/the-app",
    text: "Balance, usage, valve state and past top-ups on one screen. OTP, MFA and biometrics keep the account locked to the household.",
  },
  {
    icon: ecoIcons.ledger,
    alt: "Gas revenue ledger",
    title: "Financial Reconciliation",
    href: "/the-console",
    text: "Wholesale cost, service fees and partner splits land per top-up. Export PDF or CSV when the board asks for numbers.",
  },
] as const;

export const stakeholders = [
  {
    image: "prop_developer.png",
    name: "Property Developers",
    role: "Piped gas that sells units faster",
  },
  {
    image: "real_estate_manager.png",
    name: "Estate Managers",
    role: "Tank, meters and tickets in one place",
  },
  {
    image: "lpg_gas_supplier.png",
    name: "Gas Distributors",
    role: "Steady prepaid demand, fewer chase calls",
  },
  {
    image: "topup.png",
    name: "Residents",
    role: "Top up when you need gas, not when the truck comes",
  },
] as const;

export const projects = [
  {
    image: "project_image_8.png",
    title: "Emerald Court Estate",
    tag: "Abuja · 418 units",
    caption:
      "Central tank, flat meters and prepaid valves live on one network. Residents top up from their phones; facility sees tank level and valve state in one console.",
    featured: true,
  },
] as const;

export const faqs = [
  {
    id: "home_faq_one",
    question: "What comes with Econergy for a new estate?",
    answer:
      "Meters, motorised valves, bulk tank telemetry, the resident app, the ops console and automated revenue splits. One multi-tenant stack, not a pile of separate tools.",
  },
  {
    id: "home_faq_two",
    question: "How do residents add gas credit?",
    answer:
      "In the Econergy app with debit card, bank transfer or USSD. Credit goes to the meter after payment clears. No paper vouchers and no queue at the facility office.",
  },
  {
    id: "home_faq_three",
    question: "What happens at zero balance?",
    answer:
      "The motorised valve closes on its own. The app shows that status. Supply returns after a successful top-up.",
  },
  {
    id: "home_faq_four",
    question: "Can estate managers override a valve?",
    answer:
      "Yes. Authorised operators can force-open or force-close for maintenance or a verified emergency. Overrides are logged for audit.",
  },
] as const;

export const blogs = [
  {
    image: "blog_image_16.webp",
    tag: "LPG Metering",
    date: "August 12, 2025",
    title: "What Changes When Every Flat Has Its Own Gas Meter",
  },
  {
    image: "blog_image_17.webp",
    tag: "Prepaid Utilities",
    date: "July 28, 2025",
    title: "How Prepaid Credit Cuts Estate Collection Headaches",
  },
  {
    image: "blog_image_18.webp",
    tag: "Estate Safety",
    date: "June 15, 2025",
    title: "When Valves and Panic Alerts Matter on Site",
  },
] as const;
