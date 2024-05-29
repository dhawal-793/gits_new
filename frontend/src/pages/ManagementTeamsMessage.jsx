import { useParams } from "react-router-dom";

const ManagementTeamsMessage = () => {
  const { management } = useParams();
  const title = management.split("-").join(" ");
  return (
    <div className="min-h-screen h-auto w-full flex items-center justify-center">
      <p className="font-bold text-3xl uppercase">{title}</p>
    </div>
  );
};

export default ManagementTeamsMessage;
