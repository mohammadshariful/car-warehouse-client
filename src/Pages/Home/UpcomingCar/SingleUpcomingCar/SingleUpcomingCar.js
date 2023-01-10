import React from "react";
import { Col } from "react-bootstrap";
import "./SingleUpcomingCar.css";
const SingleUpcomingCar = ({ car }) => {
  const { brand, picture, date } = car;
  return (
    <Col lg={4} md={6} className="mb-4" data-aos="fade-up">
      <div className="upcomingCar-container">
        <div className="upcomingCar-img-conainer">
          <img src={picture} alt="" />
        </div>
        <div className="upcomingCar-info">
          <p>{date}</p>
          <h4>{brand}</h4>
        </div>
      </div>
    </Col>
  );
};

export default SingleUpcomingCar;
