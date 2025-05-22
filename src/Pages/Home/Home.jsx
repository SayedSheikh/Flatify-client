import React from "react";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/Featured/Featured";
import Reviews from "../../Components/Reviews/Reviews";
import Faq from "../../Components/FAQ/Faq";
import { useLoaderData } from "react-router";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-75px)] max-w-[1300px] mx-auto w-11/12 my-[70px]">
      <Banner></Banner>
      <Featured></Featured>
      <Faq></Faq>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
