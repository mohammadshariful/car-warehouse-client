import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const CreateReview = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    console.log(name, description);
    handleClose();
  };
  return (
    <>
      <Button
        variant="primary"
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
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Name" />
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
              />
            </FloatingLabel>
            <button
              type="submit"
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
