import React from "react";
import { Col } from "react-bootstrap";
import "./Car.css";
const Car = ({ car }) => {
  return (
    <Col lg={3} md={6} className="my-3" data-aos="fade-up">
      <div className="img-container">
        <img className="img-fluid" src={car?.picture} alt="" />
      </div>
    </Col>
  );
};

export default Car;
