import Container from "../ui/Container";
import InnovationCarousel from "./InnovationCarousel";

const LearningWithInnovation = () => {
  return (
    <Container>
      <div className="text-center relative ">
        <h2 className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-wider opacity-50 innovations-text">
          Innovations
        </h2>
        <h3 className="absolute inset-x-0 top-1/2 sm:text-2xl text-sm md:text-3xl font-semibold text-black/80 -translate-y-1/2">
          With Us There Are So Many Ways of Learning
        </h3>
      </div>
      <h3 className="text-xl  font-semibold sm:text-4xl md:text-4xl text-black text-center my-3">
        We Make Engineering Fun
      </h3>
      <div className="">
        <InnovationCarousel />
      </div>
      <div className="w-full h-1 bg-primary my-6" />
    </Container>
  );
};

export default LearningWithInnovation;
