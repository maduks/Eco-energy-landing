import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import PageHero from "@/components/PageHero";
import { ecoIcons } from "@/lib/eco-assets";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "The App",
  description:
    "The Econergy resident app for Nigerian estates. Top up LPG credit, check balance and flow, see valve status, and raise a panic alert with biometric lock.",
};

const features = [
  {
    icon: ecoIcons.topup,
    title: "Instant Top-Up",
    text: "Pay by card, transfer or USSD. Naira turns into kilogram credit on the meter once payment clears. No scratch codes to punch in.",
  },
  {
    icon: ecoIcons.meter,
    title: "Live Balance",
    text: "Remaining credit in kilograms, plus a rough days-left guess from how your household usually cooks. Updates when the meter reports.",
  },
  {
    icon: ecoIcons.signal,
    title: "Flow Rate",
    text: "See draw in kg/hr while the cooker is on. Helps people understand use before they argue about a bill.",
  },
  {
    icon: ecoIcons.valve,
    title: "Valve Status",
    text: "Open or closed, mirrored from the motorised valve. Top up and supply returns when the payment lands.",
  },
  {
    icon: ecoIcons.flame,
    title: "Panic Alert",
    text: "One emergency tap sends the flat location to the estate control room if someone smells gas or suspects a leak.",
  },
  {
    icon: ecoIcons.app,
    title: "Biometrics",
    text: "Face ID or fingerprint on top of OTP and MFA. Same habits people already use on their banking apps.",
  },
];

export default function TheAppPage() {
  return (
    <>
      <PageHero title="The App" breadcrumb="The App" />

      <section className="about_section section_space section_decoration pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading_block mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Resident side · iOS & Android
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">Gas credit in your pocket</h2>
                <p className="heading_description mb-0">
                  Built for households who already pay bills on their phone. First screen shows
                  balance, flow, valve state and how long the credit should last. Simple numbers.
                  Tied to a real valve on the pipe.
                </p>
              </div>
              <ul className="iconlist_block unordered_list_block mb-5">
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Pay ahead. Credit hits the meter without a gatehouse visit.</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Nudge at 30%, 15% and 5% so dinner is not cut mid-pot.</span>
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
                <img src="/assets/images/about/about_image_6.png" alt="Econergy resident app" />
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
      <section className="about_section section_space bg-secondary section_decoration overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-last">
              <div className="heading_block text-white mb-4">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Sign-up & Payments
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">Linked to your actual flat</h2>
                <p className="heading_description mb-0 text-muted">
                  Verify with phone or email, then attach to the estate, block and apartment the
                  facility team assigned. Paystack and Flutterwave handle wallet funding in the
                  background.
                </p>
              </div>
              <ul className="iconlist_block unordered_list_block mb-5 text-white">
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Mapped by estate, block and apartment</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Usage history by day, week and month</span>
                </li>
                <li>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">Fault tickets followed until closed</span>
                </li>
              </ul>
              <Link className="btn bg-primary rounded-pill" href="/contact">
                <span className="btn_label">Talk to {siteConfig.name}</span>
                <span className="btn_icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image_block rounded">
                <img src="/assets/images/about/about_image_app.png" alt="Resident top-up experience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section section_space section_decoration">
        <div className="container">
          <div className="heading_block text-center">
            <div className="badge style_2 text-uppercase">
              <i className="fa-solid fa-circle text-primary"></i>
              On the Phone
              <i className="fa-solid fa-circle text-primary"></i>
            </div>
            <h2 className="heading_text mb-0">Top up, watch balance, know when it stops</h2>
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
                      <Link href="/how-it-works">{feature.title}</Link>
                    </h3>
                    <p className="mb-0">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="btns_group">
            <Link className="btn bg-dark rounded-pill" href="/the-console">
              <span className="btn_label">See The Console</span>
              <span className="btn_icon">
                <ArrowIcon />
              </span>
            </Link>
          </div> */}
        </div>
      </section>

     
    </>
  );
}
