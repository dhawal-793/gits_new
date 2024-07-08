import Container from "../ui/Container";

function OurPlacements() {
  return (
    <div className="px-4 py-10 lg:py-20 xl:py-24 2xl:py-28 lg:rounded-l-full lg:ml-10 bg-black  bg-cover bg-opacity-80 bg-[url('images/cs.jpg')] bg-blend-multiply">
      <div className="w-full lg:-ml-5">
        <Container>
          <div className="text-center">
            <h2 className="border-t-2 pt-4 font-semibold text-yellow-200 text-3xl px-10 lg:w-fit mx-auto mb-6">
              Welcome To GITS
            </h2>
            <h2 className="text-white font-light text-xl text-wrap px-6 my-4">
              Before You Start! Your Engineering Journey Ends With
            </h2>

            <h2 className="text-white font-semibold text-3xl">
              Impeccable Placement Opportunities
            </h2>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-center gap-10 lg:gap-0">
            <div className="w-full md:w-1/2 lg:w-2/3 lg:pl-28">
              <h4 className="text-white font-light text-xl">We have</h4>
              <h1 className="text-yellow-300 font-semibold text-4xl">
                2,200+ Recruiters
              </h1>
              <h4 className="text-white font-light text-xl">
                Ready to Provide You with the Best
                <br /> Job Offers With upto
              </h4>
              <h1 className="text-yellow-300 mt-3 font-semibold text-4xl">
                32 Lakhs Highest
                <br /> Package
              </h1>
              <h4 className="text-white font-light text-xl mt-3">
                and average package of
              </h4>
              <h1 className="text-yellow-300 font-semibold text-4xl mb-6">
                6 LPA
              </h1>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <h2 className="text-yellow-300 pb-2 text-2xl">
                Crafting Your Path to Success in Engineering
              </h2>
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
        </Container>
      </div>
    </div>
  );
}

export default OurPlacements;
