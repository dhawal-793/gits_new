// src/components/HomePage.js

import React from 'react';

import CustomButton from "../CustomButton";
const Reserch = () => {
  return (
    <div className="bg-white  ">
      <div className="container mx-auto px-2 sm:px-4 pt-10 sm:py-16">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          
          <div className="md:w-1/2 sm:pl-14 lg:pl-14 align-text-top md:text-left">
            <h1 className="text-2xl  text-primary ">Reserch at GITS</h1>
            <h1 className="text-3xl lg:text-5xl sm:text-5xl font-semibold text-[#231f20] pt-8  ">EXPLORING THE</h1>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-[#231f20] pt-4 pb-10 ">UNEXPLORED</h1>
            <p>Rapid growth in scientific knowledge is an indication of quest for innovations which has an impact on economic and societal development. Science, technology and innovation is often initiated in the College environment and it is also the mission of Geetanjali Institute Of Technical Studies (GITS).</p>
            <div className='text-left pb-8 flex items-start pt-6' > 
            <CustomButton /> 
            </div>
            {/* <div className={`hidden lg:block  ${isFixed && "lg:hidden"}`}>
              <CustomButton />
            </div> */}
          </div>
          <div className="md:w-1/2 sm:mb-8 lg:mb-8 md:mb-0 relative" >
            <img
              src="images/reserch.jpg"
              alt="Students"
              className="w-full h-auto rounded-2xl  shadow-lg"
            />
          </div>
        </div>
              
      </div>
      <div className="w-[60rem]  sm:h-1 lg:h-1 bg-primary mx-auto mb-6 lg:mb-10"></div>
    </div>
    
  );
};

export default Reserch;

