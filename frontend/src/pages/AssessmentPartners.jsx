import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import NotFound from "../components/errors/NotFound";
import InternalServerError from "../components/errors/InternalServerError";
import Partners from "../components/Partners";

const BASE_URL = import.meta.env.VITE_HOST;

const AssessmentPartners = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/partners/training-partners`
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
    fetchPartners();
  }, []);

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
          <Title title="Assessment Partners" />
          <Container>
            <Partners data={data} />
          </Container>
        </>
      ) : (
        <div className="min-h-[80vh] w-full" />
      )}
    </>
  );
};
export default AssessmentPartners;
