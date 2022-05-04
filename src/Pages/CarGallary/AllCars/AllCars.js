import React from "react";
import { Row } from "react-bootstrap";
import useDataLoad from "../../../Hooks/useDataLoad";
import Loading from "../../Shared/Loading/Loading";
import Car from "../Car/Car";
const AllCars = () => {
  const url = "https://enigmatic-earth-44216.herokuapp.com/carGallaries";
  const { data, loading } = useDataLoad(url);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {data.map((car) => (
            <Car key={car._id} car={car} />
          ))}
        </Row>
      )}
    </>
  );
};

export default AllCars;
