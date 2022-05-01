import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleUpcomingCar from "../SingleUpcomingCar/SingleUpcomingCar";
const UpcomingCar = () => {
  const [upcommingCars, setUpcommingCars] = useState([]);
  useEffect(() => {
    fetch("upcomming.json")
      .then((res) => res.json())
      .then((data) => setUpcommingCars(data));
  }, []);

  return (
    <Container className="mt-5 upcoming-car">
      <h2 className="text-center section-title">Upcomming Car ++</h2>
      <Row>
        {upcommingCars.map((car) => (
          <SingleUpcomingCar key={car.id} car={car} />
        ))}
      </Row>
    </Container>
  );
};

export default UpcomingCar;
