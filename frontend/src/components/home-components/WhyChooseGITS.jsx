import { Link } from "react-router-dom";

import Container from "../ui/Container";

const WhyChooseGITS = () => {
  const items = [
    {
      link: "/",
      icon: "fa-solid fa-book",
      title: "COURSES",
    },
    {
      link: "/",
      icon: "fa-solid fa-people-group",
      title: "PLACEMENTS",
    },
    {
      link: "/",
      icon: "fa-solid fa-trophy",
      title: "AWARDS",
    },
    {
      link: "/",
      icon: "fa-solid fa-newspaper",
      title: "NEWSTRACK",
    },
    {
      link: "/",
      icon: "fa-regular fa-file",
      title: "BROCHURE",
    },
    {
      link: "/",
      icon: "fa-solid fa-handshake-simple",
      title: "MOU's",
    },
  ];

  return (
    <>
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-3">
          <div className="w-full  py-6 px-2 rounded-xl bg-gradient-to-b from-primary/70 to-primary/20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 lg:grid-cols-3">
              {items.map((item, index) => (
                <div key={index} className="w-full px-1 md:py-1 lg:my-4">
                  <a
                    href={item.link}
                    className=" bg-yellow-100 hover:bg-primary/50 rounded-lg shadow-md text-center backdrop-blur-lg bg-opacity-50 grid grid-cols-1 gap-4 lg:gap-8 place-items-center py-4"
                  >
                    <div className="mx-auto ">
                      <i
                        className={`${item.icon} text-2xl sm:text-3xl lg:text-4xl`}
                      ></i>
                    </div>
                    <p className="mt-2 text-sm sm:text-base xl:text-lg font-semibold tracking-wider">
                      {item.title}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg sm:text-2xl font-semibold mb-4">Why GITS?</p>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-6 gap-2 flex flex-wrap">
              <span>REDEFINING</span>
              <span className="text-primary">ACADEMIC&nbsp;EXCELLENCE</span>
            </h2>
            <p className="mb-8 text-sm md:text-base text-justify">
              GITS has best in-class infrastructure, including the
              state-of-the-art research facilities and a modern digital library.
              As a multi-disciplinary College, GITS offers career-oriented
              courses at UG, PG and Doctoral levels, across diverse streams.
              Currently, more than 2000 students are enrolled across all
              programs. A well-qualified team of 70 faculty members is the asset
              of the University.
            </p>
            <Link
              to="why-gits"
              className="w-fit flex items-center gap-2 font-semibold text-white bg-secondary hover:scale-x-105 transition-all duration-200 px-4 py-2 md:px-6 md:py-4 rounded-md"
            >
              <span>Explore more</span>
              <span className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
        <div className="w-full h-1 bg-primary my-6" />
      </Container>
    </>
  );
};

export default WhyChooseGITS;
