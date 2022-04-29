import React from "react";
import Banner from "../Banner/Banner";
import Sponsers from "../Sponsers/Sponsers";
import UpcomingCar from "../UpcomingCar/UpcomingCar/UpcomingCar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <UpcomingCar />
      <Sponsers />
    </div>
  );
};

export default Home;
