import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CustomSlider = ({ children }) => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        1280: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSlider;
