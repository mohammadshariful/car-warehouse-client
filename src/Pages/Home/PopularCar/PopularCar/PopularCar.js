import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCars from "../../../../Hooks/useCars";
import Loading from "../../../Shared/Loading/Loading";
import SinglePopularCar from "../SinglePopularCar/SinglePopularCar";
import "./PopularCar.css";
const PopularCar = () => {
  const navigate = useNavigate();
  const { cars, isLoading } = useCars();
  const sliceCar = cars.slice(0, 6);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container className="mt-5" data-aos="fade-up">
          <h2 className="section-title text-center">Popular Car</h2>
          <Row>
            {sliceCar.map((car) => (
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
