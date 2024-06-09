import Container from "../ui/Container";
import CustomButton from "../CustomButton";

const Reserch = () => {
  return (
    <Container>
      <p className="text-xl sm:text-2xl text-center text-primary mb-3 md:mb-8">
        Reserch at GITS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 md:place-items-center">
        <div className="md:col-span-3 lg:col-span-5 md:pr-2">
          <h3 className="my-4 md:my-2 lg:my-4 flex md:flex-col gap-2 lg:gap-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#231f20] items-center justify-center md:items-start">
            <span className="block">EXPLORING THE</span>
            <span className="block">UNEXPLORED</span>
          </h3>
          <p className="text-sm text-justify">
            Rapid growth in scientific knowledge is an indication of quest for
            innovations which has an impact on economic and societal
            development. Science, technology and innovation is often initiated
            in the College environment and it is also the mission of Geetanjali
            Institute Of Technical Studies (GITS).
          </p>
          <div className="text-left flex items-start py-6 md:py-3 lg:py-6">
            <CustomButton />
          </div>
        </div>
        <div className="relative md:col-span-4">
          <img
            src="images/reserch.jpg"
            alt="Students"
            className="w-full h-auto rounded-2xl  shadow-lg"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-primary my-6" />
    </Container>
  );
};

export default Reserch;
