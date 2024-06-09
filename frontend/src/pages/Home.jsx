import MainCarousel from "../components/home-components/MainCarousel";
import WhatsDifferent from "../components/home-components/WhatsDifferent";
import Reserch from "../components/home-components/Reserch";
import WhyChooseGITS from "../components/home-components/WhyChooseGITS";
import Recruiters from "../components/home-components/Recruiters";
import LearningWithInnovation from "../components/home-components/LearningWithInnovation";
import OurPlacements from "../components/home-components/OurPlacements";
const Home = () => {
  return (
    <>
      <div className="space-y-8">
        <MainCarousel />
        <WhatsDifferent />
        <Reserch />
        <WhyChooseGITS />
        <OurPlacements />
        <LearningWithInnovation />
        <Recruiters />
      </div>
    </>
  );
};

export default Home;
