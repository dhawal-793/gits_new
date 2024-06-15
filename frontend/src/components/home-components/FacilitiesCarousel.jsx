// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const facilities = [
//   {
//     title: "Industry-Centric Centers",
//     description: "Gain practical experience in our industry-centric centers.",
//     image: "images/btech1.webp"
//   },
//   {
//     title: "Fabrication Laboratory",
//     description: "Shape engineering dreams in our Fabrication Laboratory.",
//     image: "images/btech2.webp"
//   },
//   {
//     title: "Aeronautical Jet Engine",
//     description: "Explore aviation technology in our Aeronautical Jet Engine lab.",
//     image: "images/btech3.webp"
//   },
//   {
//     title: "Advanced Computing Lab",
//     description: "Dive into advanced computing technologies.",
//     image: "images/btech4.webp"
//   },
//   {
//     title: "Robotics Workshop",
//     description: "Learn robotics with hands-on projects.",
//     image: "images/btech3.webp"
//   }
// ];

// const FacilitiesCarousel = () => {
//   return (
//     <div className="flex justify-center items-center py-10">
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <Swiper
//           grabCursor={true}
//           spaceBetween={100}
//           slidesPerView={3}
//           autoplay={{ delay: 3000 }}
//           loop={true}
//           modules={[Navigation, Pagination, Autoplay]}
//           breakpoints={{
//             0: { slidesPerView: 1 }, // 1 slide for small screens
//             640: { slidesPerView: 1 }, // 1 slide for mobile screens
//             768: { slidesPerView: 2 }, // 2 slides for tablets
//             1024: { slidesPerView: 3 } // 3 slides for desktops
//           }}
//         >
//           {facilities.map((facility, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative rounded-xl overflow-hidden w-[22rem] h-[30rem]">
//                 <img
//                   src={facility.image}
//                   alt={facility.title}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
//                   <h3 className="text-lg mt-52 font-semibold">{facility.title}</h3>
//                   <p className="">{facility.description}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default FacilitiesCarousel;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const facilities = [
  {
    title: "Industry-Centric Centers",
    description: "Gain practical experience in our industry-centric centers.",
    image: "images/btech1.webp"
  },
  {
    title: "Fabrication Laboratory",
    description: "Shape engineering dreams in our Fabrication Laboratory.",
    image: "images/btech2.webp"
  },
  {
    title: "Aeronautical Jet Engine",
    description: "Explore aviation technology in our Aeronautical Jet Engine lab.",
    image: "images/btech3.webp"
  },
  {
    title: "Advanced Computing Lab",
    description: "Dive into advanced computing technologies.",
    image: "images/btech4.webp"
  },
  {
    title: "Robotics Workshop",
    description: "Learn robotics with hands-on projects.",
    image: "images/btech3.webp"
  }
];

const FacilitiesCarousel = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          grabCursor={true}
          spaceBetween={100}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 slide for small screens
            640: { slidesPerView: 1 }, // 1 slide for mobile screens
            768: { slidesPerView: 2 }, // 2 slides for tablets
            1024: { slidesPerView: 3 } // 3 slides for desktops
          }}
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden w-[22rem] h-[30rem]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-lg mt-52 font-semibold text-shadow">{facility.title}</h3>
                  <p className="text-shadow">{facility.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FacilitiesCarousel;
