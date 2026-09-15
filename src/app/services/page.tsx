import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageHero from "@/components/PageHero";
import { ecoIcons } from "@/lib/eco-assets";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Econergy services for Nigerian estates: smart metering, prepaid vending, motorised valves, bulk tank telemetry, resident app and financial reconciliation.",
};

const highlights = [
  {
    icon: ecoIcons.topup,
    title: "Prepaid Accuracy",
    text: "Kilograms credited to the meter line up with wholesale cost and estate revenue. No guessing at month-end.",
  },
  {
    icon: ecoIcons.valve,
    title: "Valve Enforcement",
    text: "Motorised valves stay open on credit and close on empty. Remote override when maintenance or an emergency needs it.",
  },
  {
    icon: ecoIcons.signal,
    title: "Live Telemetry",
    text: "Bulk tanks, flat meters and signal health keep reporting so the control room sees trouble early.",
  },
];

const services = [
  {
    icon: ecoIcons.meter,
    title: "Smart Metering",
    href: "/how-it-works",
    text: "Flat-level flow metering over NB-IoT or LoRaWAN. Serials mapped to estate, block and apartment.",
  },
  {
    icon: ecoIcons.topup,
    title: "Prepaid Vending",
    href: "/the-app",
    text: "Residents pay by card, transfer or USSD. Credit lands on the meter once payment clears.",
  },
  {
    icon: ecoIcons.valve,
    title: "Motorised Valves",
    href: "/how-it-works",
    text: "Credit-backed ball valves with auto cut-off, restore after top-up and logged remote override.",
  },
  {
    icon: ecoIcons.tank,
    title: "Bulk Tank Telemetry",
    href: "/the-console",
    text: "Continuous gauging on the central tank with reorder alerts before kitchens go cold.",
  },
  {
    icon: ecoIcons.app,
    title: "Resident App",
    href: "/the-app",
    text: "Balance, flow, valve status, biometrics and panic alerts on iOS and Android.",
  },
  {
    icon: ecoIcons.ledger,
    title: "Financial Reconciliation",
    href: "/the-console",
    text: "Per-sale splits for STL Africa, developers and estate associations. PDF and CSV when you need them.",
  },
];

const faqs = [
  {
    id: "collapse_one",
    question: "What comes with Econergy for a new estate?",
    answer:
      "Meters, motorised valves, bulk tank telemetry, the resident app, the ops console and automated revenue splits. One multi-tenant stack, not a pile of separate tools.",
  },
  {
    id: "collapse_two",
    question: "How do residents add gas credit?",
    answer:
      "In the Econergy app with debit card, bank transfer or USSD. Credit goes to the meter after payment clears. No paper vouchers and no queue at the facility office.",
  },
  {
    id: "collapse_three",
    question: "What happens at zero balance?",
    answer:
      "The motorised valve closes on its own. The app shows that status. Supply returns after a successful top-up.",
  },
  {
    id: "collapse_four",
    question: "Can estate managers override a valve?",
    answer:
      "Yes. Authorised operators can force-open or force-close for maintenance or a verified emergency. Overrides are logged for audit.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" breadcrumb="Our Services" />

      <section className="feature_section section_space">
        <div className="container">
          <div className="heading_block">
            <div className="row justify-content-lg-between">
              <div className="col-lg-5">
                <h3 className="heading_text mb-0">
                  Why estates move off manual LPG
                </h3>
              </div>
              <div className="col-lg-5">
                <p className="heading_description mb-0">
                  Cylinder runs, hand-written reads, disputed bills and leak risk without a clear
                  response path. Econergy closes that gap. The meter reports. The platform
                  bills. The valve enforces the prepaid rule.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {highlights.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <div className="features_block bg-dark">
                  <div className="features_icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="features_content">
                    <h3 className="features_title text-white">{item.title}</h3>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service_section bg-secondary section_decoration overflow-hidden">
        <div className="section_space pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="heading_block text-center text-white">
                  <h2 className="heading_text">What we put on your estate</h2>
                  <p className="heading_description mb-0 text-muted">
                    From flat meters to board-ready money reports. The full stack for centralised
                    estate LPG.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {services.map((service) => (
                <div className="col-lg-4" key={service.title}>
                  <div className="service_block bg-dark">
                    <div
                      className="service_icon"
                      style={{ backgroundImage: "url('/assets/images/icons/icon_rectangle.svg')" }}
                    >
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="service_content">
                      <h3 className="service_title">
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                      <p>{service.text}</p>
                      <Link className="btn-link" href={service.href}>
                        <span className="btn_label">Read More</span>
                        <span className="btn_icon">
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section_space pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last">
                <div className="heading_block text-white">
                  <h2 className="heading_text">Common questions</h2>
                  <p className="heading_description mb-0 text-muted">
                    Short answers on metering, prepaid top-ups and valves. Need a deployment plan?
                    Request a demo.
                  </p>
                </div>
                <div className="accordion pb-5" id="faq_accordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item" key={faq.id}>
                      <div className="accordion-header">
                        <button
                          className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${faq.id}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={faq.id}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={faq.id}
                        className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                        data-bs-parent="#faq_accordion"
                      >
                        <div className="accordion-body">
                          <p className="m-0 text-muted">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link className="btn bg-primary rounded-pill" href="/contact">
                  <span className="btn_label">Request a demo</span>
                  <span className="btn_icon">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="image_block rounded">
                  <img
                    src="/assets/images/about/about_image_4.webp"
                    alt="Econergy services"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
