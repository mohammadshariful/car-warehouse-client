import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useDataLoad from "./../../../Hooks/useDataLoad";
import Loading from "./../../Shared/Loading/Loading";

import "./upcomming-car.css"

const UpcomingCar = () => {
    const url = `https://car-rev-server-2023.onrender.com/api/v1/upcoming-car`;
    const { data, loading } = useDataLoad(url);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            {data.length > 0 && <Container className="mt-5 upcoming-car">
                <h2 className="text-center section-title">Upcomming Car ++</h2>
                <Row>
                    {data.map(({ _id, picture, date, brand }) => <Col key={_id} lg={4} md={6} className="mb-4" data-aos="fade-up">
                        <div className="upcomingCar-container">
                            <div className="upcomingCar-img-conainer">
                                <img src={picture} alt="" />
                            </div>
                            <div className="upcomingCar-info">
                                <p>{date}</p>
                                <h4>{brand}</h4>
                            </div>
                        </div>
                    </Col>)}
                </Row>
            </Container>}
        </>
    );
};

export default UpcomingCar;
