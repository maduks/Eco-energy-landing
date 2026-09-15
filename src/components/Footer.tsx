import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site_footer footer_layout_4 section_decoration">
      <div className="cta_section bg-dark">
        <div className="container">
          <div className="heading_block mb-0">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="heading_text mb-0 text-white">Ready to talk through your estate?</h2>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link className="btn bg-primary rounded-pill" href="/contact">
                  <span className="btn_label">Request a demo</span>
                  <span className="btn_icon">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <hr className="m-0" />
          <div className="contact_info">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_email.svg" alt="Icon Email" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Write to us</h3>
                    <p className="mb-0">{siteConfig.email}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_calling_5.svg" alt="Icon Calling" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Call Us (Nigeria)</h3>
                    <p className="mb-0">{siteConfig.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img src="/assets/images/icons/icon_map_mark.svg" alt="Icon Map Mark" />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Our Office</h3>
                    <p className="mb-0">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="newslatter_wrapper bg-dark"
          style={{ backgroundImage: "url('/assets/images/backgrounds/newslatter_bg_image_1.webp')" }}
        >
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="heading_block mb-0">
                <div className="badge style_2 text-uppercase">
                  <i className="fa-solid fa-circle text-primary"></i>
                  Newsletter
                </div>
                <h2 className="heading_text mb-0">
                  Get deployment notes and LPG ops updates
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="#">
                <div className="newslatter_form">
                  <input type="email" name="email" placeholder="Enter Your Email Address" />
                  <button type="submit" className="btn bg-primary">
                    <span className="btn_label">Subscribe</span>
                    <span className="btn_icon">
                      <ArrowIcon />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row justify-content-lg-between">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer_info_title">Quick Links</h3>
            <ul className="iconlist_block unordered_list_block mb-0">
              <li>
                <Link href="/how-it-works">
                  <span className="iconlist_text">How it Works</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="iconlist_text">Services</span>
                </Link>
              </li>
                <li>
                  <Link href="/the-app">
                    <span className="iconlist_text">The App</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="iconlist_text">Contact</span>
                  </Link>
                </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer_info_title">Useful Links</h3>
            <ul className="iconlist_block unordered_list_block mb-0">
              <li>
                <Link href="/partnership">
                  <span className="iconlist_text">Partnership</span>
                </Link>
              </li>
              <li>
                <Link href="/the-console">
                  <span className="iconlist_text">Ops Console</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="iconlist_text">Support</span>
                </Link>
              </li>
              <li>
                <a href="#!">
                  <span className="iconlist_text">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="iconlist_text">Terms of Use</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer_info_title">Our Platform</h3>
            <ul className="iconlist_block unordered_list_block mb-0">
              <li>
                <Link href="/services">
                  <span className="iconlist_text">Smart Metering</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="iconlist_text">Prepaid Vending</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="iconlist_text">Valve Control</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="iconlist_text">Tank Telemetry</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="iconlist_text">Reconciliation</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3 className="footer_info_title">Stakeholders</h3>
            <ul className="iconlist_block unordered_list_block mb-0">
              <li>
                <Link href="/partnership">
                  <span className="iconlist_text">Developers</span>
                </Link>
              </li>
              <li>
                <Link href="/partnership">
                  <span className="iconlist_text">Estate Managers</span>
                </Link>
              </li>
              <li>
                <Link href="/partnership">
                  <span className="iconlist_text">Gas Distributors</span>
                </Link>
              </li>
              <li>
                <Link href="/partnership">
                  <span className="iconlist_text">Investors</span>
                </Link>
              </li>
              <li>
                <Link href="/the-app">
                  <span className="iconlist_text">Residents</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_bottom bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="copyright_text mb-0">
                Copyright © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.company}. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="social_icons_block fc_social_icons_block unordered_list justify-content-center justify-content-lg-end">
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
                <li>
                  <a aria-label="Paper Plane" href="#!">
                    <i className="fa-solid fa-paper-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="decoration_item shape_nate_1">
        <img src="/assets/images/shapes/shape_nate_3.svg" alt="Shape Nate" />
      </div>
      <div className="decoration_item shape_nate_2">
        <img src="/assets/images/shapes/shape_nate_3.svg" alt="Shape Nate" />
      </div>
    </footer>
  );
}
