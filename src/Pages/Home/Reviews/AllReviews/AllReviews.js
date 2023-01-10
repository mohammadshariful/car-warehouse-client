import React from "react";
import { Container, Row } from "react-bootstrap";
import useDataLoad from "../../../../Hooks/useDataLoad";
import Loading from "../../../Shared/Loading/Loading";
import SingleReview from "../SingleReview/SingleReview";

const AllReviews = () => {
  const url = " https://car-rev-server.onrender.com/reviews";
  const { data, loading } = useDataLoad(url);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="my-5">
          <Row>
            {data.map((review) => (
              <SingleReview key={review._id} review={review} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default AllReviews;
