import React from "react";
import facebook from "../../../Assets/Icons/icons8-facebook-30.png";
import google from "../../../Assets/Icons/icons8-google-30.png";
import "./SocialLogin.css";
const SocialLogin = () => {
  return (
    <div>
      <p className="d-flex justify-content-center align-items-center">
        <span className="line"></span>
        <span>or</span>
        <span className="line"></span>
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <button className="social-login">
          <img src={google} alt="" />
          <span>Google</span>
        </button>
        <button className="social-login">
          <img src={facebook} alt="" />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
