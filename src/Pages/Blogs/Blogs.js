import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import author from "../../Assets/Images/pic1.jpg";
import "./Blogs.css";
const Blogs = () => {
  return (
    <Container className="my-5">
      <article className="blog">
        <div className="blog-img">
          <img className="img-fluid" src={author} alt="" />
        </div>
        <h4 className="section-title">
          Blog: What is your Name?where are you from?
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea vero
          dicta quisquam, quo porro architecto quam ratione nisi facilis earum
          totam? Vel, cum fugiat beatae aut reprehenderit esse ea totam.
        </p>
        <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="author-info d-flex">
            <img src={author} alt="" />
            <div className="ms-3">
              <h6 className="m-0">Mohammad Shariful</h6>
              <p className="text-muted m-0">DECEMBER 12 ,2021</p>
            </div>
          </div>
          <div className="social-icon d-flex align-items-center pt-2">
            <span className="text-muted">1K SHARES</span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaPinterest />
            </span>
          </div>
        </div>
      </article>
      <article className="blog">
        <div className="blog-img">
          <img className="img-fluid" src={author} alt="" />
        </div>
        <h4 className="section-title">
          Blog: What is your Name?where are you from?
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea vero
          dicta quisquam, quo porro architecto quam ratione nisi facilis earum
          totam? Vel, cum fugiat beatae aut reprehenderit esse ea totam.
        </p>
        <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="author-info d-flex">
            <img src={author} alt="" />
            <div className="ms-3">
              <h6 className="m-0">Mohammad Shariful</h6>
              <p className="text-muted m-0">DECEMBER 12 ,2021</p>
            </div>
          </div>
          <div className="social-icon d-flex align-items-center pt-2">
            <span className="text-muted">1K SHARES</span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaPinterest />
            </span>
          </div>
        </div>
      </article>
      <article className="blog">
        <div className="blog-img">
          <img className="img-fluid" src={author} alt="" />
        </div>
        <h4 className="section-title">
          Blog: What is your Name?where are you from?
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea vero
          dicta quisquam, quo porro architecto quam ratione nisi facilis earum
          totam? Vel, cum fugiat beatae aut reprehenderit esse ea totam.
        </p>
        <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="author-info d-flex">
            <img src={author} alt="" />
            <div className="ms-3">
              <h6 className="m-0">Mohammad Shariful</h6>
              <p className="text-muted m-0">DECEMBER 12 ,2021</p>
            </div>
          </div>
          <div className="social-icon d-flex align-items-center pt-2">
            <span className="text-muted">1K SHARES</span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaPinterest />
            </span>
          </div>
        </div>
      </article>
      <article className="blog">
        <div className="blog-img">
          <img className="img-fluid" src={author} alt="" />
        </div>
        <h4 className="section-title">
          Blog: What is your Name?where are you from?
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea vero
          dicta quisquam, quo porro architecto quam ratione nisi facilis earum
          totam? Vel, cum fugiat beatae aut reprehenderit esse ea totam.
        </p>
        <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="author-info d-flex">
            <img src={author} alt="" />
            <div className="ms-3">
              <h6 className="m-0">Mohammad Shariful</h6>
              <p className="text-muted m-0">DECEMBER 12 ,2021</p>
            </div>
          </div>
          <div className="social-icon d-flex align-items-center pt-2">
            <span className="text-muted">1K SHARES</span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaPinterest />
            </span>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Blogs;
