import Heading from "./ui/Heading";

const Partners = ({ data }) => {
  return (
    <>
      {data.map(({ name, image, description }) => (
        <div key={name} className="pb-5 border-b">
          <Heading>
            <span className="uppercase">{name}</span>
          </Heading>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 lg:items-start -mt-2">
            <div className=" h-40 mx-auto relative flex items-center justify-center p-3 border-4 border-primary">
              <img
                className="lg:w-80 lg:max-w-[20rem] h-32"
                src={image}
                alt={name}
              />
            </div>
            <div className="text-sm text-justify space-y-3">
              {description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Partners;
