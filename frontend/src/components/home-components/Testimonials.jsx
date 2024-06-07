import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
} from "swiper/modules";

const recruiters = [
  { name: "Flipkart", logo: "images/1.jpg" },
  { name: "Infosys", logo: "images/2.jpg" },
  { name: "TCS", logo: "images/5.jpg" },
  { name: "Russian University", logo: "images/4.jpg" },
];

const Testimonials = () => {
  return (
    <div className="w-80 h-auto mx-auto">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        modules={[EffectCoverflow, EffectCube, Pagination, Autoplay]}
        className="mySwiper"
        infinite={true}
      >
        {recruiters.map((recruiter, index) => (
          <SwiperSlide key={index}>
            <img
              src={recruiter.logo}
              alt={recruiter.name}
              className="size-14  sm:size-20  md:size-24 lg:size-72 mx-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
