import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageHero from "@/components/PageHero";
import { ecoIcons } from "@/lib/eco-assets";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "Partner with Econergy and STL Africa. For property developers, estate management associations, gas distributors and investors.",
};

const partners = [
  {
    icon: ecoIcons.tank,
    title: "Property Developers",
    text: "Specify centralised LPG with billing, safety and support already worked out. You take a share of ongoing utility revenue, not only a one-time install fee.",
  },
  {
    icon: ecoIcons.app,
    title: "Estate Management Associations",
    text: "Fewer fights over who used what. Use is metered per flat and settled per top-up. Statements come out in a format a board can actually review.",
  },
  {
    icon: ecoIcons.flame,
    title: "Gas Distributors & Investors",
    text: "Prepaid demand is easier to plan around. Tank telemetry turns restocking into a scheduled run instead of a frantic call from the gate.",
  },
  {
    icon: ecoIcons.ledger,
    title: "STL Africa Operators",
    text: "Wholesale cost, service charge and the split between STL Africa, developer and the estate association calculate per sale. Not from a month-end spreadsheet.",
  },
  {
    icon: ecoIcons.meter,
    title: "Hardware Integrators",
    text: "Meters, motorised valves and bulk gauges drop into the multi-tenant tree with firmware, serial mapping and heartbeat checks from day one.",
  },
  {
    icon: ecoIcons.valve,
    title: "Facility Support Partners",
    text: "Tickets, panic alerts and remote valve moves keep field teams aligned with the control room. Actions stay on the audit log.",
  },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero title="Partnership" breadcrumb="Partnership" />

      <section className="feature_section section_space">
        <div className="container">
          <div className="heading_block">
            <div className="row justify-content-lg-between">
              <div className="col-lg-5">
                <h3 className="heading_text mb-0">For the people who actually run estates</h3>
              </div>
              <div className="col-lg-5">
                <p className="heading_description mb-0">
                  Econergy is delivered by {siteConfig.company}. Speccing piped gas for a new
                  build or cleaning up an estate already live? We bring the metering, prepaid
                  vending and money trail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section section_space section_decoration bg-secondary overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="heading_block text-center text-white">
                <h2 className="heading_text">Who we work with</h2>
                <p className="heading_description mb-0 text-muted">
                  Developers, EMAs, distributors and operators share one pipeline. Tank to ledger.
                  Same numbers.
                </p>
              </div>
            </div>
          </div>
          <div className="service_blocks_group row">
            {partners.map((partner) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={partner.title}>
                <div className="service_block style_2">
                  <div className="service_icon">
                    <img src={partner.icon} alt={partner.title} />
                  </div>
                  <div className="service_content">
                    <h3 className="service_title">
                      <Link href="/contact">{partner.title}</Link>
                    </h3>
                    <p className="mb-0">{partner.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about_section section_space section_decoration">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading_block mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Next Step
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">Send us the estate numbers</h2>
                <p className="heading_description mb-0">
                  Estate name, tank size, how many flats. We come back with a deployment outline,
                  a hardware schedule and how the commercial split works.
                </p>
              </div>
              <div className="btns_group pb-0 justify-content-start">
                <Link className="btn bg-primary rounded-pill" href="/contact">
                  <span className="btn_label">Start a Conversation</span>
                  <span className="btn_icon">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link className="btn bg-dark rounded-pill" href="/how-it-works">
                  <span className="btn_label">Review the System</span>
                  <span className="btn_icon">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image_block rounded">
                <img
                  src="/assets/images/about/about_image_5.webp"
                  alt="Join Econergy deployment partners"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="decoration_item shape_nate_1">
          <img src="/assets/images/shapes/shape_nate_3.svg" alt="Nate Shape" />
        </div>
        <div className="decoration_item shape_nate_2">
          <img src="/assets/images/shapes/shape_nate_4.svg" alt="Nate Shape" />
        </div>
      </section>
    </>
  );
}
