import React from "react"; 
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  
  return (
      <Nav className="nav" activeKey="/" as="ul">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/aboutus">
          About Us
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
  

export default NavMenu;