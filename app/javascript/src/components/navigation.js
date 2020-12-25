import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/main/logo';

const Navigation = () => (
  <Navbar bg="light" expand="lg" fixed="top">
    <div className="navbar-brand">
      <Link to="/">
        <Logo baseLayer="navbar_brand" color0="color0" color1="color1" />
      </Link>
    </div>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
