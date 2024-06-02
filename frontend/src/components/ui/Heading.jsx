const Heading = ({ children }) => {
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-3xl  mt-6">
        {children}
      </h2>
      <div className="w-full flex items-center gap-5 my-6 md:my-8">
        <div className="w-12 bg-primary h-[3px]" />
        <div className="w-full bg-tertiary/20 h-[1px]" />
      </div>
    </>
  );
};

export default Heading;
