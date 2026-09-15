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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      {
        url: "/assets/images/site_logo/eco_droplet_mark.png",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
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
