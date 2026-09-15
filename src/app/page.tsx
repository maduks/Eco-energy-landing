import type { Metadata } from "next";
import {
  AboutSection,
  AppShowcaseSection,
  ClientsLogoSection,
  FaqSection,
  HeroSection,
  ServicesSection,
  StakeholdersSection,
} from "@/components/home";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.product} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsLogoSection />
      <AboutSection />
      <StakeholdersSection />
      <ServicesSection />
      <AppShowcaseSection />
      <FaqSection />
    </>
  );
}
