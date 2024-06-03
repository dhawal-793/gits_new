import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import NotFound from "../components/ui/NotFound";
import Partners from "../components/Partners";

const BASE_URL = import.meta.env.VITE_HOST;

const TrainingPartners = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  // useEffect(() => {}, [data]);

  if (data == "404") {
    return <NotFound />;
  }

  if (error) {
    return (
      <div className="text-center py-16 text-red-500 text-lg">
        Internal Server Error
      </div>
    );
  }

  return (
    <>
      <Title title="TRAINING PARTNERS" />
      <Container>
        <div className="py-6">
          <>
            {loading && <div className="text-center text-sm">Loading...</div>}
            {data && <Partners data={data} />}
          </>
        </div>
      </Container>
    </>
  );
};

export default TrainingPartners;
