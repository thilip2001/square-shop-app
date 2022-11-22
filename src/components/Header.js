import React, { useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Cartcontext } from "../context/Context";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = ({ token, setToken }) => {
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;

  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <header>
      <Navbar
        bg="dark"
        className="p-2"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-b">Square-Shop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto me-sm-2">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart">
                    ({" "}
                    {state.reduce((acc, product) => acc + product.quantity, 0)})
                  </i>{" "}
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link onClick={logOutHandler}>
                  <i className="fas fa-user"></i>{" "}
                  {token ? "Sign Out" : "Sign In"}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="text-center text-light mb-0 bg-primary">
        Super Deal! Free shipping on Orders Above $50
      </p>
    </header>
  );
};

export default Header;
