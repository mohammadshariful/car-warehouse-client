import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import TitleChange from "../../Shared/TitleChangle/TitleChange";
import "./CarGallary.css";
const CarGallary = () => {
  return (
    <Container className="my-5">
      <TitleChange title="Car Gallary" />
      <div className="cars-gallary">
        <h2 className="text-center section-title">Cars Gallary</h2>
        <div className="link-container">
          <p className="link">
            <CustomLink to="/carsgallary/allcars">All Cars</CustomLink>
          </p>
          <p className="link">
            <CustomLink to="/carsgallary/interior">Interior</CustomLink>
          </p>
          <p className="link">
            <CustomLink to="/carsgallary/exterior">Exterior</CustomLink>
          </p>
          <p className="link">
            <CustomLink to="/carsgallary/roadtest">Road Test</CustomLink>
          </p>
        </div>
        <Outlet />
      </div>
    </Container>
  );
};

export default CarGallary;
