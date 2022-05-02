import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Car from "../Car/Car";
const AllCars = () => {
  const [carsGallary, setCarsGallary] = useState([]);
  useEffect(() => {
    fetch("/AllCars.json")
      .then((res) => res.json())
      .then((data) => {
        setCarsGallary(data);
      });
  }, []);
  return (
    <Row>
      {carsGallary.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </Row>
  );
};

export default AllCars;
