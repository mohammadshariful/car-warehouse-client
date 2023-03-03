import React from "react";
import { Container, Row } from "react-bootstrap";
import useDataLoad from "./../../../Hooks/useDataLoad";
import Loading from "./../../Shared/Loading/Loading";
import Review from "./Review";

const AllReviews = () => {
  const url = "https://car-rev-server-2023.onrender.com/api/v1/reviews";
  const { data, loading } = useDataLoad(url);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {data.length > 0 && <Container className="my-5">
        <Row>
          {data.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </Row>
      </Container>}
    </>
  );
};

export default AllReviews;
