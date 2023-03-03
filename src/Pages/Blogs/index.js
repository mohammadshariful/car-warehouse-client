import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import authorImg from "../../Assets/Images/author-img.jpg";
import jwt from "../../Assets/Images/jwt.png";
import nodeMongodb from "../../Assets/Images/node-mongodb.png";
import nodeVsJs from "../../Assets/Images/node-vs-js.jpg";
import sqlVSnoSql from "../../Assets/Images/sql-vs-nosql.png";
import Comments from "../Comments/Comments";
import TitleChange from "../Shared/TitleChangle/TitleChange";

import "./blog.css";

const Blogs = () => {
  return (
    <Container className="my-5 d-flex flex-column flex-md-row">
      <TitleChange title="Blogs" />
      <div className="blogs-container" data-aos="fade-right">
        <article className="blog" data-aos="fade-up">
          <div className="blog-img">
            <img className="img-fluid" src={nodeVsJs} alt="" />
          </div>
          <h4 className="section-title">
            Blog: Difference between javascript and nodejs
          </h4>
          <h6>Javascript</h6>
          <p>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.It is
            basically used on the client-side.
          </p>
          <h6>Node js</h6>
          <p>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.V8 is
            the Javascript engine inside of node.js that parses and runs
            Javascript.
          </p>
          <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
            <div className="author-info d-flex">
              <img src={authorImg} alt="" />
              <div className="ms-3">
                <h6 className="m-0">Mohammad Shariful</h6>
                <p className="text-muted m-0">DECEMBER 10 ,2021</p>
              </div>
            </div>
            <div className="social-icon d-flex align-items-center pt-2">
              <span className="text-muted">12K SHARES</span>
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
        <article className="blog" data-aos="fade-up">
          <div className="blog-img">
            <img className="img-fluid" src={nodeMongodb} alt="" />
          </div>
          <h4 className="section-title">
            Blog: When should you use nodejs and when should you use mongodb?
          </h4>
          <p>
            Node js and Mongodb are two difference technology.Node js is a
            javascript runtime environment.It's actually helps javascript to run
            outside of server.Now it's mostly used for server side development.
            <br />
            Mongodb is a database and also known it's a No SQL database which is
            document oriented.It represents data as of JSON documents.It's help
            us to stored data.
            <br />
            When I have to build a website and I have needed database to store
            data or other information. So mongodb helps use to stored data and
            node js help website to run to outside of server.
          </p>
          <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
            <div className="author-info d-flex">
              <img src={authorImg} alt="" />
              <div className="ms-3">
                <h6 className="m-0">Mohammad Shariful</h6>
                <p className="text-muted m-0">DECEMBER 20 ,2021</p>
              </div>
            </div>
            <div className="social-icon d-flex align-items-center pt-2">
              <span className="text-muted">9K SHARES</span>
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
        <article className="blog" data-aos="fade-up">
          <div className="blog-img">
            <img className="img-fluid" src={sqlVSnoSql} alt="" />
          </div>
          <h4 className="section-title">
            Blog: Differences between sql and nosql databases.
          </h4>
          <h6>SQL</h6>
          <ul>
            <li>Relational database management system(RDBMS)</li>
            <li>This database have fixed or static</li>
            <li>Verically Scalable</li>
          </ul>
          <h6>No SQL</h6>
          <ul>
            <li>Non-relational or distributed database system</li>
            <li>They have dynamic schema</li>
            <li>Horizontali scalable</li>
          </ul>
          <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
            <div className="author-info d-flex">
              <img src={authorImg} alt="" />
              <div className="ms-3">
                <h6 className="m-0">Mohammad Shariful</h6>
                <p className="text-muted m-0">JANUARY 29 ,2022</p>
              </div>
            </div>
            <div className="social-icon d-flex align-items-center pt-2">
              <span className="text-muted">13K SHARES</span>
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
        <article className="blog" data-aos="fade-up">
          <div className="blog-img">
            <img className="img-fluid" src={jwt} alt="" />
          </div>
          <h4 className="section-title">
            Blog: What is the purpose of jwt and how does it work?
          </h4>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <br />
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
          <div className="blog-info d-flex justify-content-between align-items-center flex-column flex-md-row">
            <div className="author-info d-flex">
              <img src={authorImg} alt="" />
              <div className="ms-3">
                <h6 className="m-0">Mohammad Shariful</h6>
                <p className="text-muted m-0">March 12 ,2021</p>
              </div>
            </div>
            <div className="social-icon d-flex align-items-center pt-2">
              <span className="text-muted">6K SHARES</span>
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
      </div>
      <Comments />
    </Container>
  );
};

export default Blogs;
