import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/main/logo';

const Navigation = () => (
  <div className="nav_wrap">
    <Navbar expand="lg" fixed="top">
      <div className="navbar-brand">
        <Link to="/">
          <Logo baseLayer="navbar_brand" color0="color0" color1="color1" />
        </Link>
      </div>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
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
  </div>
);

export default Navigation;
