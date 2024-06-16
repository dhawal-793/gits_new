// 
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const facilities = [
  {
    title: "Industry-Centric Centers",
    description: "Gain practical experience in our industry-centric centers.",
    image: "images/btech1.webp",
  },
  {
    title: "Fabrication Laboratory",
    description: "Shape engineering dreams in our Fabrication Laboratory.",
    image: "images/btech2.webp",
  },
  {
    title: "Aeronautical Jet Engine",
    description: "Explore aviation technology in our Aeronautical Jet Engine lab.",
    image: "images/btech3.webp",
  },
  {
    title: "Advanced Computing Lab",
    description: "Dive into advanced computing technologies.",
    image: "images/btech4.webp",
  },
  {
    title: "Robotics Workshop",
    description: "Learn robotics with hands-on projects.",
    image: "images/btech3.webp",
  },
];

const InnovationCarousel = () => {
  return (
    <div className="pt-10 w-full px-4 lg:px-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="hidden lg:block mx-auto overflow-hidden">
          <Slider slidesPerView={3} spaceBetween={40} />
        </div>
        <div className="hidden md:block lg:hidden mx-auto overflow-hidden">
          <Slider slidesPerView={2} spaceBetween={30} />
        </div>
        <div className="md:hidden mx-auto overflow-hidden">
          <Slider slidesPerView={1} spaceBetween={20} />
        </div>
      </div>
    </div>
  );
};

const Slider = ({ slidesPerView = 1, spaceBetween = 20 }) => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{ delay: 3000 }}
      spaceBetween={spaceBetween}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
    >
      {facilities.map((facility, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-t-full overflow-hidden w-full h-[30rem]">
            <img
              src={facility.image}
              alt={facility.title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-4 bg-gradient-to-t from-black via-transparent">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
              >
                {facility.title}
              </h3>
              <p className="text-center" style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                {facility.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InnovationCarousel;


