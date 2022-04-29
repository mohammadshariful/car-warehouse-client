import React from "react";
import Banner from "../Banner/Banner";
import PopularCar from "../PopularCar/PopularCar/PopularCar";
import Sponsers from "../Sponsers/Sponsers";
import UpcomingCar from "../UpcomingCar/UpcomingCar/UpcomingCar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCar />
      <UpcomingCar />
      <Sponsers />
    </div>
  );
};

export default Home;
