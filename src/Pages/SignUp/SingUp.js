import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import singupImg from "../../Assets/Images/submitImg.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./SingUp.css";
const SingUp = () => {
  return (
    <Container className=" d-flex justify-content-center  my-5">
      <div className="submit-area w-75  mx-auto">
        <div className="singup-img-container">
          <img src={singupImg} alt="" />
        </div>
        <div className="from-container">
          <div className="text-center">
            <FaUser className="user-icon" />
          </div>
          <h2 className="section-title text-center">Signup</h2>
          <Form className="w-75 mx-auto">
            <Form.Group className="mb-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="email" placeholder="Enter Confirm Password" />
            </Form.Group>
            <button className="submit-btn" type="submit">
              Sign Up
            </button>
          </Form>
          <p className="text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingUp;
