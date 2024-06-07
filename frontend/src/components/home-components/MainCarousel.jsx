import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";

const images = [
  "images/main_carousel_images/gits_collage.jpg",
  "images/main_carousel_images/gits_nba.jpeg",
  "images/main_carousel_images/gits_industry_automation.jpeg",
  "images/main_carousel_images/gits_innovation.jpeg",
  "images/main_carousel_images/gits_corporate_partners.jpeg",
  "images/main_carousel_images/gits_placements.jpeg",
  "images/main_carousel_images/gits_award_distribution.jpg",
  "images/main_carousel_images/gits_event_1.jpg",
  "images/main_carousel_images/gits_event_2.jpg",
];

const MainCarousel = () => {
  return (
    <div className="w-full mx-auto max-w-[2048px] h-auto">
      <Swiper
        speed={500}
        // parallax={true}
        grabCursor={true}
        // spaceBetween={20}
        // centeredSlides={true}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, EffectCreative]}
        className="mySwiper "
        infinite={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MainCarousel;
