import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { blogs } from "@/data/home";

export default function BlogSection() {
  return (
    <section className="blog_section section_space section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div className="badge style_2 text-uppercase">
            <i className="fa-solid fa-circle text-primary"></i>
            From the Desk
            <i className="fa-solid fa-circle text-primary"></i>
          </div>
          <h2 className="heading_text mb-0">Notes on estate LPG</h2>
        </div>

        <div className="row">
          {blogs.map((post) => (
            <div className="col-lg-4" key={post.title}>
              <div className="blog_post_block">
                <div className="post_image">
                  <Link href="/how-it-works">
                    <img src={`/assets/images/blogs/${post.image}`} alt={post.title} />
                  </Link>
                </div>
                <div className="post_content">
                  <ul className="post_meta unordered_list text-uppercase">
                    <li>
                      <a href="#!">
                        <span className="meta_icon">
                          <img src="/assets/images/icons/icon_tag.svg" alt="Icon tag" />
                        </span>
                        <span className="meta_label">{post.tag}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="meta_icon">
                          <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" />
                        </span>
                        <span className="meta_label">{post.date}</span>
                      </a>
                    </li>
                  </ul>
                  <h3 className="post_title">
                    <Link href="/how-it-works">{post.title}</Link>
                  </h3>
                  <Link className="btn-link" href="/how-it-works">
                    <span className="btn_label">Read More</span>
                    <span className="btn_icon">
                      <ArrowIcon fill="#615959" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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
