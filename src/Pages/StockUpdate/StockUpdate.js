import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "./StockUpdate.css";
const StockUpdate = () => {
  const [car, setCar] = useState({});
  const [deliverd, setDeliverd] = useState(0);
  const [addQuantity, setAddQuantity] = useState(0);
  const { stockId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/popularCars")
      .then((res) => res.json())
      .then((data) => {
        const singleCar = data.find((car) => car._id === stockId);
        setCar(singleCar);
      });
  }, [stockId, addQuantity]);

  const { _id, brand, description, picture, price, quantity, supplier } = car;

  //add quantity
  const handleQuantity = (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.quantity.value);
    setAddQuantity(quantity);
    event.target.reset();
  };

  const parseQuantity = parseInt(quantity);
  const setQuantity = addQuantity + parseQuantity - deliverd;

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
          <p>Quantity :{setQuantity}</p>
          <h6>Service Provider : {supplier}</h6>
          <div className="d-flex justify-content-between align-items-center flex-column flex-md flex-md-row">
            <button
              onClick={() => setDeliverd(deliverd + 1)}
              className="update-btn mb-2"
            >
              Delivered
            </button>
            <Form onSubmit={handleQuantity}>
              <Form.Group className="mb-2" controlId="quantity">
                <Form.Label>Amount Quantity</Form.Label>
                <Form.Control
                  type="text"
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
