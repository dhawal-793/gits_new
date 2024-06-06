import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NotFound from "../components/errors/NotFound";
import Title from "../components/ui/Title";
import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";
import InternalServerError from "../components/errors/InternalServerError";

const BASE_URL = import.meta.env.VITE_HOST;

const ManagementTeamsMessage = () => {
  const { management } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/managements-message/${management}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status == 404) {
          setData("404");
        } else {
          setData("500");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchMessage();
  }, [management]);


  if (data == "404") {
    return <NotFound />;
  }
  if (data == "500") {
    return <InternalServerError />;
  }

  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] w-full flex items-center justify-center text-center">
          <p>Loading...</p>
        </div>
      ) : data ? (
        <>
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
                <p className="font-semibold text-xl my-4 md:my-8 text-center ">
                  {data.name}
                </p>
              </div>
              <div className="space-y-8 text-base">
                {data?.messages?.map((message, idx) => (
                  <p key={idx} className="text-justify">
                    {message}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </>
      ) : (
        <div className="min-h-[80vh] w-full" />
      )}
    </>
  );
};

export default ManagementTeamsMessage;
