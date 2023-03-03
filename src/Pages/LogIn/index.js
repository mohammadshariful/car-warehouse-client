import axios from "axios";
import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogInImg from "../../Assets/Images/linear.jpg";
import auth from "../../Firebase/Firebase.init";
import useGenerateToken from "../../Hooks/useGenerateToken";
import useStateHandle from "../../Hooks/useStateHandle";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import TitleChange from "../Shared/TitleChangle/TitleChange";

import "./login.css";


const LogIn = () => {
  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const { email, password, handleEmail, handlePassword } = useStateHandle();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { token } = useGenerateToken(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);


  if (sending) {
    return <Loading />;
  }

  const loginHandle = async (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    await signInWithEmailAndPassword(emailValue, passwordValue);
  };

  const handlePasswordReset = async () => {
    const emailValue = email.value;

    if (emailValue) {
      await sendPasswordResetEmail(emailValue);
      toast.success("Email Sent", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Enter Your Email", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Container
      className=" d-flex justify-content-center my-5"
      data-aos="fade-up"
    >
      <TitleChange title="Login" />
      <div className="submit-area w-100  mx-auto">
        <div className="singup-img-container">
          <img src={LogInImg} alt="" />
        </div>
        <div className="from-container">
          <div className="text-center">
            <FaUser className="user-icon" />
          </div>
          <h2 className="section-title text-center">LogIn</h2>
          <Form onSubmit={loginHandle} className="w-75 mx-auto">
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            {email?.error && <p className="error">{email.error}</p>}
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
            {error && <p className="error">{error.message}</p>}
            <button className="submit-btn" type="submit">
              LogIn
            </button>
          </Form>
          <p className="forget-password" onClick={handlePasswordReset}>
            Forget Your Password?
          </p>
          <p className="text-center">
            You have no account? <Link to="/signup">SignUp</Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
