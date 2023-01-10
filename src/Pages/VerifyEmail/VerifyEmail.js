import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import emailIcon from "../../Assets/Icons/icons8-email-64.png";
import auth from "../../Firebase/Firebase.init";
import "./VerifyEmail.css";

const VerifyEmail = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const verifyEmailHandle = async () => {
    await sendEmailVerification();
    toast.success("verification message sent", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="verify-email-container ">
      <div className="verify-info">
        <img className="d-block mx-auto" src={emailIcon} alt="" />
        <h4>Thank you for signing in</h4>
        <h3>Verify your email address</h3>
        <p>
          Didn't get a email?Please click the button to verify agin your address
        </p>
        <button onClick={verifyEmailHandle}>Verify Email Address</button>
      </div>
    </div>
  );
};

export default VerifyEmail;
