import React from "react"; 
import Nav from 'react-bootstrap/Nav';

// Finish Design

const NavMenu = () => {
    return (
      <Nav activeKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link  href="/">
            Albums
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/aboutus">
            About Us
          </Nav.Link>
        </Nav.Item>
        </Nav> 
    );
  };

export default NavMenu;