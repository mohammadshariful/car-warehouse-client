import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Car from "../Car/Car";
const Exterior = () => {
  const [carsGallary, setCarsGallary] = useState([]);
  useEffect(() => {
    fetch("/AllCars.json")
      .then((res) => res.json())
      .then((data) => {
        setCarsGallary(data);
      });
  }, []);

  const roadTestCar = carsGallary.filter((car) =>
    car.catagory.includes("road-test")
  );

  return (
    <Row>
      {roadTestCar.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </Row>
  );
};

export default Exterior;
