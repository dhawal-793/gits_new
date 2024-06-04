import Counter from "./Counter";

const Achievement = ({ icon, count, message }) => {
  return (
    <div className="w-full h-full sm:w-48 mb-6 sm:mb-0 flex flex-col items-center gap-0">
      <span className={`text-5xl sm:text-7xl md:text-5xl mb-6 ${icon}`} />
      <Counter value={count} />
      <p className="w-fit text-xl">{message}</p>
    </div>
  );
};

export default Achievement