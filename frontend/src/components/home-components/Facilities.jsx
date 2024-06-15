import React from 'react';
import FacilitiesCarousel from './FacilitiesCarousel';

const Facilities = () => {
  return (
    <div className="text-center my-8">
      <h1 className="text-xl sm:text-5xl ">Here Is How We Make You The Best</h1>
      <h2 className="text-xl sm:text-4xl font-bold mt-4">
        With Our 200+ Engineering Facilities  <br/>For Practical Training
      </h2>
      <div className="mt-8">
        <FacilitiesCarousel />
      </div>
    </div>
  );
};

export default Facilities;
