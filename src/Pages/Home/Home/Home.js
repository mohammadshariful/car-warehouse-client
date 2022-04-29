import React from "react";
import TitleChange from "../../Shared/TitleChangle/TitleChange";
import Banner from "../Banner/Banner";
import PopularCar from "../PopularCar/PopularCar/PopularCar";
import Reviews from "../Reviews/Reviews/Reviews";
import Sponsers from "../Sponsers/Sponsers";
import UpcomingCar from "../UpcomingCar/UpcomingCar/UpcomingCar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <TitleChange title="Home" />
      <Banner />
      <PopularCar />
      <UpcomingCar />
      <Reviews />
      <Sponsers />
    </div>
  );
};

export default Home;
