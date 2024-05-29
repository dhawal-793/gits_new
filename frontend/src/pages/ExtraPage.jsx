import { useParams } from "react-router-dom";

const ExtraPage = () => {
  const { id } = useParams();
  const title = id.split("-").join(" ");
  return (
    <div className="min-h-screen h-auto w-full flex items-center justify-center">
      <p className="font-bold text-3xl">{title}</p>
    </div>
  );
};

export default ExtraPage;
