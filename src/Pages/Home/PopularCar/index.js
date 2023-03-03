import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDataLoad from "./../../../Hooks/useDataLoad";
import Loading from "./../../Shared/Loading/Loading";
import Car from "./Car"
import "./car.css";

const PopularCar = () => {
    const navigate = useNavigate();
    // const url = "https://car-rev-server.onrender.com/popularCars";
    const url = 'https://car-rev-server-2023.onrender.com/api/v1/cars';
    const { data, loading } = useDataLoad(url);
    const cars = data.slice(0, 6);

    if (loading) {
        return <Loading />
    }


    return (
        <>
            {cars.length > 0 && <Container className="mt-5" data-aos="fade-up">
                <h2 className="section-title text-center">Popular Car</h2>
                <Row>
                    {cars.map((car) => (
                        <Car key={car._id} car={car} loading={loading} />
                    ))}
                </Row>
                <button
                    onClick={() => navigate("/manageitems")}
                    className="d-block mx-auto update-btn"
                >
                    Manage Inventory <FaAngleRight />
                </button>
            </Container>}
        </>
    );
};

export default PopularCar;
