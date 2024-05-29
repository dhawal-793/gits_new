import { useParams } from "react-router-dom";

const Committee = () => {
  const { committee } = useParams();
  const title = committee.split("-").join(" ");
  return (
    <div className="min-h-screen h-auto w-full flex items-center justify-center">
      <p className="font-bold text-3xl uppercase">{title}</p>
    </div>
  );
};

export default Committee;
