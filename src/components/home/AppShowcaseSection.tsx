import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";

const highlights = [
  "Balance, flow rate and valve state on one screen",
  "Top up by card, transfer or USSD",
  "Low-credit nudges before the pot goes cold",
] as const;

export default function AppShowcaseSection() {
  return (
    <section className="app_showcase_section section_space section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div className="badge style_2 text-uppercase">
            <i className="fa-solid fa-circle text-primary"></i>
            The Resident App
            <i className="fa-solid fa-circle text-primary"></i>
          </div>
          <h2 className="heading_text mb-0">Gas credit in your pocket</h2>
          <p className="heading_description mb-0 mx-auto" style={{ maxWidth: 640 }}>
            Full Econergy app on iOS and Android. Residents see credit, top up instantly, and know
            when the valve is open — without a trip to the facility office.
          </p>
        </div>

        <div className="app_showcase_frame wow fadeInUp" data-wow-delay=".1s">
          <div className="app_phone_shell">
            <img
              src="/assets/images/about/mobile_app_image.png"
              alt="Econergy resident app full frame screenshot"
            />
          </div>
        </div>

        <ul className="iconlist_block unordered_list justify-content-center flex-wrap gap-4 mb-5 mt-5">
          {highlights.map((text) => (
            <li key={text}>
              <span className="iconlist_icon">
                <img src="/assets/images/icons/icon_check_2.svg" alt="" />
              </span>
              <span className="iconlist_text">{text}</span>
            </li>
          ))}
        </ul>

        <ul className="btns_group unordered_list justify-content-center pt-0">
          <li>
            <Link className="btn bg-dark rounded-pill" href="/the-app">
              <span className="btn_label">Explore the app</span>
              <span className="btn_icon">
                <ArrowIcon />
              </span>
            </Link>
          </li>
          <li>
            <a className="btn bg-primary rounded-pill" href="#!">
              <span className="btn_icon">
                <i className="fa-brands fa-apple"></i>
              </span>
              <span className="btn_label">App Store</span>
            </a>
          </li>
          <li>
            <a className="btn bg-primary rounded-pill" href="#!">
              <span className="btn_icon">
                <i className="fa-brands fa-google-play"></i>
              </span>
              <span className="btn_label">Google Play</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="decoration_item shape_nate_1">
        <img src="/assets/images/shapes/shape_nate_3.svg" alt="" />
      </div>
      <div className="decoration_item shape_nate_2">
        <img src="/assets/images/shapes/shape_nate_4.svg" alt="" />
      </div>
    </section>
  );
}
