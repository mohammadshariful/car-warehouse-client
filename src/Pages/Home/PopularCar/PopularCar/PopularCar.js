import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import SinglePopularCar from "../SinglePopularCar/SinglePopularCar";
import "./PopularCar.css";
const PopularCar = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <Container className="mt-5">
      <h2 className="section-title text-center">Popular Car</h2>
      <Row>
        {array.map((arr) => (
          <SinglePopularCar />
        ))}
      </Row>
      <button className="d-block mx-auto update-btn">
        Manage Inventory <FaAngleRight />{" "}
      </button>
    </Container>
  );
};

export default PopularCar;
