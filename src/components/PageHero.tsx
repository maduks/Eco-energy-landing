import Link from "next/link";
import { ecoShapes } from "@/lib/eco-assets";

type PageHeroProps = {
  title: string;
  breadcrumb: string;
};

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="page_header text-center bg-dark section_decoration overflow-hidden">
      <div className="container">
        <h1 className="page_title text-white">{title}</h1>
        <ul className="breadcrumb_nav unordered_list justify-content-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="active">
            <a href="#!">{breadcrumb}</a>
          </li>
        </ul>
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
      <div className="decoration_item shape_nate_flow_1">
        <img src="/assets/images/shapes/shape_nate_22.svg" alt="Shape Flow" />
      </div>
      <div className="decoration_item shape_nate_flow_2">
        <img src="/assets/images/shapes/shape_nate_23.svg" alt="Shape Flow" />
      </div>
      <div className="decoration_item shape_pattern_1">
        <img src="/assets/images/shapes/breadcrumb_shape_pattern_1.svg" alt="Shape Pattern" />
      </div>
      <div className="decoration_item shape_pattern_2">
        <img src="/assets/images/shapes/breadcrumb_shape_pattern_2.svg" alt="Shape Pattern" />
      </div>
    </section>
  );
}
