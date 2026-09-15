import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageHero from "@/components/PageHero";
import { ecoIcons } from "@/lib/eco-assets";

export const metadata: Metadata = {
  title: "How it Works",
  description:
    "See how Econergy moves LPG from the estate tank through the meter and valve to the resident app and the money trail. Five stages, no hand-written logs.",
};

const stages = [
  {
    code: "TK-01",
    icon: ecoIcons.tank,
    title: "Bulk Storage",
    heading: "Gas sits in the estate tank first.",
    text: "We gauge the bulk farm all day and show the volume on the ops screen. When stock crosses the reorder line, STL Africa logistics gets a ping and a truck is booked. Residents should not notice the refill planning.",
    points: ["Live tank level", "Reorder before empty", "Alert set near 25%"],
  },
  {
    code: "MTR-02",
    icon: ecoIcons.meter,
    title: "Smart Meter",
    heading: "Each flat meters its own use.",
    text: "Diaphragm or ultrasonic meters clock flow and send it up on NB-IoT or LoRaWAN. Serial numbers map to estate, block, flat and resident. A reading always belongs to someone specific.",
    points: ["Flow on the wire", "Serial tied to the flat", "Heartbeat and tamper flags"],
  },
  {
    code: "MV-03",
    icon: ecoIcons.valve,
    title: "Motorised Valve",
    heading: "No credit, no gas.",
    text: "A motorised ball valve sits on the unit line. At zero balance it closes and the app shows that status. Pay, and supply comes back once the payment clears. Admins can force open or shut for works or a confirmed emergency.",
    points: ["Auto cut-off", "Remote force open/close", "Supply back after top-up"],
  },
  {
    code: "APP-04",
    icon: ecoIcons.app,
    title: "Resident App",
    heading: "Households see the same numbers the meter sees.",
    text: "Balance, flow, valve state and history sit in one place. OTP, MFA and biometrics lock the account. If someone suspects a leak, the panic button hits the estate control room with the unit location.",
    points: ["iOS and Android", "Face ID or fingerprint", "Panic ping to control"],
  },
  {
    code: "FIN-05",
    icon: ecoIcons.ledger,
    title: "Reconciliation",
    heading: "Money lines up with gas that actually moved.",
    text: "Top-ups, service fees, wholesale cost and partner splits are tracked as they happen. Pull PDF or CSV for the board, the developer and the residents' association. Disputes get settled against meter data, not someone's recollection.",
    points: ["Revenue check per sale", "Credit change history", "PDF and CSV export"],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero title="How it Works" breadcrumb="How it Works" />

      <section className="about_section section_space section_decoration pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading_block mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Flow · TK → MTR → MV → APP → FIN
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">From the tank to the ledger, step by step</h2>
                <p className="heading_description mb-0">
                  Each stage below is instrumented. Nobody is typing readings into a notebook.
                  Econergy measures draw, holds the valve to prepaid rules, and ties naira
                  back to gas that left the tank.
                </p>
              </div>
              <ul className="iconlist_block unordered_list_block mb-5">
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Five live stages. No blank spots in the books.</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Hardware, app and finance on the same stack.</span>
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
                <img
                  src="/assets/images/about/how_it_Work.png"
                  alt="Econergy instrument flow"
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

      <section className="service_section section_space section_decoration">
        <div className="container">
          <div className="heading_block text-center">
            <div className="badge style_2 text-uppercase">
              <i className="fa-solid fa-circle text-primary"></i>
              Five Stages
              <i className="fa-solid fa-circle text-primary"></i>
            </div>
            <h2 className="heading_text mb-0">How Econergy runs on site</h2>
          </div>
          <div className="service_blocks_group row">
            {stages.map((stage) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={stage.code}>
                <div className="service_block style_2">
                  <div className="service_icon">
                    <img src={stage.icon} alt={stage.title} />
                  </div>
                  <div className="service_content">
                    <h3 className="service_title">
                      <Link href="/services">
                        {stage.code} · {stage.title}
                      </Link>
                    </h3>
                    <p className="mb-0">
                      <strong>{stage.heading}</strong> {stage.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="about_section section_space bg-secondary section_decoration overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-last">
              <div className="heading_block text-white mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  On the Ground
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">What each piece is doing</h2>
                <p className="heading_description mb-0 text-muted">
                  Tank gauges, flat meters, valves, the app and the money trail stay live. Estate
                  managers do not wait for month-end guesses.
                </p>
              </div>
              <ul className="iconlist_block unordered_list_block mb-5 text-white">
                {stages.flatMap((stage) =>
                  stage.points.map((point) => (
                    <li key={`${stage.code}-${point}`}>
                      <span className="iconlist_icon">
                        <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                      </span>
                      <span className="iconlist_text">
                        {stage.code}: {point}
                      </span>
                    </li>
                  ))
                ).slice(0, 6)}
              </ul>
              <Link className="btn bg-primary rounded-pill" href="/the-app">
                <span className="btn_label">Explore The App</span>
                <span className="btn_icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image_block rounded">
                <img
                  src="/assets/images/about/about_image_5.webp"
                  alt="Metered LPG instrumentation"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
