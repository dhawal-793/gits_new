
import { useEffect, useState } from "react";
import React from "react";
import Container from "../components/ui/Container";
import SectionOne from "../components/home-components/SectionOne";

const Home = () => {
  const [data, setData] = useState("dummy data");

  useEffect(() => {
    // const fetchdata = async () => {
    //   try {
    //     const response = await fetch("http://localhost:5000");
    //     const jsonData = await response.json();
    //     setData(jsonData.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchdata();
  }, []);

  return (
    <Container className="my-4" >
      {/* <div className="min-h-screen text-center pt-[30vh] py-20">
        <p className="text-center tabular-nums mb-20 text-3xl">50000</p>
        <p className="fontbold text-lg">{data}</p>
      </div> */}
      <SectionOne/>
    </Container>
  );
};

export default Home;


