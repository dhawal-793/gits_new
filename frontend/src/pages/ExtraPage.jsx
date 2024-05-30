import { useParams } from "react-router-dom";
import Container from "../components/ui/Container";

const ExtraPage = () => {
  const { id } = useParams();
  const title = id.split("-").join(" ");
  return (
    <Container>
      <div className="min-h-screen h-auto w-full flex items-center justify-center">
        <p className="font-bold text-3xl">{title}</p>
      </div>
    </Container>
  );
};

export default ExtraPage;
