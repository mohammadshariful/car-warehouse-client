import React from "react";
import { Col } from "react-bootstrap";
import img from "../../../../Assets/Images/pic1.jpg";
import "./SingleUpcomingCar.css";
const SingleUpcomingCar = () => {
  return (
    <Col lg={4} md={6} className="mb-4" data-aos="fade-up">
      <div className="upcomingCar-container">
        <div className="upcomingCar-img-conainer">
          <img src={img} alt="" />
        </div>
        <div className="upcomingCar-info">
          <p>November 6, 2020</p>
          <h4>Toyota Avalon Hybrid</h4>
        </div>
      </div>
    </Col>
  );
};

export default SingleUpcomingCar;
