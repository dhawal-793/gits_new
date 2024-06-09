import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const recruiters = [
  {
    name: "Amazon",
    logo: "images/recruiters/1.jpg",
  },
  {
    name: "Flipkart",
    logo: "images/recruiters/2.jpg",
  },
  {
    name: "Microsoft",
    logo: "images/recruiters/3.jpg",
  },
  {
    name: "Infosys",
    logo: "images/recruiters/4.jpg",
  },
  {
    name: "TCS",
    logo: "images/recruiters/5.jpg",
  },
];

const RecruiterCarousel = () => {
  return (
    <div className="w-full h-auto mx-auto">
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={true}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="pb-6"
        infinite={true}
      >
        {recruiters.map((recruiter, index) => (
          <SwiperSlide key={index}>
            <img
              src={recruiter.logo}
              alt={recruiter.name}
              className="size-24 sm:size-32 lg:size-40 mx-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecruiterCarousel;
