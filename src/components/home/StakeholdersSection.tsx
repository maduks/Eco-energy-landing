import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { projects, stakeholders } from "@/data/home";
import { ecoShapes } from "@/lib/eco-assets";

export default function StakeholdersSection() {
  return (
    <div className="fc_decoration_wrap bg-dark section_decoration section_space overflow-hidden">
      <div className="container">
        <section className="team_section section_space pt-0">
          <div className="heading_block text-white">
            <div className="row">
              <div className="col-lg-7">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Who Uses It
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text mb-0">Made for the people on site</h2>
              </div>
              <div className="col-lg-5">
                <p className="heading_description mb-0 ps-lg-5">
                  Developers planning piped gas, managers running day-to-day ops, distributors
                  filling tanks, and residents who just want the cooker to work. Econergy
                  covers that whole chain.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {stakeholders.map((person) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={person.name}>
                <div className="team_block style_2">
                  <div className="team_member_image">
                    <img src={`/assets/images/team/${person.image}`} alt={person.name} />
                  </div>
                  <div className="team_member_content">
                    <h3 className="team_member_name">{person.name}</h3>
                    <p>{person.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio_section">
          <div className="row justify-content-lg-between">
            <div className="col-lg-5">
              <div className="heading_block text-white mb-lg-0">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Live Sites
                  <i className="fa-solid fa-circle text-primary"></i>
                </div>
                <h2 className="heading_text">Estates already on the network</h2>
                <p className="heading_description mb-5">
                  Central tank, flat meters and prepaid valves installed as one package. Same stack
                  from Lekki to Abuja estates.
                </p>
                <Link className="btn bg-primary rounded-pill" href="/contact">
                  <span className="btn_label">Request a demo</span>
                  <span className="btn_icon">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
            {projects.map((project) => (
              <div
                className={project.featured ? "col-lg-6" : "col-lg-4 col-md-6 col-sm-6"}
                key={project.title}
              >
                <Link className="image_hover_effect_block live_site_card" href="/contact">
                  <span className="image_wrap">
                    <img src={`/assets/images/projects/${project.image}`} alt={project.title} />
                  </span>
                  <span className="content_wrap">
                    <strong className="item_title">{project.title}</strong>
                    <small className="item_tag">{project.tag}</small>
                    <span className="item_caption">{project.caption}</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="decoration_item shape_coin wow fadeInUp" data-wow-delay=".1s">
        <img src={ecoShapes.tank} alt="Gas tank" />
      </div>
      <div className="decoration_item shape_note_1 wow fadeInUp" data-wow-delay=".2s">
        <img src={ecoShapes.meter} alt="Gas meter" />
      </div>
      <div className="decoration_item shape_note_2 wow fadeInUp" data-wow-delay=".1s">
        <img src={ecoShapes.valve} alt="Gas valve" />
      </div>
      <div className="decoration_item shape_percent wow fadeInUp" data-wow-delay=".2s">
        <img src={ecoShapes.flame} alt="Gas flame" />
      </div>
      <div className="decoration_item shape_nate_1 wow fadeInUp" data-wow-delay=".1s">
        <img src="/assets/images/shapes/shape_nate_22.svg" alt="Shape Flow" />
      </div>
      <div className="decoration_item shape_nate_2 wow fadeInUp" data-wow-delay=".2s">
        <img src="/assets/images/shapes/shape_nate_23.svg" alt="Shape Flow" />
      </div>
    </div>
  );
}
