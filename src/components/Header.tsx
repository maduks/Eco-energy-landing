"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site_header header_layout_2">
      <div className="header_top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-4 col-6 d-flex align-items-center">
              <div className="site_logo">
                <Link className="site_link" href="/">
                  <img
                    src="/assets/images/site_logo/eco_logos_clean.png"
                    alt={`${siteConfig.name} Logo`}
                    
                  />
                </Link>
              </div>
              <div className="office_hour_text text-uppercase d-none d-lg-inline-block">
                {siteConfig.hours}
              </div>
            </div>
            <div className="col-md-6 col-sm-8 col-6 d-flex align-items-center justify-content-end">
              <a className="hotline_btn" href={`tel:${siteConfig.phoneTel}`}>
                <span className="btn_icon">
                  <img src="/assets/images/icons/icon_calling_4.svg" alt="Icon Calling" />
                </span>
                <span className="btn_label" data-text={`Hotline: ${siteConfig.hotline}`}>
                  Hotline: {siteConfig.hotline}
                </span>
              </a>
              {/* <div className="language_dropdown dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="flag">
                    <img src="/assets/images/flags/flag_usa.webp" alt="English" />
                  </span>
                  <span className="name">English</span>
                </button>
                <div className="dropdown-menu">
                  <ul className="unordered_list_block">
                    <li className="dropdown-item">
                      <span className="flag">
                        <img src="/assets/images/flags/flag_usa.webp" alt="English" />
                      </span>
                      <span className="name">English</span>
                    </li>
                    <li className="dropdown-item">
                      <span className="flag">
                        <img src="/assets/images/flags/flag_portugal.webp" alt="Portuguese" />
                      </span>
                      <span className="name">Portuguese</span>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom stricky">
        <div className="container-fluid header_bottom_bar">
          <nav className="main_menu navbar navbar-expand-lg">
            <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
              <ul className="main_menu_list unordered_list justify-content-center">
                {navLinks.map((link) =>
                  link.children ? (
                    <li
                      key={link.href}
                      className={`dropdown${
                        link.children.some((c) => isActive(c.href)) || isActive(link.href) ? " active" : ""
                      }`}
                    >
                      <a
                        className="nav-link"
                        href="#"
                        id={`${link.label.toLowerCase().replace(/\s+/g, "_")}_submenu`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {link.label}
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`${link.label.toLowerCase().replace(/\s+/g, "_")}_submenu`}
                      >
                        {link.children.map((child) => (
                          <li key={child.href} className={isActive(child.href) ? "active" : undefined}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={link.href} className={isActive(link.href) ? "active" : undefined}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </nav>
          <ul className="btns_group p-0 m-0 unordered_list justify-content-center justify-content-lg-end">
            <li>
              <button
                className="mobile_menu_btn text-white rounded-pill"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_menu_dropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="far fa-bars"></i>
              </button>
            </li>
            <li>
              <Link className="btn bg-dark rounded-pill" href="/contact">
                <span className="btn_icon">
                  <i className="fa-solid fa-user"></i>
                </span>
                <span className="btn_label">Book Demo</span>
              </Link>
            </li>
            <li>
              <button className="offcanvas_btn icon_block" type="button">
                <i className="fa-regular fa-grid-2"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
