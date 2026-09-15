import { clientLogos } from "@/data/home";

export default function ClientsLogoSection() {
  const logos = [...clientLogos, ...clientLogos, ...clientLogos.slice(0, 4)];

  return (
    <div className="clients_logo_carousel text-center">
      <div className="badge style_2 text-uppercase mb-5">
        <i className="fa-solid fa-circle text-primary"></i>
        Estates We Work With
        <i className="fa-solid fa-circle text-primary"></i>
      </div>
      <div className="swiper-wrapper">
        {logos.map((logo, index) => (
          <div className="swiper-slide" key={`${logo}-${index}`}>
            <div className="image_block">
              <img src={`/assets/images/clients/${logo}`} alt="Client Logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
