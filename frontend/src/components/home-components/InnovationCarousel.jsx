import { SwiperSlide } from "swiper/react";
import CustomSlider from "./CustomSlider";

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
    description:
      "Explore aviation technology in our Aeronautical Jet Engine lab.",
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
    <div className="pt-10 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <CustomSlider>
          {facilities.map((facility, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative roundet-full overflow-hidden w-[21rem] md:w-[22.5rem] lg:w-[20rem] xl:w-[23rem] h-[28.3rem] md:h-[29.5rem] lg:h-[26.4rem] xl:h-[30.4rem] mx-auto">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 object-cover rounded-t-full object-center"
                />
                <div className="rounded-b-2xl absolute inset-0 mb-6 md:mb-5 pb-5 flex flex-col justify-end items-center text-center text-white px-4 bg-gradient-to-b from-transparent via-transparent to-black">
                  <h3 className="text-lg font-semibold text-shadow">
                    {facility.title}
                  </h3>
                  <p className="text-shadow">{facility.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

export default InnovationCarousel;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const facilities = [
//   {
//     title: "Industry-Centric Centers",
//     description: "Gain practical experience in our industry-centric centers.",
//     image: "images/btech1.webp",
//   },
//   {
//     title: "Fabrication Laboratory",
//     description: "Shape engineering dreams in our Fabrication Laboratory.",
//     image: "images/btech2.webp",
//   },
//   {
//     title: "Aeronautical Jet Engine",
//     description: "Explore aviation technology in our Aeronautical Jet Engine lab.",
//     image: "images/btech3.webp",
//   },
//   {
//     title: "Advanced Computing Lab",
//     description: "Dive into advanced computing technologies.",
//     image: "images/btech4.webp",
//   },
//   {
//     title: "Robotics Workshop",
//     description: "Learn robotics with hands-on projects.",
//     image: "images/btech3.webp",
//   },
// ];

// const InnovationCarousel = () => {
//   return (
//     <div className="pt-10 w-full px-4 lg:px-0">
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="hidden lg:block mx-auto overflow-hidden">
//           <Slider slidesPerView={3} spaceBetween={40} />
//         </div>
//         <div className="hidden md:block lg:hidden mx-auto overflow-hidden">
//           <Slider slidesPerView={2} spaceBetween={30} />
//         </div>
//         <div className="md:hidden mx-auto overflow-hidden">
//           <Slider slidesPerView={1} spaceBetween={20} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Slider = ({ slidesPerView = 1, spaceBetween = 20 }) => {
//   return (
//     <Swiper
//       grabCursor={true}
//       autoplay={{ delay: 3000 }}
//       spaceBetween={spaceBetween}
//       loop={true}
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={slidesPerView}
//       breakpoints={{
//         640: { slidesPerView: 1, spaceBetween: 20 },
//         768: { slidesPerView: 2, spaceBetween: 30 },
//         1024: { slidesPerView: 3, spaceBetween: 40 },
//       }}
//     >
//       {facilities.map((facility, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative rounded-t-full overflow-hidden w-full h-[30rem]">
//             <img
//               src={facility.image}
//               alt={facility.title}
//               className="absolute inset-0 w-full h-full object-cover rounded-t-full"
//             />
//             <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-4 bg-gradient-to-t from-black via-transparent">
//               <h3
//                 className="text-lg font-semibold mb-2"
//                 style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
//               >
//                 {facility.title}
//               </h3>
//               <p className="text-center" style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}>
//                 {facility.description}
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default InnovationCarousel;
