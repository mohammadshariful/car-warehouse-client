import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import userImg from "../../../../Assets/Images/userImgPlaceholder.png";
import "./SingleReview.css";
const SingleReview = ({ review }) => {
  const { name, star, description, date } = review;
  let getStar;
  if (star === 5) {
    getStar = (
      <p>
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
      </p>
    );
  } else {
    getStar = (
      <p>
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStarHalfAlt className="star" />
      </p>
    );
  }
  return (
    <Col lg={4} md={6} className="mb-3" data-aos="fade-up">
      <Card className="mb-3 h-100">
        <Card.Body>
          <div className="user-info">
            <img src={userImg} alt="" />
            <h5>{name ? name : "unknown"}</h5>
          </div>
          <div className="review-description-container">
            <div className="star-container">
              <span>{getStar}</span>
              <span className="mx-2 text-muted">{date}</span>
            </div>
            <p>{description}</p>
          </div>
          <div className="review-helpful">
            <span>Was this review helpful?</span>
            <p>
              <span className="help">Yes</span>
              <span className="help">No</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleReview;
