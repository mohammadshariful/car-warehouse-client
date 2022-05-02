import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Car from "../Car/Car";
const Interior = () => {
  const [carsGallary, setCarsGallary] = useState([]);
  useEffect(() => {
    fetch("/AllCars.json")
      .then((res) => res.json())
      .then((data) => {
        setCarsGallary(data);
      });
  }, []);

  const interiorCar = carsGallary.filter((car) =>
    car.catagory.includes("interior")
  );

  return (
    <Row>
      {interiorCar.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </Row>
  );
};

export default Interior;
