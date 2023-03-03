import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import useDataLoad from "./../../Hooks/useDataLoad";
import Loading from "./../Shared/Loading/Loading";
import TitleChange from "./../Shared/TitleChangle/TitleChange";

import "./car.css"

const CarGallary = () => {
    const url = "https://car-rev-server-2023.onrender.com/api/v1/car-gallayries";
    const { data, loading } = useDataLoad(url);

    const [category, setCategory] = useState({ name: 'all-car', index: 0 });
    const carCategory = [{ category: "all-car" }, { category: "interior" }, { category: "exterior" }, { category: "road-test" }]

    if (loading) {
        return <Loading />
    }

    let cars;

    if (category.name && category.name !== "all-car") {
        cars = data.filter((car) => car.catagory === category.name);
    } else {
        cars = data;
    }

    const handleCategory = (category, activeIndex) => {
        setCategory({
            name: category,
            index: activeIndex
        })
    }


    return (
        <Container className="my-5">
            <TitleChange title="Car Gallary" />
            <div className="cars-gallary">
                <h2 className="text-center section-title">Cars Gallary</h2>
                <div className="link-container">
                    {
                        carCategory.map((info, index) => <button onClick={() => handleCategory(info.category, index)} className={`custom-btn-link ${category.index === index ? 'category' : ''}`} key={index}>{info.category}</button>)
                    }
                </div>
                <Row>
                    {cars.map((car) => <Col lg={3} md={6} className="my-3" data-aos="fade-up">
                        <div className="img-container">
                            <img className="img-fluid" src={car?.picture} alt="" />
                        </div>
                    </Col>)}
                </Row>
            </div>
        </Container>
    );
};

export default CarGallary;
