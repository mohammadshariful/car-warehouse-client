import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight, FaComment } from "react-icons/fa";
import locatinIcon from "../../../Assets/Icons/location.png";
import carLogo from "../../../Assets/Icons/logo.png";
import phoneIcon from "../../../Assets/Icons/phone.png";
import car1 from "../../../Assets/Images/pic1.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <div className="footer-header">
                <img src={carLogo} alt="carImg" />
                <h3>
                  Car<span className="color-one">Rev</span>
                </h3>
              </div>
              <p>
                CarZone is simply dummy text of the print ing and in type
                setting industry. Lorem Ipsum has bee the industry's standard...
              </p>
              <div>
                <p className="footer-contact">
                  <img src={locatinIcon} alt="" />
                  <span>
                    Demo Address #8901 Marmora Road Chi Minh City, Vietnam
                  </span>
                </p>
                <p className="footer-contact">
                  <img src={phoneIcon} alt="" />
                  <span>Phone : 0800-123456 (24/7 Support Line)</span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <FaAngleRight />
                  <span>Latest Cars</span>
                </li>
                <li>
                  <FaAngleRight />
                  <span>Upcoming Cars</span>
                </li>
                <li>
                  <FaAngleRight />
                  <span>Search Used Car</span>
                </li>
                <li>
                  <FaAngleRight />
                  <span>Car Sell</span>
                </li>
                <li>
                  <FaAngleRight />
                  <span>Compare Car</span>
                </li>
                <li>
                  <FaAngleRight />
                  <span>Car Review</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h3>Recent Pots</h3>
              <div className="recent-posts-container">
                <div className="post-one">
                  <img src="" alt="" />
                  <div className="d-flex">
                    <img src={car1} alt="" />
                    <div className="mx-1">
                      <h6>Time to change...</h6>
                      <p>
                        By Admin /<FaComment className="mx-2" /> 28
                      </p>
                    </div>
                  </div>
                </div>
                <div className="post-two">
                  <img src="" alt="" />
                  <div className="d-flex">
                    <img src={car1} alt="" />
                    <div className="mx-1">
                      <h6>Time to change...</h6>
                      <p>
                        By Admin /<FaComment className="mx-2" /> 28
                      </p>
                    </div>
                  </div>
                </div>
                <div className="post-three">
                  <img src="" alt="" />
                  <div className="d-flex">
                    <img src={car1} alt="" />
                    <div className="mx-1">
                      <h6>Time to change...</h6>
                      <p>
                        By Admin /<FaComment className="mx-2" /> 28
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h3>Newsletter</h3>
              <p>
                Keep up on our always evolving products features and technology.
                Enter your e-mail and subscribe to our newsletter.
              </p>
              <div className="newsletter-container">
                <input type="email" placeholder="Enter Your Email" />
                <button type="button">
                  SUBSCRIBE <FaAngleRight />
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="coyright">
          <p>&copy; Copyright 2021 Car Dealer Developed By DexignLab</p>
          <p className="copyright-link">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy Us</li>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
