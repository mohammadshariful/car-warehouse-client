import axios from "axios";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useUpdate from "./../../../Hooks/useUpdate";
import Loading from "./../../Shared/Loading/Loading"

import "./stock-update.css";

const StockUpdate = () => {
  const { stockId } = useParams();
  const navigate = useNavigate();

  const { car, isLoad, setIsLoad, isLoading } = useUpdate(stockId);
  let { picture, brand, description, supplier, quantity, price, sold } = car;

  //handle Quantity
  const handleQuantity = async () => {
    const newQuantity = quantity - 1;
    const newSold = sold + 1;
    const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/${stockId}`;
    await axios.put(url, { newQuantity, newSold });
    setIsLoad(!isLoad);
  };
  //add quantity
  const handleFormQuantity = async (event) => {
    event.preventDefault();
    const newSold = sold;
    const textQuantity = parseInt(event.target.quantity.value);
    const newQuantity = quantity + textQuantity;
    const url = `https://car-rev-server-2023.onrender.com/api/v1/cars/${stockId}`;
    await axios.put(url, { newQuantity, newSold });
    setIsLoad(!isLoad);
    event.target.reset();
  };

  if (isLoading) {
    return <Loading />
  }


  return (
    <Container className="my-5 stock-update-container">
      <div className=" d-flex flex-column flex-md-row">
        <div className="stock-img-container" data-aos="fade-left">
          <img src={picture} alt="" />
        </div>
        <div className="stock-details-container" data-aos="fade-right">
          <h5>{brand}</h5>
          <p>{description}</p>
          <p>
            Price : <span className="fw-bold"> ${price}</span>
          </p>
          {quantity <= 0 ? (
            <p className="out-of-stock">Out of stock</p>
          ) : (
            <p>Quantity :{quantity}</p>
          )}
          {quantity === 0 && <p>Quantity :{quantity}</p>}
          <p>Sold : {sold}</p>
          <h6>Service Provider : {supplier}</h6>
          <div className="d-flex justify-content-between align-items-center flex-column flex-md flex-md-row">
            <button
              disabled={quantity <= 0 ? true : false}
              onClick={handleQuantity}
              className="update-btn mb-2"
            >
              Delivered
            </button>
            <Form onSubmit={handleFormQuantity}>
              <Form.Group className="mb-2" controlId="quantity">
                <Form.Control
                  type="number"
                  name="quantity"
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
      <button
        onClick={() => navigate("/manageitems")}
        className="d-block mx-auto update-btn mt-4"
      >
        Manage Inventory <FaAngleRight />
      </button>
    </Container>
  );
};

export default StockUpdate;
