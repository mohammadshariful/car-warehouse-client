import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight, FaComment } from "react-icons/fa";
import locatinIcon from "../../../Assets/Icons/location.png";
import phoneIcon from "../../../Assets/Icons/phone.png";
import car1 from "../../../Assets/Images/pic1.jpg";
import car2 from "../../../Assets/Images/pic2.jpg";
import car3 from "../../../Assets/Images/pic3.jpg";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer-container pt-4 mt-5">
      <Container className="pt-5">
        <Row>
          <Col md={3}>
            <div>
              <div className="footer-header">
                <h3>
                  Car<span className="color-one">Rev</span>
                </h3>
              </div>
              <p>
                Car dealers order their inventory based on their reading of the
                marketplace, how well certain models have sold in the past, on
                feedback from consumers and of course what the OEM (Original
                Equipment Manufacturer) wants them to order and keep in their
                inventory.
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
              <h3>Recent Posts</h3>
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
                    <img src={car2} alt="" />
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
                    <img src={car3} alt="" />
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
      </Container>
      <div className="coyright">
        <p>
          &copy; Copyright {fullYear} Car Rev Developed By Mohammad Shariful
        </p>
        <p className="copyright-link">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy Us</li>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
