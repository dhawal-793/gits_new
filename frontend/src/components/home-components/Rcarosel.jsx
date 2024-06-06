
import React from 'react';
import RecruiterCarousel from './Recuiter';

const HomePage = () => {
  return (
    <div className="bg-white sm:min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 hidden md:block">
            <img
              src="images/recruiter-logo.png"
              alt="Students"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-14 h-auto text-center md:text-left">
            <h1 className="text-lg md:text-2xl text-primary mb-2">Top Recruiter</h1>
            <h1 className="text-2xl md:text-5xl font-semibold text-[#231f20] hidden md:block sm:block lg:block pt-4 md:pt-8">FORMULATE</h1>
            <h1 className="text-2xl md:text-5xl font-semibold text-[#231f20] hidden md:block sm:block lg:block pt-4 pb-8 md:pb-10">YOUR FUTURE!</h1>
            <RecruiterCarousel />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default HomePage;
