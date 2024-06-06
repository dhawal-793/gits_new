

import React from 'react';

const SectionPage = () => {
  const items = [
    {
      link: "https://v1.panoskin.com/?tour=5f1aef29f3c94e38a84263d8#closing-modal",
      icon: "fa-solid fa-book",
      title: "COURSES",
    },
    {
      link: "muj-faculties.php",
      icon: "fa-solid fa-people-group",
      title: "PLACEMENTS",
    },
    {
      link: "sports.php",
      icon: "fa-solid fa-trophy",
      title: "AWARDS",
    },
    {
      link: "https://jaipur.manipal.edu/img/pdf/research/Flyer-Central%20Research%20Facilities_11zon.pdf",
      icon: "fa-solid fa-newspaper",
      title: "NEWSTRACK",
    },
    {
      link: "central-library.php",
      icon: "fa-regular fa-file",
      title: "BROCHURE",
    },
    {
      link: "indian-scholarship.php",
      icon: "fa-solid fa-handshake-simple",
      title: "MOU's",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-5/12 px-4 mb-6 hidden md:block">
          <h3 className="text-2xl font-bold mb-4">Why GITS?</h3>
          <h2 className="text-3xl font-bold mb-6">
            REDEFINING <span className="text-primary">ACADEMIC</span><span className="text-primary">EXCELLENCE</span>
          </h2>
          <p className="mb-4">
            GITS has best in-class infrastructure, including the state-of-the-art research facilities and a modern digital library.
            As a multi-disciplinary College, GITS offers career-oriented courses at UG, PG and Doctoral levels, across diverse streams.
            Currently, more than 2000 students are enrolled across all programs. A well-qualified team of 70 faculty members is the asset of the University.
          </p>
          <a href="why-muj.php" className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Explore more &nbsp; <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="w-full md:w-6/12 md:ml-4 p-6 rounded-lg bg-orange-gradient bg-custom-gradient">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="w-full px-2 mb-4">
                <div className="bg-yellow-100 p-4 sm:p-6 hover:bg-primary hover:bg-opacity-40 rounded-lg shadow-md text-center backdrop-blur-lg bg-opacity-50">
                  <a href={item.link}>
                    <div className="mx-auto mb-2 sm:mb-4">
                      <i className={`${item.icon} text-2xl sm:text-3xl lg:text-4xl`}></i>
                    </div>
                    <h4 className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                      {item.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[60rem]  sm:h-1 lg:h-1 mt-16 bg-primary mx-auto "></div>
    </div>
    
  );
};

export default SectionPage;

