import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import singupImg from "../../Assets/Images/linear.jpg";
import auth from "../../Firebase/Firebase.init";
import useStateHandle from "../../Hooks/useStateHandle";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import TitleChange from "../Shared/TitleChangle/TitleChange";
import "./SingUp.css";
const SingUp = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    confirmPassword,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
  } = useStateHandle();
  const [createUserWithEmailAndPassword, user, , error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  useEffect(() => {
    if (user) {
      navigate("/");
      toast.success("user signup successfull", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [user, navigate]);

  const submitHandle = (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    if (passwordValue === confirmPasswordValue) {
      createUserWithEmailAndPassword(emailValue, passwordValue);
    }
  };

  return (
    <Container
      className=" d-flex justify-content-center my-5"
      data-aos="fade-up"
    >
      <TitleChange title="Signup" />
      <div className="submit-area w-100 mx-auto">
        <div className="singup-img-container">
          <img src={singupImg} alt="" />
        </div>
        <div className="from-container">
          <div className="text-center">
            <FaUser className="user-icon" />
          </div>
          <h2 className="section-title text-center">SignUp</h2>
          <Form onSubmit={submitHandle} className="w-75 mx-auto">
            <Form.Group className="mb-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onBlur={handleName}
                type="text"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
                required
              />
              {email?.error && <p className="error">{email.error}</p>}
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
            {password?.error && <p className="error">{password.error}</p>}
            <Form.Group className="mb-2" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onBlur={handleConfirmPassword}
                type="password"
                placeholder="Enter Confirm Password"
                required
              />
            </Form.Group>
            {confirmPassword?.error && (
              <p className="error">{confirmPassword.error}</p>
            )}
            {error && <p className="error">{error.message}</p>}
            <button className="submit-btn" type="submit">
              SignUp
            </button>
          </Form>
          <p className="text-center">
            Already have an account? <Link to="/login">LogIn</Link>
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
