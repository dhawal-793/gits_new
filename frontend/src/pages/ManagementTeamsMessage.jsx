import { useParams } from "react-router-dom";

import { getMessage } from "../data/managements-message";

import NotFound from "../components/ui/NotFound";
import Title from "../components/ui/Title";
import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";

const ManagementTeamsMessage = () => {
  const { management } = useParams();
  const title = management.split("-").join("_");
  const data = getMessage(title);

  if (data == "not found") {
    return <NotFound />;
  }

  return (
    <div>
      <Title title={data.title} />
      <Container>
        <Heading>
          <span className="capitalize">{data.title}</span>
        </Heading>
        <div className="flex flex-col md:flex-row gap-5">
          <div className=" px-5">
            <img
              className="mx-auto w-[18rem] md:w-[80rem] h-auto"
              src={data.image}
              alt={data.name}
            />
            <p className="font-semibold text-xl my-4 md:my-8 text-center">
              {data.name}
            </p>
          </div>
          <div className="space-y-8 text-base">
            {data?.messages?.map((message, idx) => (
              <p key={idx}>{message}</p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManagementTeamsMessage;
