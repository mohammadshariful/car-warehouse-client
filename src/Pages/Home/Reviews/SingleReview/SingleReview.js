import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import userImg from "../../../../Assets/Images/pic3.jpg";
import "./SingleReview.css";
const SingleReview = () => {
  const ratings = 5;
  let star;
  if (ratings) {
    star = (
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
    <Col md={4}>
      <Card className="mb-3">
        <Card.Body className="h-100">
          <div className="user-info">
            <img src={userImg} alt="" />
            <h5>Yahya Arrassi</h5>
          </div>
          <div className="review-description-container">
            <div className="star-container">
              <p>{star}</p>
              <span className="mx-2 text-muted">10/4/2022</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus cupiditate, laboriosam nisi facere, facilis, quia
              iure numquam fuga unde rerum iusto fugit saepe nihil ullam
              corporis ipsa fugiat earum.
            </p>
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
