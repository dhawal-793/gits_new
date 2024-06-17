import MainCarousel from "../components/home-components/MainCarousel";
import WhatsDifferent from "../components/home-components/WhatsDifferent";
import Reserch from "../components/home-components/Reserch";
import WhyChooseGITS from "../components/home-components/WhyChooseGITS";
import Recruiters from "../components/home-components/Recruiters";
import LearningWithInnovation from "../components/home-components/LearningWithInnovation";
import OurPlacements from "../components/home-components/OurPlacements";
import CorporateTour from "../components/home-components/CorporateTour";
import AnimatedWrapper from "../components/ui/AnimatedWrapper";
import Facilities from "../components/home-components/Facilities";
const Home = () => {
  return (
    <>
      <div className="space-y-8 w-full">
        <MainCarousel />
        <AnimatedWrapper animateFrom="bottom" delay={0.3}>
          <WhatsDifferent />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="right">
          <Reserch />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="left">
          <Facilities />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="bottom">
          <WhyChooseGITS />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="right">
          <OurPlacements />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <LearningWithInnovation />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <CorporateTour />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Recruiters />
        </AnimatedWrapper>
      </div>
    </>
  );
};

export default Home;
