import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
// import VerifyEmail from "../../VerifyEmail/VerifyEmail";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return <VerifyEmail />;
  // }

  return children;
};

export default RequireAuth;
