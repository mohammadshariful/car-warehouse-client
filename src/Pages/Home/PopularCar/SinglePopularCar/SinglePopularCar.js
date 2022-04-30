import React from "react";
import { Col } from "react-bootstrap";
import img1 from "../../../../Assets/Images/pic2.jpg";
import "./SinglePopularCar.css";
const SinglePopularCar = () => {
  return (
    <Col lg={4} md={6}>
      <div className="single-popular-car-container">
        <div className="single-popular-car">
          <img className="img-fluid" src={img1} alt="" />
          <div className="wraper">
            <button className="wraper-see-detils">See Details</button>
          </div>
        </div>
        <div className="single-popular-car-info">
          <h5>Brand Name : </h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            doloribus delectus eligendi pariatur ducimus rerum laborum nobis sit
            perspiciatis ea!
          </p>
          <p>
            Price : <span className="fw-bold"> $220</span>
          </p>
          <p>
            <small>Quantity : 10</small>
          </p>
          <h6>Service Provider : Mohammad Shariful</h6>
          <div className="text-end ">
            <button type="button" className="update-btn">
              Update Car
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SinglePopularCar;
