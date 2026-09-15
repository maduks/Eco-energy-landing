import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { faqs } from "@/data/home";

export default function FaqSection() {
  return (
    <section className="faq_section section_space section_decoration">
      <div className="container">
        <div className="row align-items-start gy-5">
          <div className="col-lg-5">
            <div className="heading_block mb-0 sticky-lg-top" style={{ top: 120 }}>
              <div className="badge style_2 text-uppercase">
                <i className="fa-solid fa-circle text-primary"></i>
                FAQ
                <i className="fa-solid fa-circle text-primary"></i>
              </div>
              <h2 className="heading_text">Common questions</h2>
              <p className="heading_description mb-4">
                Short answers on metering, prepaid top-ups and valves. Need a deployment plan for
                your estate? Request a demo.
              </p>
              <Link className="btn bg-dark rounded-pill" href="/contact">
                <span className="btn_label">Request a demo</span>
                <span className="btn_icon">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="accordion home_faq_accordion" id="home_faq_accordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={faq.id}>
                  <div className="accordion-header" id={`heading_${faq.id}`}>
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
                    data-bs-parent="#home_faq_accordion"
                    aria-labelledby={`heading_${faq.id}`}
                  >
                    <div className="accordion-body">
                      <p className="m-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
