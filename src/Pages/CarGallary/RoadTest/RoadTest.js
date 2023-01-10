import React from "react";
import { Row } from "react-bootstrap";
import useDataLoad from "../../../Hooks/useDataLoad";
import Loading from "../../Shared/Loading/Loading";
import Car from "../Car/Car";
const Exterior = () => {
  const url =
    "https://enigmatic-earth-44216.herokuapp.com/carGallary?catagory=road-test";

  const { data, loading } = useDataLoad(url);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {data.map((car) => (
            <Car key={car.id} car={car} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Exterior;
