import React from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";

function TopNav() {
  return (
    <Navbar className="topNav justify-content-around">
      <Nav>
        <Nav.Link href="#home">ALL CATEGORIES</Nav.Link>
        <Nav.Link href="#electronics">ELECTRONICS</Nav.Link>
        <Nav.Link href="#fashion">FASHION</Nav.Link>
        <Nav.Link href="#footwear">FOOTWEAR</Nav.Link>
        <Nav.Link href="#dietCenter">DIET CENTRE</Nav.Link>
        <Nav.Link href="#jewellery">JEWELLERY</Nav.Link>
        <Nav.Link href="#furniture">FURNITURE</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopNav;
