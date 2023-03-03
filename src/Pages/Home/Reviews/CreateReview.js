import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

import auth from "../../../Firebase/Firebase.init";

const CreateReview = ({ update, setUpdate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user] = useAuthState(auth);
  const name = user?.displayName;
  let date = new Date().toISOString().slice(0, 10);

  const handleReview = async (event) => {
    event.preventDefault();
    const star = parseInt(event.target.star.value);
    const description = event.target.description.value;
    const reviewInfo = { name, description, star, date };
    const url = "https://car-rev-server-2023.onrender.com/api/v1/reviews";
    await axios.post(url, reviewInfo);
    setUpdate(!update);

    toast.success("Review Added Successful", {
      position: toast.POSITION.TOP_CENTER,
    });

    handleClose();
  };

  return (
    <>
      <Button
        style={{ backgroundColor: "#6024EB" }}
        className="d-block mx-auto"
        onClick={handleShow}
      >
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          write a review
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleReview}>
            <Form.Group className="mb-3" controlId="star">
              <Form.Label>Give Star</Form.Label>
              <Form.Control
                name="star"
                type="number"
                placeholder="star"
                required
              />
            </Form.Group>
            <Form.Label>Description</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                name="description"
                as="textarea"
                placeholder="Leave a comment here"
                required
              />
            </FloatingLabel>
            <button
              type="submit"
              style={{ backgroundColor: "#6024EB" }}
              className="btn btn-primary d-block mx-auto w-50"
            >
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateReview;
