import React from "react";
import TitleChange from "../../Shared/TitleChangle/TitleChange";
import Banner from "../Banner/Banner";
import PopularCar from "../PopularCar/PopularCar/PopularCar";
import Reviews from "../Reviews/Reviews/Reviews";
import SearchCar from "../SearchCar/SearchCar";
import Sponsers from "../Sponsers/Sponsers";
import UpcomingCar from "../UpcomingCar/UpcomingCar/UpcomingCar";
import "./Home.css";
const Home = () => {
  return (
    <div data-aos="fade-up">
      <TitleChange title="Home" />
      <Banner />
      <Sponsers />
      <PopularCar />
      <UpcomingCar />
      <Reviews />
      <SearchCar />
    </div>
  );
};

export default Home;
