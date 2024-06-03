import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Title from "../components/ui/Title";
import NotFound from "../components/ui/NotFound";

const BASE_URL = import.meta.env.VITE_HOST;

const AssessmentPartners = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/partners/assessment-partners`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status == 404) {
          setData("404");
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  useEffect(() => {}, [data]);

  if (data == "404") {
    return <NotFound />;
  }

  if (loading) {
    return <div className="text-center py-16 text-sm">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-center py-16 text-red-500 text-lg">
        Internal Server Error
      </div>
    );
  }

  return (
    <div>
      {data && (
        <>
          <Title title="Assessment PARTNERS" />
          <Container>
            <div className="py-6">
              {data.map(({ name, image, description }) => (
                <div key={name} className="pb-5 border-b">
                  <Heading>
                    <span className="uppercase">{name}</span>
                  </Heading>
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 lg:items-start -mt-2">
                    <div className=" h-40 mx-auto relative flex items-center justify-center p-3 border-4 border-primary">
                      <img
                        className="lg:w-80 lg:max-w-[20rem] h-32"
                        src={image}
                        alt={name}
                      />
                    </div>
                    <div className="text-sm text-justify space-y-3">
                      {description.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default AssessmentPartners;
