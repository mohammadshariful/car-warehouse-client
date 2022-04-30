import React from "react";
import { Container, ProgressBar, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";
const Reviews = () => {
  const array = [1, 2, 3];
  return (
    <Container className="reviews-container py-3">
      <h2 className="section-title text-center">Testimonial</h2>
      <h4 className="text-center">Ratings and reviews</h4>
      <div className="w-50 mx-auto">
        <h1 className="display-1 fw-bold">4.4</h1>
        <p className="star-container">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStarHalfAlt className="star" />
        </p>
        <small>9,6,93,354</small>
      </div>
      <div className="w-50 mx-auto">
        <ul>
          <li>
            <span className="fw-bold">5</span>
            <ProgressBar variant="success" now={60} />
          </li>
          <li>
            <span className="fw-bold">4</span>
            <ProgressBar variant="success" now={25} />
          </li>
          <li>
            <span className="fw-bold">3</span>
            <ProgressBar variant="success" now={20} />
          </li>
          <li>
            <span className="fw-bold">2</span>
            <ProgressBar variant="success" now={5} />
          </li>
          <li>
            <span className="fw-bold">1</span>
            <ProgressBar variant="success" now={10} />
          </li>
        </ul>
      </div>
      <Row>
        {array.map((arr) => (
          <SingleReview />
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
