import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { ecoShapes } from "@/lib/eco-assets";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for was moved, removed, renamed or never existed.",
};

export default function NotFound() {
  return (
    <section className="error_section text-center section_decoration">
      <div className="container">
        <div className="error_image">
          <img src="/assets/images/404_error_image.webp" alt="404 Error Image" />
        </div>
        <h1>Hi 👋 Sorry We Can&apos;t Find That Page!</h1>
        <p>The page you are looking for was moved, removed, renamed or never existed.</p>
        <div className="form-group">
          <input
            className="form-control"
            type="search"
            name="search"
            placeholder="Search your keyword"
          />
          <button type="submit" className="icon_block">
            <img src="/assets/images/icons/icon_search_2.svg" alt="Icon Search" />
          </button>
        </div>
        <div className="btns_group pb-0">
          <Link className="btn bg-dark" href="/">
            <span className="btn_label">Take Me Home</span>
            <span className="btn_icon">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
      <div className="decoration_item shape_coin wow fadeInUp" data-wow-delay=".1s">
        <img src={ecoShapes.tank} alt="Gas tank" />
      </div>
      <div className="decoration_item shape_note_1 wow fadeInUp" data-wow-delay=".2s">
        <img src={ecoShapes.meter} alt="Gas meter" />
      </div>
      <div className="decoration_item shape_nate_1">
        <img src="/assets/images/shapes/shape_nate_3.svg" alt="Shape Nate" />
      </div>
      <div className="decoration_item shape_nate_2">
        <img src="/assets/images/shapes/shape_nate_4.svg" alt="Shape Nate" />
      </div>
    </section>
  );
}
