import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "images/carousel_images/clg_b.jpg",
  "images/carousel_images/gits_nba.jpeg",
  "images/carousel_images/Slide_Corporate.jpeg",
  "images/carousel_images/Slide_Placement.jpeg",
  "images/carousel_images/slide5.jpg",
  "images/carousel_images/slide14.jpg",
  "images/carousel_images/m_banner.jpeg",
];

// const NextArrow = ({ onClick }) => {
//   return (
//     <div
//       className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
//       onClick={onClick}
//     >
//       <i className="fa-solid fa-chevron-right text-3xl sm:xl text-primary text-opacity-50 hover:text-opacity-80"></i>
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div
//       className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
//       onClick={onClick}
//     >
//       <i className="fa-solid fa-chevron-left text-3xl sm:xl text-primary text-opacity-50 hover:text-opacity-80"></i>
//     </div>
//   );
// };

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    // swipeToSlide: true,
    // adaptiveHeight:true,
    // pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto max-h-[45rem]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
