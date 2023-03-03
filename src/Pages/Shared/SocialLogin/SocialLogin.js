import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import facebook from "../../../Assets/Icons/icons8-facebook-30.png";
import google from "../../../Assets/Icons/icons8-google-30.png";
import auth from "../../../Firebase/Firebase.init";
import useGenerateToken from "../../../Hooks/useGenerateToken";
import Loading from "../../Shared/Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { token } = useGenerateToken(user1 || user2)

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading1 || loading2) {
    return <Loading />;
  }

  return (
    <>
      <p className="d-flex justify-content-center align-items-center">
        <span className="line"></span>
        <span>or</span>
        <span className="line"></span>
      </p>
      {(error1 || error2) && (
        <p className="text-center error">
          {error1?.message} {error2?.message}
        </p>
      )}
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={() => signInWithGoogle()} className="social-login">
          <img src={google} alt="" />
          <span>Google</span>
        </button>
        <button onClick={() => signInWithFacebook()} className="social-login">
          <img src={facebook} alt="" />
          <span>Facebook</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
