export const siteConfig = {
  name: "EcoEnergy",
  product: "Econergy",
  company: "Societe Transnationale Ltd · STL Africa",
  tagline: "Prepaid LPG metered to each flat",
  description:
    "Econergy runs centralised LPG for Nigerian residential estates. Residents pay ahead on their phone. Credit keeps the valve open; empty balance shuts it.",
  email: "hello@eco-nergy.com",
  phone: "+234 803 603 7313",
  phoneTel: "+2348036037313",
  hotline: "+234 803 603 7313",
  address: "Lagos, Nigeria",
  hours: "Working Hours: Monday - Friday 9:00 AM - 6:00 PM",
  url: "https://eco-nergy.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  {
    href: "/services",
    label: "Platform",
    children: [
      { href: "/services", label: "Our Services" },
      { href: "/the-app", label: "The App" },
      // { href: "/the-console", label: "The Console" },
    ],
  },
  { href: "/partnership", label: "Partnership" },
  { href: "/contact", label: "Contact" },
];
