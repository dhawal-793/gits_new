import Container from "../ui/Container";
import Counter from "./Counter";

const SectionOne = () => {
  return (
    <div className="md:p-5 mx-auto max-w-screen-2xl">
      <div className="bg-tertiary  w-full rounded-t-3xl md:rounded-t-xl md:rounded-b-xl">
        <Container>
          <div className="relative w-full py-8">
            <div className="relative z-10">
              <div className="space-y-4">
                <h1 className="text-white text-center font-bold sm:text-4xl text-3xl">
                  WHAT DIFFERENTIATES US?
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6 lg:mb-10"></div>
              </div>
              <div className="flex flex-col justify-center lg:flex-row lg:justify-normal lg:items-center w-full mt-8 gap-20 lg:gap-5">
                <div className="w-full md:w-[30rem] lg:w-[40rem] aspect-video px-5 lg:p-0 mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1562584722472!6m8!1m7!1sCAoSLEFGMVFpcFBJOFJJUV9oMXZxS0UwbzgyRWdJZU5zTDNlZGh4UXlLd2VlVFRS!2m2!1d24.61949940222459!2d73.8547510873866!3f71.08848280632559!4f-2.185432848210695!5f0.7820865974627469"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-xl opacity-70 w-full h-full border-none mx-auto"
                  ></iframe>
                </div>

                <div className="mx-auto w-fit grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-28 lg:gap-12 text-white font-bold text-center">
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
        </Container>
      </div>
    </div>
  );
};

export default SectionOne;

const CounterItem = ({ icon, count, message }) => {
  return (
    <div className="w-full sm:w-48 mb-6 sm:mb-0 flex flex-col items-center ">
      <span className={`text-5xl sm:text-7xl lg:text-4xl mb-6 ${icon}`}></span>
      <Counter value={count} />
      <p className="w-fit text-xl">{message}</p>
    </div>
  );
};
