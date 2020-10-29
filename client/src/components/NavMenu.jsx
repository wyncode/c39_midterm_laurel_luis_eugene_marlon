import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
      <Nav className="nav" activeKey="/" as="ul">
      <Nav.Item className="navitem">
        <Nav.Link as={Link} to="/" className="navlink">
          <p class="navtext">Home</p>
        </Nav.Link>
      </Nav.Item >
      <Nav.Item className="navitem">
        <Nav.Link as={Link} to="/aboutus" className="navlink">
        <p class="navtext">About Us</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
  
export default NavMenu;
