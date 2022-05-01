import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SinglePopularCar.css";
const SinglePopularCar = ({ car }) => {
  const navigate = useNavigate();
  const { id, brand, picture, description, price, quantity, supplier } = car;
  return (
    <Col lg={4} md={6}>
      <div className="single-popular-car-container">
        <div className="single-popular-car">
          <img className="img-fluid" src={picture} alt="" />
          <div className="wraper">
            <button className="wraper-see-detils">See Details</button>
          </div>
        </div>
        <div className="single-popular-car-info">
          <h5>{brand}</h5>
          <p>
            {description.slice(0, 200) + "..."}
            <small className="text-muted">read more</small>
          </p>
          <p>
            Price : <span className="fw-bold"> ${price}</span>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
          <h6>Service Provider : {supplier}</h6>
          <div className="text-end ">
            <button
              onClick={() => navigate(`/stockupdate/${id}`)}
              type="button"
              className="update-btn"
            >
              Stock Update
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SinglePopularCar;
