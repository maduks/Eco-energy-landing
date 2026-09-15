import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageHero from "@/components/PageHero";
import { ecoIcons } from "@/lib/eco-assets";

export const metadata: Metadata = {
  title: "The Console",
  description:
    "Econergy ops console for estate teams. Tank levels, meter health, valve overrides, tickets and money reconciliation in one desktop view.",
};

const features = [
  {
    icon: ecoIcons.tank,
    title: "Infrastructure Hierarchy",
    text: "Estate, bulk tank, block, flat, meter serial. Multi-tenant layout facility staff can click through without getting lost.",
  },
  {
    icon: ecoIcons.meter,
    title: "Device Provisioning",
    text: "Register meters, set firmware and bind each device to a resident before the first cubic metre flows.",
  },
  {
    icon: ecoIcons.signal,
    title: "Bulk Tank Telemetry",
    text: "Ongoing gauging with early alerts to logistics. Schedule the refill before anyone complains about low pressure.",
  },
  {
    icon: ecoIcons.valve,
    title: "Remote Valve Override",
    text: "Authorised force-open and force-close for maintenance or confirmed emergencies. Every move is logged.",
  },
  {
    icon: ecoIcons.topup,
    title: "Credit Adjustments",
    text: "Fix disputed balances against meter telemetry. Not against memory or a WhatsApp thread.",
  },
  {
    icon: ecoIcons.ledger,
    title: "Financial Reconciliation",
    text: "Wholesale cost, service charge and partner splits settle per top-up. Pull PDF or CSV for the board pack.",
  },
];

export default function TheConsolePage() {
  return (
    <>
      <PageHero title="The Console" breadcrumb="The Console" />

      <section className="about_section section_space section_decoration pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading_block mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Ops desk · Desktop
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">The screen facility runs from</h2>
                <p className="heading_description mb-0">
                  Estate associations and STL Africa operators share one console. Tank, meters,
                  tickets and money sit together. Quiet or tampered meters raise their own flag.
                  You do not hunt for them in a spreadsheet.
                </p>
              </div>
              <ul className="iconlist_block unordered_list_block mb-5">
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Tank level, meter health and open tickets up front.</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Credit fixes stay in one audit trail.</span>
                </li>
              </ul>
              <Link className="btn bg-primary rounded-pill" href="/contact">
                <span className="btn_label">Request a demo</span>
                <span className="btn_icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image_block rounded">
                <img src="/assets/images/about/about_image_5.webp" alt="Econergy ops console" />
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

      <section className="service_section section_space section_decoration">
        <div className="container">
          <div className="heading_block text-center">
            <div className="badge style_2 text-uppercase">
              <i className="fa-solid fa-circle text-primary"></i>
              Operator Tools
              <i className="fa-solid fa-circle text-primary"></i>
            </div>
            <h2 className="heading_text mb-0">Day-to-day estate gas ops</h2>
          </div>
          <div className="service_blocks_group row">
            {features.map((feature) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={feature.title}>
                <div className="service_block style_2">
                  <div className="service_icon">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <div className="service_content">
                    <h3 className="service_title">
                      <Link href="/services">{feature.title}</Link>
                    </h3>
                    <p className="mb-0">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btns_group">
            <Link className="btn bg-dark rounded-pill" href="/partnership">
              <span className="btn_label">Partner With Us</span>
              <span className="btn_icon">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about_section section_space bg-secondary section_decoration overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-last">
              <div className="heading_block text-white mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Live Feed
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">Catch issues before the complaints</h2>
                <p className="heading_description mb-0 text-muted">
                  Meters that go quiet, tamper flags, flats under 15% credit and bulk refill logs
                  show in the last-24-hours list. Control room stays ahead of the WhatsApp group.
                </p>
              </div>
              <ul className="iconlist_block unordered_list_block mb-5 text-white">
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Online meters vs flagged ones, live</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Vend volume and ticket SLAs on one board</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Signal strength and last-report time per flat</span>
                </li>
              </ul>
              <Link className="btn bg-primary rounded-pill" href="/how-it-works">
                <span className="btn_label">See How It Works</span>
                <span className="btn_icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image_block rounded">
                <img src="/assets/images/about/about_image_4.webp" alt="Estate ops overview" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
