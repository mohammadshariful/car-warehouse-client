import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import CustomLink from "../../CustomLink/CustomLink";

import "./menu-bar.css";

const MenuBar = () => {

  const [user] = useAuthState(auth);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-container"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h3>
            Car<span className="brand-name">Rev</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <CustomLink to="/">Home</CustomLink>
            {user && (
              <>
                <CustomLink to="/additem">Add Item</CustomLink>
                <CustomLink to="/myitem">My items</CustomLink>
                <CustomLink to="/manageitems">Manage Items</CustomLink>
              </>
            )}
            <CustomLink to="/car-gallary">Cars Gallary</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            {user ? (
              <CustomLink to="/login" onClick={() => { signOut(auth); localStorage.removeItem("accessToken") }}>
                LogOut
              </CustomLink>
            ) : (
              <CustomLink to="/login">LogIn</CustomLink>
            )}
            <CustomLink to="/signup">SignUp</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
