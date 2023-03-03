import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import noSerarchFound from "../../Assets/Images/notfound.gif";

import "./not-found.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="notFound-container w-75">
      <div>
        <img className="img-fluid" src={noSerarchFound} alt="notfound" />
        <div className="notFound-info">
          <h2>Site Not Found !!</h2>
          <p>Well,this is awkward.The site you're looking for in not here.</p>
          <p>
            <small>
              Is this your site?
              <span className="link-color">Get more info </span> or
              <span className="link-color"> Contact Support</span>
            </small>
          </p>
          <button
            onClick={() => navigate("/")}
            type="button"
            className="go-home-btn"
          >
            Go Home
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
