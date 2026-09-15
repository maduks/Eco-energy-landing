import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import AboutTicker from "./AboutTicker";

const highlights = [
  "Top-ups land on the meter as soon as payment clears.",
  "Credit open. Empty closed. No arguing at the gate.",
] as const;

const funfacts = [
  { count: "20", suffix: "+", title: "Years under STL Africa." },
  { count: "400", suffix: "+", title: "Flats on meters." },
  { count: "100", suffix: "%", title: "Top-ups matched to supply." },
] as const;

export default function AboutSection() {
  return (
    <section className="about_section section_space section_decoration pb-0 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="heading_block mb-4">
              <div className="badge style_2 text-uppercase">
                <i className="fa-solid fa-circle text-primary"></i>
                About Econergy
                <i className="fa-solid fa-circle text-primary"></i>
              </div>
              <h2 className="heading_text">Centralised LPG without the manual mess</h2>
              <p className="heading_description mb-0">
                Estates want one tank, not a corridor full of cylinders. The hard part is measuring
                use, collecting payment and shutting supply when credit is gone. Econergy ties
                those together. The meter reports. The platform charges. The valve does the rest.
              </p>
            </div>
            <ul className="iconlist_block unordered_list_block mb-5">
              {highlights.map((text) => (
                <li key={text}>
                  <span className="iconlist_icon">
                    <img src="/assets/images/icons/icon_check_2.svg" alt="Check Icon" />
                  </span>
                  <span className="iconlist_text">{text}</span>
                </li>
              ))}
            </ul>
            <Link className="btn bg-primary rounded-pill" href="/how-it-works">
              <span className="btn_label">See How It Works</span>
              <span className="btn_icon">
                <ArrowIcon />
              </span>
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="image_block rounded">
              <img src="/assets/images/about/about_image_4.png" alt="Metered LPG infrastructure" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="financial_analyst_funfact ps-lg-4">
              {funfacts.map((item) => (
                <div className="funfact_block left_layout" key={item.title}>
                  <div className="funfact_value mb-0">
                    <span className="odometer" data-count={item.count}>
                      0
                    </span>
                    <span>{item.suffix}</span>
                  </div>
                  <h4 className="funfact_title mb-0">{item.title}</h4>
                </div>
              ))}
              <AboutTicker />
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
  );
}
