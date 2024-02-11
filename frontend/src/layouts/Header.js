import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/sponsors">
          <img
            src={logo}
            width="40"
            height="50"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />{" "}
          Perpetual-SMS
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/manage">
              Manage Sponsor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
