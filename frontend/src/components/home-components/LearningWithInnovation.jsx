import Container from "../ui/Container";

const LearningWithInnovation = () => {
  return (
    <Container>
      <div className="text-center relative">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-wider opacity-40 innovations-text">
          Innovations
        </h2>
        <h3 className="absolute inset-x-0 top-1/2 sm:text-2xl text-sm md:text-3xl font-medium text-black/80 -translate-y-1/2">
          With Us There Are So Many Ways of Learning
        </h3>
      </div>
      <h3 className="text-xl font-bold text-gray-600 text-center my-3">
        We Make Engineering Fun
      </h3>
      <div className="flex justify-center gap-6">
        <div className="w-1/3">
          <img
            src="path-to-your-first-image.jpg"
            alt="First"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="w-1/3">
          <img
            src="path-to-your-second-image.jpg"
            alt="Second"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="w-1/3">
          <img
            src="path-to-your-third-image.jpg"
            alt="Third"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-primary my-6" />
    </Container>
  );
};

export default LearningWithInnovation;
