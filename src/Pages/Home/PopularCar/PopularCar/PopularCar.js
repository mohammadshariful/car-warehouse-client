import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import SinglePopularCar from "../SinglePopularCar/SinglePopularCar";
import "./PopularCar.css";
const PopularCar = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch("https://enigmatic-earth-44216.herokuapp.com/popularCars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        const sliceCar = data.slice(0, 6);
        setCars(sliceCar);
        setIsloading(false);
      })
      .catch((error) => {
        setIsloading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container className="mt-5" data-aos="fade-up">
          <h2 className="section-title text-center">Popular Car</h2>
          <Row>
            {cars.map((car) => (
              <SinglePopularCar key={car._id} car={car} />
            ))}
          </Row>
          <button
            onClick={() => navigate("/manageitems")}
            className="d-block mx-auto update-btn"
          >
            Manage Inventory <FaAngleRight />
          </button>
        </Container>
      )}
    </>
  );
};

export default PopularCar;
