import React from "react";
import { Container, Row } from "react-bootstrap";
import useItems from "../../../Hooks/useItems";
import SingleItem from "../SingleItem/SingleItem";
import "./MyItems.css";
const MyItems = () => {
  const { cars } = useItems();
  return (
    <Container className="my-5 " data-aos="fade-left">
      <div className="items-container">
        <h2 className="text-center section-title">My added items is here</h2>
        <p className="text-center">
          Here's the element you made just allows you to see.
        </p>
        <h6 className="text-center">Total add your item({cars.length})</h6>
        <Row className="mt-3">
          {cars.map((car) => (
            <SingleItem key={car._id} car={car} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MyItems;
