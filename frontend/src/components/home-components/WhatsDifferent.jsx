import Achievement from "./Achievement";

const WhatsDifferent = () => {
  return (
    <div className="pt-20 md:px-5 mx-auto max-w-screen-2xl h-auto">
      <div className="bg-tertiary w-full rounded-t-3xl md:rounded-t-[2.5rem] md:rounded-b-[2.5rem]">
        <div className="relative w-full py-8 mx-auto px-2 max-w-screen-xl">
          <div className="relative z-10 space-y-8 lg:space-y-16">
            <div className="space-y-4 ">
              <h1 className="text-white text-center font-bold sm:text-4xl text-3xl">
                WHAT DIFFERENTIATES US?
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 lg:mb-10"></div>
            </div>
            <div className="flex flex-col justify-center lg:flex-row lg:justify-normal lg:items-center w-full gap-12 lg:gap-5">
              <div className="w-full md:w-[35rem] lg:w-[38rem] aspect-video px-2 lg:p-0 mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1562584722472!6m8!1m7!1sCAoSLEFGMVFpcFBJOFJJUV9oMXZxS0UwbzgyRWdJZU5zTDNlZGh4UXlLd2VlVFRS!2m2!1d24.61949940222459!2d73.8547510873866!3f71.08848280632559!4f-2.185432848210695!5f0.7820865974627469"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-xl opacity-70 w-full h-full border-none mx-auto"
                ></iframe>
              </div>
              <div className="mx-auto w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-8 sm:gap-20 md:gap-6 lg:gap-12 text-white font-bold text-center">
                <Achievement
                  icon="fa-solid fa-people-group"
                  message="Alumni"
                  count={10212}
                />
                <Achievement
                  icon="fa-solid fa-chalkboard-user"
                  message="ACADEMICIANS"
                  count={317}
                />
                <Achievement
                  icon="fa-solid fa-chart-line"
                  message="PLACEMENTS"
                  count={9218}
                />
                <Achievement
                  icon="fa-solid fa-handshake"
                  message="ACCREDITED PARTNERS"
                  count={38}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsDifferent;
