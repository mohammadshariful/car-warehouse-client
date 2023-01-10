import React from "react";
import { Container, Row } from "react-bootstrap";
import useDataLoad from "../../../../Hooks/useDataLoad";
import Loading from "../../../Shared/Loading/Loading";
import SingleUpcomingCar from "../SingleUpcomingCar/SingleUpcomingCar";
const UpcomingCar = () => {
  const url = `https://car-rev-server.onrender.com/upcommingCars`;
  const { data, loading } = useDataLoad(url);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="mt-5 upcoming-car">
          <h2 className="text-center section-title">Upcomming Car ++</h2>
          <Row>
            {data.map((car) => (
              <SingleUpcomingCar key={car._id} car={car} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default UpcomingCar;
