import React from "react";
import { Container } from "react-bootstrap";
import notFoundImg from "../../Assets/Images/notfound.gif";
import "./NotFound.css";
const NotFound = () => {
  return (
    <Container className="notFound-container w-75">
      <div>
        <img className="img-fluid" src={notFoundImg} alt="notfound" />
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
          <button type="button" className="go-home-btn">
            Go Home
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
