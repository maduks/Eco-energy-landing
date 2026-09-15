import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { services } from "@/data/home";

export default function ServicesSection() {
  return (
    <section className="service_section section_space section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div className="badge style_2 text-uppercase">
            <i className="fa-solid fa-circle text-primary"></i>
            Platform Pieces
            <i className="fa-solid fa-circle text-primary"></i>
          </div>
          <h2 className="heading_text mb-0">What you get with Econergy</h2>
        </div>
        <div className="service_blocks_group row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={service.title}>
              <div className="service_block style_2">
                <div className="service_icon">
                  <img src={service.icon} alt={service.alt} />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <Link href={service.href}>{service.title}</Link>
                  </h3>
                  <p className="mb-0">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btns_group">
          <Link className="btn bg-dark rounded-pill" href="/services">
            <span className="btn_label">More Services</span>
            <span className="btn_icon">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
