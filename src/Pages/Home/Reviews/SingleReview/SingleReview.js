import React from "react";
import { Card, Col } from "react-bootstrap";
import userImg from "../../../../Assets/Images/pic3.jpg";
import "./SingleReview.css";
const SingleReview = () => {
  return (
    <Col md={4}>
      <Card className="mb-3">
        <Card.Body className="h-100">
          <div className="user-info">
            <img src={userImg} alt="" />
            <h5>Yahya Arrassi</h5>
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
