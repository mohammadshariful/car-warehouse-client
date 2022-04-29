import React from "react";
import { FaAngleRight } from "react-icons/fa";
import bannerImg from "../../../Assets/Images/bannerImg.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-info">
        <h1>Lets geeting a new car !!</h1>
        <p>
          Your dream is here.Choose your favourite car and buy it.we have
          provided our best services.
        </p>
        <button className="explore-btn">
          <span> Explore Now</span>
          <FaAngleRight className="explore-btn-icon" />
        </button>
      </div>
      <div className="banner-img">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
