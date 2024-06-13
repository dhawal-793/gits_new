import MainCarousel from "../components/home-components/MainCarousel";
import WhatsDifferent from "../components/home-components/WhatsDifferent";
import Reserch from "../components/home-components/Reserch";
import WhyChooseGITS from "../components/home-components/WhyChooseGITS";
import Recruiters from "../components/home-components/Recruiters";
import LearningWithInnovation from "../components/home-components/LearningWithInnovation";
import OurPlacements from "../components/home-components/OurPlacements";

import AnimatedWrapper from "../components/ui/AnimatedWrapper";

const Home = () => {
  return (
    <>
      <div className="space-y-8 w-full">
        <MainCarousel />
        <AnimatedWrapper animateFrom="bottom" delay={0.2}>
          <WhatsDifferent />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="right">
          <Reserch />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="left">
          <WhyChooseGITS />
        </AnimatedWrapper>
        <AnimatedWrapper animateFrom="right">
          <OurPlacements />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <LearningWithInnovation />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Recruiters />
        </AnimatedWrapper>
      </div>
    </>
  );
};

export default Home;
