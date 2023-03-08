import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

import bannerImg from "../../../Assets/Images/bannerImg.png";
import "./banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-container">
      <div data-aos="fade-right" className="banner-info">
        <Typewriter
          options={{
            strings: ['Find cars special for you'],
            autoStart: true,
            loop: true,
          }}
        />

        <p>With thousands of cars,we have just the right one for you.</p>
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
