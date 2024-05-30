import { useParams } from "react-router-dom";
import Container from "../components/ui/Container";

const YearPlacements = () => {
  const { year } = useParams();
  const title = year.split("-").join(" ");
  return (
    <Container>
      <div className="min-h-screen h-auto w-full flex items-center justify-center">
        <p className="font-bold text-3xl uppercase">Placements {title}</p>
      </div>
    </Container>
  );
};

export default YearPlacements;
