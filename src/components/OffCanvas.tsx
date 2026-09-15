import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import { siteConfig } from "@/lib/site";

export default function OffCanvas() {
  return (
    <>
      <section className="offcanvas_wrapper">
        <div className="offcanvas_close_btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <h2 className="offcanvas_info_title mb-2">Metered gas for every flat</h2>
        <p>
          {siteConfig.product} handles metering, prepaid credit and valve control for estate LPG, from the central tank
          down to each apartment.
        </p>
        <Link className="btn bg-primary w-100" href="/contact">
          <span className="btn_label">Request a demo</span>
          <span className="btn_icon">
            <ArrowIcon />
          </span>
        </Link>

        <hr />

        <h3 className="offcanvas_info_title">Need Help?</h3>
        <ul className="iconlist_block unordered_list_block">
          <li>
            <a href={`tel:${siteConfig.phoneTel}`}>
              <span className="iconlist_icon">
                <img src="/assets/images/icons/icon_calling_4.svg" alt="Icon Calling" />
              </span>
              <span className="iconlist_text">{siteConfig.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${siteConfig.email}`}>
              <span className="iconlist_icon">
                <img src="/assets/images/icons/icon_mail.svg" alt="Icon Email" />
              </span>
              <span className="iconlist_text">{siteConfig.email}</span>
            </a>
          </li>
        </ul>

        <hr />

        <h3 className="offcanvas_info_title">Social Networks</h3>
        <ul className="social_icons_block unordered_list justify-content-start">
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
      </section>
      <div className="offcanvas_overlay"></div>
    </>
  );
}
