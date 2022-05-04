import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDataLoad from "../../../../Hooks/useDataLoad";
import Loading from "../../../Shared/Loading/Loading";
import SinglePopularCar from "../SinglePopularCar/SinglePopularCar";
import "./PopularCar.css";
const PopularCar = () => {
  const navigate = useNavigate();
  const url = "https://enigmatic-earth-44216.herokuapp.com/popularCars";
  const { data, loading } = useDataLoad(url);
  const cars = data.slice(0, 6);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="mt-5" data-aos="fade-up">
          <h2 className="section-title text-center">Popular Car</h2>
          <Row>
            {cars.map((car) => (
              <SinglePopularCar key={car._id} car={car} loading={loading} />
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
