import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogInImg from "../../Assets/Images/linear.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./LogIn.css";
const LogIn = () => {
  return (
    <Container className=" d-flex justify-content-center  my-5">
      <div className="login-area w-75  mx-auto">
        <div className="singup-img-container">
          <img src={LogInImg} alt="" />
        </div>
        <div className="from-container">
          <div className="text-center">
            <FaUser className="user-icon" />
          </div>
          <h2 className="section-title text-center">LogIn</h2>
          <Form className="w-75 mx-auto">
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <button className="submit-btn" type="submit">
              LogIn
            </button>
          </Form>
          <p className="forget-password">Forget Your Password?</p>
          <p className="text-center">
            You have no account? <Link to="/signup">SignUp</Link>
          </p>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
