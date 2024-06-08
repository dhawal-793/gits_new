import Carousel from "../components/home-components/Carousel";
import WhatsDifferent from "../components/home-components/WhatsDifferent";
import HomePage from "../components/home-components/Rcarosel";
import Reserch from "../components/home-components/Reserch";
import SectionPage from "../components/home-components/Section3";
import PlacementInfo from "../components/home-components/Section4";
import LearningComponent from "../components/home-components/Inovation";
const Home = () => {
  return (
    <>
      <Carousel />
      <WhatsDifferent />
      <Reserch/>
      <SectionPage/>
      <PlacementInfo/>
      <HomePage />
      <LearningComponent/>
      
     
    </>
  );
};

export default Home;
