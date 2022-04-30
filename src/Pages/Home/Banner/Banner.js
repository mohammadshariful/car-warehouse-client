import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TypeAnimation from "react-type-animation";
import bannerImg from "../../../Assets/Images/bannerImg.png";
import "./Banner.css";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-container">
      <div data-aos="fade-right" className="banner-info">
        <TypeAnimation
          cursor={true}
          sequence={["Lets geeting a new car.", 2000, ""]}
          wrapper="h1"
          repeat={Infinity}
        />
        <p>
          Your dream is here.Choose your favourite car and buy it.we have
          provided our best services.
        </p>
        <button onClick={() => navigate("/login")} className="explore-btn">
          <span> Explore Now</span>
          <FaAngleRight className="explore-btn-icon" />
        </button>
      </div>
      <div data-aos="fade-left" className="banner-img">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
