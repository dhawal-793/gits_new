import FacilitiesCarousel from "./FacilitiesCarousel";
import Container from "../ui/Container";

const Facilities = () => {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-xl sm:text-5xl ">
          Here Is How We Make You The Best
        </h1>
        <h2 className="text-xl sm:text-4xl font-bold mt-4">
          With Our 200+ Engineering Facilities <br />
          For Practical Training
        </h2>
        <div className="">
          <FacilitiesCarousel />
        </div>
      </div>
    </Container>
  );
};

export default Facilities;
