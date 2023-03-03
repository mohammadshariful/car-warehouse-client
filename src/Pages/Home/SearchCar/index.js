import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./searchCar.css";
const SearchCar = () => {
    return (
        <section className="my-5">
            <div className="search-container-bg">
                <div className="search-container-bg-overly">
                    <h2 style={{ color: "#fff" }} className="text-center section-title ">
                        Can't find what you're looking
                    </h2>
                    <p className="text-center">
                        Sign up for stock alerts and get notified via email when we have new
                        stock available.
                    </p>
                    <p>I am looking for...</p>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="make">
                                <Form.Control type="text" placeholder="Make" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="model">
                                <Form.Control type="text" placeholder="Model" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="name">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="email">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="phone">
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label=" By ticking this box, you are indicating your consent to receiving marketing messages from The Car Warehouse by post, telephone, fax, email and SMS"
                            />
                        </Form.Group>
                        <Button
                            style={{ backgroundColor: "#6024EB" }}
                            className="mx-auto d-block"
                        >
                            Sign up for stock alerts
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default SearchCar;
