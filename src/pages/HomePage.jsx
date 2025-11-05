import React from "react";
import Main from "../components/Main";
import Reviews from "../components/Reviews";
import ReviewCards from "../components/ReviewCards";
import Footer from "../components/Footer";
import ForHome from "../components/ForHome";

const HomePage = () => {
  return (
    <div>
      <Main />
      <ForHome />
      <Reviews />
      <ReviewCards />
    </div>
  );
};   

export default HomePage;
