import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:5000");
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchdata();
  }, []);

  return (
    <>
      <p className="text-center tabular-nums">50000</p>
      <p>{data}</p>
    </>
  );
};

export default Home;
