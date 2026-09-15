import type { Metadata } from "next";
import ArrowIcon from "@/components/ArrowIcon";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Econergy about your estate. Share your estate, tank size and flat count. Reach STL Africa in Lagos, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" breadcrumb="Contact" />

      <section className="contact_section section_space bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="comment_form p-lg-5">
                <div className="heading_block">
                  <h2 className="heading_text">Tell us about your estate</h2>
                  <p className="heading_description mb-0">
                    Send the estate name, tank size and how many flats. We reply with a deployment
                    outline, a hardware schedule and how the commercial split works.
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_name">
                          Name<sup>*</sup>
                        </label>
                        <input
                          id="input_name"
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_email">
                          Email<sup>*</sup>
                        </label>
                        <input
                          id="input_email"
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder={siteConfig.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">
                          Phone<sup>*</sup>
                        </label>
                        <input
                          id="input_phone"
                          className="form-control"
                          type="tel"
                          name="phone"
                          placeholder={siteConfig.phone}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_message">
                          Estate details<sup>*</sup>
                        </label>
                        <textarea
                          id="input_message"
                          className="form-control"
                          name="message"
                          placeholder="Estate name, location, tank size and number of flats..."
                          required
                        ></textarea>
                      </div>
                      <button className="btn text-dark" type="submit">
                        <span className="btn_label">Send message</span>
                        <span className="btn_icon ml-10">
                          <ArrowIcon fill="#012A2B" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_info_box p-5">
                <h3 className="heading_text">Contact Info</h3>
                <ul className="iconlist_block unordered_list_block">
                  <li>
                    <a href={`tel:${siteConfig.phoneTel}`}>
                      <span className="iconlist_icon">
                        <img src="/assets/images/icons/icon_calling_3.svg" alt="Icon Calling" />
                      </span>
                      <span className="iconlist_text">{siteConfig.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.email}`}>
                      <span className="iconlist_icon">
                        <img src="/assets/images/icons/icon_email_3.svg" alt="Icon Email" />
                      </span>
                      <span className="iconlist_text">{siteConfig.email}</span>
                    </a>
                  </li>
                </ul>
                <ul className="social_icons_block unordered_list mb-0">
                  <li>
                    <a aria-label="Twitter X" href="#!">
                      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.92704 6.35148L14.5111 0H13.1879L8.33921 5.5149L4.4666 0H0L5.85615 8.3395L0 15H1.32333L6.44364 9.17608L10.5334 15H15L8.92671 6.35148H8.92704ZM7.11456 8.41297L6.52121 7.58255L1.80014 0.974755H3.83269L7.64265 6.30746L8.236 7.13788L13.1885 14.0696H11.156L7.11456 8.41329V8.41297Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a aria-label="Facebook" href="#!">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a aria-label="Linkedin" href="#!">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <hr />
                <ul className="office_location iconlist_block unordered_list_block mb-0">
                  <li>
                    <span className="iconlist_text">
                      <strong className="text-dark d-block">{siteConfig.company}</strong>
                      {siteConfig.address} · Prepaid metered LPG for estates
                    </span>
                  </li>
                  <li>
                    <span className="iconlist_text">
                      <strong className="text-dark d-block">Product</strong>
                      {siteConfig.product} — {siteConfig.tagline}
                    </span>
                  </li>
                </ul>
                <hr />
                <ul className="iconlist_block unordered_list_block mb-0">
                  <li>
                    <span className="iconlist_text">
                      <strong className="text-dark d-block">Our Office Open Time:</strong>
                      Mon - Fri : 9:00 AM - 6:00 PM{" "}
                      <mark className="d-block text-danger">Saturday & Sunday : Closed</mark>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gmap_canvas bg-light">
        <iframe
          title="EcoEnergy Lagos office map"
          src="https://maps.google.com/maps?q=Lagos,%20Nigeria&t=&z=12&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </>
  );
}
