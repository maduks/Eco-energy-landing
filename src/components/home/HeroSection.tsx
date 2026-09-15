import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="container-fluid">
      <div className="hero_radius_clip">
        <div
          className="hero_section hero_financial_consulting bg-dark"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/hero_bg_pattern_white.webp')",
          }}
        >
          <div className="row">
            <div className="col-lg-7 wow fadeInRight" data-wow-delay=".1s">
              <h1 className="hero_title text-white mb-0">
                Power Your Estate with
                <mark style={{ backgroundColor: "Active", borderRadius: "10px", top: "5px" }}>
                 Smarter
                </mark>{" "}
                Gas Management.{" "}
              </h1>
            </div>
            <div className="col-lg-5 wow fadeInRight" data-wow-delay=".2s">
              <p>
                Econergy runs prepaid, metered LPG for residential estates across Nigeria.
                Residents fund credit on their phone. The valve stays open while they have balance,
                and shuts when it runs out.
              </p>
              <Link className="btn bg-primary rounded-pill" href="/contact">
                <span className="btn_label">Request a demo</span>
                <span className="btn_icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
          <div className="image_block wow fadeInUp" data-wow-delay=".3s">
            <img src="/assets/images/hero/hero_image_2.png" alt="Econergy platform" />
          </div>
        </div>
      </div>
    </section>
  );
}
