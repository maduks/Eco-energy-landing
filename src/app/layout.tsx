import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OffCanvas from "@/components/OffCanvas";
import SiteScripts from "@/components/SiteScripts";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.product} — ${siteConfig.tagline} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Econergy",
    "centralised LPG",
    "metered gas",
    "prepaid gas vending",
    "estate utility management",
    "Nigeria LPG",
    "smart gas meter",
  ],
  authors: [{ name: siteConfig.company }],
  icons: {
    icon: "/assets/images/site_logo/favourite_icon_2.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
      </head>
      <body className="financial_consulting">
        <div className="page_wrapper">
          <div className="backtotop">
            <a href="#" className="scroll">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
          <Header />
          <main className="page_content">
            <OffCanvas />
            {children}
          </main>
          <Footer />
        </div>
        <SiteScripts />
      </body>
    </html>
  );
}
