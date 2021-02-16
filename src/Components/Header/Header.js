import React from "react";
import "./Header.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  NavDropdown,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserStore from "../../UserStore";

function Header() {
  const history = useHistory();
  const doLogout = () => {
    UserStore.isLoggedIn = false;
    history.push("/login");
  };
  return (
    <Navbar className="header justify-content-around">
      <Form inline>
        <Navbar.Brand>Offer Dhamaka</Navbar.Brand>
        <InputGroup style={{ width: "500px" }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1" className="center">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Search for products...!" name="key" />
        </InputGroup>
      </Form>
      <Nav>
        <NavDropdown title="User Name" id="basic-nav-dropdown">
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Item>Orders</NavDropdown.Item>
          <NavDropdown.Item>Wishlist</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={doLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          Cart
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
