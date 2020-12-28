import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TitleBar = () => {
  return (
    <Navbar bg="info" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Physics Bookshop
      </Navbar.Brand>
      <Nav className="w-100 justify-content-end">
        <Nav.Item>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/shopping" className="nav-link">
            Shopping
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TitleBar;
