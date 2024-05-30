import { useParams } from "react-router-dom";
import Container from "../components/ui/Container";

const ManagementTeamsMessage = () => {
  const { management } = useParams();
  const title = management.split("-").join(" ");
  return (
    <Container>
      <div className="min-h-screen h-auto w-full flex items-center justify-center">
        <p className="font-bold text-3xl uppercase">{title}</p>
      </div>
    </Container>
  );
};

export default ManagementTeamsMessage;
