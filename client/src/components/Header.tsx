import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Zopy</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="cart">
                <Nav.Link as="p">
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link as="p">
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
