// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const RecruiterCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       }
//     ]
//   };

//   const recruiters = [
//     { name: 'Flipkart', logo: 'images/1.jpg' },
//     { name: 'Infosys', logo: 'images/2.jpg' },
//     { name: 'TCS', logo: 'images/5.jpg' },
//     { name: 'Russian University', logo: 'images/4.jpg' }
//   ];

//   return (
//     <div className="sm:mt-8 bg-white">
//       <Slider {...settings}>
//         {recruiters.map((recruiter, index) => (
//           <div key={index} className="p-2">
//             <img
//               src={recruiter.logo}
//               alt={recruiter.name}
//               className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 mx-auto object-contain"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default RecruiterCarousel;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RecruiterCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const recruiters = [
    { name: 'Flipkart', logo: 'images/1.jpg' },
    { name: 'Infosys', logo: 'images/2.jpg' },
    { name: 'TCS', logo: 'images/5.jpg' },
    { name: 'Russian University', logo: 'images/4.jpg' }
  ];

  return (
    <div className="sm:mt-8 bg-white">
      <Slider {...settings}>
        {recruiters.map((recruiter, index) => (
          <div key={index} className="p-2">
            <img
              src={recruiter.logo}
              alt={recruiter.name}
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 mx-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecruiterCarousel;
