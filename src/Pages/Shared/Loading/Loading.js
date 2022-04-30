import React from "react";
import { Container } from "react-bootstrap";
import "./Loading.css";
const Loading = () => {
  return (
    <Container className="loading-container">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Loading;
