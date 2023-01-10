import axios from "axios";
import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import TitleChange from "../Shared/TitleChangle/TitleChange";
import "./AddItems.css";
const AddItems = () => {
  const [user] = useAuthState(auth);
  const handleItem = async (event) => {
    event.preventDefault();
    const email = user.email;
    const picture = event.target.url.value;
    const brand = event.target.brand.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const providerName = event.target.providerName.value;
    const carInfo = {
      picture,
      brand,
      description,
      price,
      quantity,
      providerName,
      email,
    };

    const { data } = await axios.post(
      "https://enigmatic-earth-44216.herokuapp.com/popularCars",
      carInfo
    );
    if (data.acknowledged) {
      toast.success("Added a new item", {
        position: toast.POSITION.TOP_CENTER,
      });
      event.target.reset();
    }
  };
  return (
    <Container className="my-5 position-relative" data-aos="fade-right">
      <TitleChange title="Add Item" />
      <div className="add-items-container">
        <h2 className="text-center section-title">Add Your Items</h2>
        <p className="text-center">You can add your items like wish.</p>
        <Form onSubmit={handleItem}>
          <Form.Group className="mb-3" controlId="imgUrl">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control
              name="url"
              type="text"
              placeholder="Picture URL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brandName">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              name="brand"
              type="text"
              placeholder="Brand Name"
              required
            />
          </Form.Group>
          <Form.Label>Description</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Description"
            className="mb-3"
          >
            <Form.Control name="description" as="textarea" required />
          </FloatingLabel>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="text"
                placeholder="Price"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                type="text"
                placeholder="Quantity"
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="provider">
            <Form.Label>Service Provider</Form.Label>
            <Form.Control
              name="providerName"
              type="text"
              placeholder="Service Provider"
              required
            />
          </Form.Group>
          <button className="update-btn mx-auto d-block w-50">Add Item</button>
        </Form>
      </div>
    </Container>
  );
};

export default AddItems;
