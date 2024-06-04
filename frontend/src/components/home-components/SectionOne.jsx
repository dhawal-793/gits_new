import Counter from "./Counter";

const SectionOne = () => {
  return (
    <div className="bg-[#262626] min-h-screen flex flex-col items-center w-full gap-4 mt-4 rounded-xl">
        <div className="relative w-full px-4 sm:px-8">
          <div
            className="absolute inset-0 bg-cover h-auto bg-center"
            // style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> Overlay */}
          </div>
          <div className="relative z-10">
            <h1 className="text-white text-center font-bold sm:text-4xl text-3xl mb-2 pt-4 lg:mb-4">
              WHAT DIFFERENTIATES US?
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 lg:mb-10"></div>
            <div className="flex justify-end w-full mt-8 gap-20">
              
              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1562584722472!6m8!1m7!1sCAoSLEFGMVFpcFBJOFJJUV9oMXZxS0UwbzgyRWdJZU5zTDNlZGh4UXlLd2VlVFRS!2m2!1d24.61949940222459!2d73.8547510873866!3f71.08848280632559!4f-2.185432848210695!5f0.7820865974627469"
                 
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-xl opacity-70 w-[40em] h-[28rem]"
      
                ></iframe>
              </div>
            
              <div className="grid grid-cols-2 gap-y-20 gap-x-14 text-white font-bold text-center">
                <CounterItem
                  icon="fa-solid fa-people-group"
                  message="Alumni"
                  count={10212}
                />
                <CounterItem
                  icon="fa-solid fa-chalkboard-user"
                  message="ACADEMICIANS"
                  count={317}
                />
                <CounterItem
                  icon="fa-solid fa-chart-line"
                  message="PLACEMENTS"
                  count={9218}
                />
                <CounterItem
                  icon="fa-solid fa-handshake"
                  message="ACCREDITED PARTNERS"
                  count={38}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionOne


const CounterItem = ({ icon, count, message }) => {
    return (
      <div className="relative w-full sm:w-48 mb-6 sm:mb-0 flex flex-col items-center">
        <span className={`sm:text-[5rem] text-[3rem] mb-6 ${icon}`}></span>
        <Counter value={count} />
        <p>{message}</p>
      </div>
    );
  };
  