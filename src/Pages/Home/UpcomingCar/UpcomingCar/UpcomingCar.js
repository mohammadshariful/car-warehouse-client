import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleUpcomingCar from "../SingleUpcomingCar/SingleUpcomingCar";
const UpcomingCar = () => {
  const array = [1, 2, 3];
  return (
    <Container className="mt-5 upcoming-car">
      <h2 className="text-center section-title">Upcomming Car ++</h2>
      <Row>
        {array.map((arr) => (
          <SingleUpcomingCar />
        ))}
      </Row>
    </Container>
  );
};

export default UpcomingCar;
