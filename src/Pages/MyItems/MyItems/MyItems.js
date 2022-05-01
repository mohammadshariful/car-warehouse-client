import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleItem from "../SingleItem/SingleItem";
import "./MyItems.css";
const MyItems = () => {
  const array = [1, 2, 3];
  return (
    <Container className="my-5 " data-aos="fade-left">
      <div className="items-container">
        <h2 className="text-center section-title">My added items is here</h2>
        <p className="text-center">
          Here's the element you made just allows you to see.
        </p>
        <h6 className="text-center">Total add your item({array.length})</h6>
        <Row className="mt-3">
          {array.map((arr) => (
            <SingleItem />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MyItems;
