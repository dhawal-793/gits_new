// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // const facilities = [
// //   {
// //     title: "Industry-Centric Centers",
// //     description: "Gain practical experience in our industry-centric centers.",
// //     image: "images/btech1.webp"
// //   },
// //   {
// //     title: "Fabrication Laboratory",
// //     description: "Shape engineering dreams in our Fabrication Laboratory.",
// //     image: "images/btech2.webp"
// //   },
// //   {
// //     title: "Aeronautical Jet Engine",
// //     description: "Explore aviation technology in our Aeronautical Jet Engine lab.",
// //     image: "images/btech3.webp"
// //   },
// //   {
// //     title: "Advanced Computing Lab",
// //     description: "Dive into advanced computing technologies.",
// //     image: "images/btech4.webp"
// //   },
// //   {
// //     title: "Robotics Workshop",
// //     description: "Learn robotics with hands-on projects.",
// //     image: "images/btech3.webp"
// //   }
// // ];

// // const FacilitiesCarousel = () => {
// //   return (
// //     <div className="flex justify-center items-center py-10">
// //       <div className="w-full max-w-7xl mx-auto px-4">
// //         <Swiper
// //           grabCursor={true}
// //           spaceBetween={100}
// //           slidesPerView={3}
// //           autoplay={{ delay: 3000 }}
// //           loop={true}
// //           modules={[Navigation, Pagination, Autoplay]}
// //           breakpoints={{
// //             0: { slidesPerView: 1 }, // 1 slide for small screens
// //             640: { slidesPerView: 1 }, // 1 slide for mobile screens
// //             768: { slidesPerView: 2 }, // 2 slides for tablets
// //             1024: { slidesPerView: 3 } // 3 slides for desktops
// //           }}
// //         >
// //           {facilities.map((facility, index) => (
// //             <SwiperSlide key={index}>
// //               <div className="relative rounded-xl overflow-hidden w-[22rem] h-[30rem]">
// //                 <img
// //                   src={facility.image}
// //                   alt={facility.title}
// //                   className="absolute inset-0 w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
// //                   <h3 className="text-lg mt-52 font-semibold">{facility.title}</h3>
// //                   <p className="">{facility.description}</p>
// //                 </div>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FacilitiesCarousel;

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

const FacilitiesCarousel = () => {
  return (
    <div className="pt-10 w-full">
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <CustomSlider>
          {facilities.map((facility, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative rounded-2xl overflow-hidden w-[21rem] md:w-[22.5rem] lg:w-[20rem] xl:w-[23rem] h-[28.3rem] md:h-[29.5rem] lg:h-[26.4rem] xl:h-[30.4rem] mx-auto">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 object-cover rounded-2xl object-center"
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

export default FacilitiesCarousel;

// const Slider = () => {
//   return (
//     <Swiper
//       grabCursor={true}
//       autoplay={{ delay: 3000 }}
//       loop={true}
//       modules={[Navigation, Pagination, Autoplay]}
//       breakpoints={{
//         640: { slidesPerView: 1, spaceBetween: 20 },
//         768: { slidesPerView: 2, spaceBetween: 20 },
//         1024: { slidesPerView: 3, spaceBetween: 20 },
//       }}
//     >
//       {facilities.map((facility, index) => (
//         <SwiperSlide key={index} className="">
//           <div className="relative rounded-2xl overflow-hidden w-full max-w-[23rem] h-[31.5rem] md:h-[30rem] mx-auto">
//             <img
//               src={facility.image}
//               alt={facility.title}
//               className="absolute inset-0 object-cover rounded-2xl object-center"
//             />
//             <div className="absolute inset-x-0 bottom-16 flex flex-col justify-center items-center text-white p-4">
//               <h3 className="text-lg mt-52 font-semibold text-shadow">
//                 {facility.title}
//               </h3>
//               <p className="text-shadow">{facility.description}</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

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

// const FacilitiesCarousel = () => {
//   return (
//     <div className="pt-10 w-full px-4 lg:px-0">
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="hidden lg:block mx-auto rounded-2xl overflow-hidden">
//           <Slider slidesPerView={3} spaceBetween={40} />
//         </div>
//         <div className="hidden sm:block lg:hidden mx-auto rounded-2xl overflow-hidden">
//           <Slider slidesPerView={2} spaceBetween={30} />
//         </div>
//         <div className="sm:hidden mx-auto rounded-2xl overflow-hidden">
//           <Slider/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacilitiesCarousel;

// const Slider = ({ slidesPerView = 1, spaceBetween = 20 }) => {
//   return (
//     <Swiper
//       grabCursor={true}
//       // autoplay={{ delay: 3000 }}
//       spaceBetween={spaceBetween}
//       loop={true}
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={slidesPerView}
//       // breakpoints={{
//       //   640: { slidesPerView: 1, spaceBetween: 20 },
//       //   768: { slidesPerView: 2, spaceBetween: 30 },
//       //   1024: { slidesPerView: 3, spaceBetween: 40 },
//       // }}
//     >
//       {facilities.map((facility, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative rounded-2xl overflow-hidden w-full h-[30rem]">
//             <img
//               src={facility.image}
//               alt={facility.title}
//               className="absolute inset-0 w-[100%] h-full object-cover rounded-2xl"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
//               <h3 className="text-lg mt-52 font-semibold"
//               style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
//               >
//                 {facility.title}
//               </h3>
//               <p
//                 style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
//               >
//                 {facility.description}
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
