import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./StockUpdate.css";
const StockUpdate = () => {
  const [car, setCar] = useState({});
  const { stockId } = useParams();

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => {
        const singleCar = data.find((car) => car.id == stockId);
        setCar(singleCar);
      });
  }, [stockId]);

  const { id, brand, description, picture, price, quantity, supplier } = car;

  return (
    <Container className="my-5 stock-update-container">
      <div className=" d-flex flex-column flex-md-row">
        <div className="stock-img-container">
          <img src={picture} alt="" />
        </div>
        <div className="stock-details-container">
          <h5>{brand}</h5>
          <p>{description}</p>
          <p>
            Price : <span className="fw-bold"> ${price}</span>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
          <h6>Service Provider : {supplier}</h6>
          <div className="d-flex justify-content-between align-items-center flex-column flex-md flex-md-row">
            <button className="update-btn">Delivered</button>
            <Form>
              <Form.Group className="mb-2" controlId="quantity">
                <Form.Label>Amount Quantity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Quantity"
                  required
                />
              </Form.Group>
              <button type="submit" className="btn btn-primary">
                Add Quantity
              </button>
            </Form>
          </div>
        </div>
      </div>
      <button className="d-block mx-auto update-btn mt-4">
        Manage Inventory <FaAngleRight />
      </button>
    </Container>
  );
};

export default StockUpdate;
