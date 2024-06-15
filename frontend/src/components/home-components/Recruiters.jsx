import AnimatedWrapper from "../ui/AnimatedWrapper";
import Container from "../ui/Container";

import RecruiterCarousel from "./RecuiterCarousel";

const Recruiters = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2 mb-8 hidden lg:block z-10">
          <img
            src="images/recruiter-logo.png"
            alt="Students"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 h-auto text-center lg:text-left">
          <div className="w-full hidden lg:block">
            <AnimatedWrapper animateFrom="left">
              <Content />
            </AnimatedWrapper>
          </div>
          <div className="lg:hidden">
            <Content />
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-primary my-6" />
    </Container>
  );
};

export default Recruiters;

const Content = () => {
  return (
    <>
      <p className="text-lg sm:text-xl md:text-2xl text-primary mb-2">
        Top Recruiters
      </p>
      <h3 className="my-4 flex  lg:flex-col gap-2 lg:gap-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#231f20] items-center justify-center lg:items-start">
        <span className="block">FORMULATE</span>
        <span className="block">YOUR FUTURE!</span>
      </h3>
      <RecruiterCarousel />
    </>
  );
};
