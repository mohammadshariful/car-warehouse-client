import React from "react";
import TitleChange from "./../Shared/TitleChangle/TitleChange";
import Banner from "./Banner";
import PopularCar from "./PopularCar";
import Reviews from "./Reviews";
import SearchCar from "./SearchCar";
import Sponsers from "./Sponsers";
import UpcomingCar from "./UpcomingCar";

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
