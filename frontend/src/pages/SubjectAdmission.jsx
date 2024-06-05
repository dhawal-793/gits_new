import { useParams } from "react-router-dom";

import Container from "../components/ui/Container";
import Title from "../components/ui/Title";

const SubjectAdmission = () => {
  const { department } = useParams();
  return (
    <>
      <Title title={department} />
      <Container>
        <div className="w-full flex items-center justify-center py-20">
          <p className="text-xl font-semibold uppercase">{department}</p>
        </div>
      </Container>
    </>
  );
};

export default SubjectAdmission;
