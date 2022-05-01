import React from "react";
import { Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import img from "../../../Assets/Images/pic2.jpg";
import "./SingleItem.css";
const SingleItem = () => {
  return (
    <Col lg={4} md={6} className="my-3" data-aos="fade-up">
      <div className="item-container">
        <div className="item-img-container">
          <img src={img} alt="" />
        </div>
        <h5>Totoya</h5>
        <button className="delete-item">
          <FaTrashAlt /> <span>Delete</span>
        </button>
      </div>
    </Col>
  );
};

export default SingleItem;
