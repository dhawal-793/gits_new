// import React from "react";

function PlacementInfo() {
    return (
      <div className="container  px-4 py-10  sm:rounded-s-full bg-black  bg-cover bg-opacity-80" style={{ backgroundImage: 'url("images/student.jpg")', backgroundBlendMode: 'multiply' }}>
        <div className="flex justify-center">
          <div className="text-center">
            <div className="border-t-2 backdrop-blur- border-custom-gray mb-5"></div>
            <h2 className=" font-semibold text-yellow-200 text-3xl">Welcome To GITS</h2>
            <h2 className="text-white font-light text-2xl">Before You Start!</h2>
            <h1 className="text-white font-light text-3xl">Your Engineering Journey Ends With</h1>
            <h1 className="text-white font-semibold text-4xl">Impeccable Placement Opportunities</h1>
          </div>
        </div>
  
        <div className="pt-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2 pl-28">
            <h4 className="text-white font-light text-xl">We have</h4>
            <h1 className="text-yellow-300 font-semibold text-4xl">2,200+ Recruiters</h1>
            <h4 className="text-white font-light text-xl">
              Ready to Provide You with the Best<br /> Job Offers With upto
            </h4>
            <h1 className="text-yellow-300 mt-3 font-semibold text-4xl">32 Lakhs Highest<br /> Package</h1>
            <h4 className="text-white font-light text-xl mt-3">and average package of</h4>
            <h1 className="text-yellow-300 font-semibold text-4xl mb-6">6 LPA</h1>
          </div>
  
          <div className="w-full md:w-1/2">
            <h2 className="text-yellow-300 pb-2 text-2xl">Crafting Your Path to Success in Engineering</h2>
            <div className="bg-custom-bg p-3 my-4 rounded border border-custom-yellow">
              <h5 className="text-white font-light text-l">
                <li>Laying a Solid Foundation for B.Tech Excellence</li>
              </h5>
            </div>
            <div className="bg-custom-bg p-3 my-4 rounded border border-custom-yellow">
              <h5 className="text-white font-light text-l">
                <li>Training for Engineering Excellence</li>
              </h5>
            </div>
            <div className="bg-custom-bg p-3 my-4 rounded border border-custom-yellow">
              <h5 className="text-white font-light text-l">
                <li>Engineering-Centric Campus Recruitment</li>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PlacementInfo;
  