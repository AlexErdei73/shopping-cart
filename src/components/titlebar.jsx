import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const TitleBar = (props) => {
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
            <FiShoppingCart />{" "}
            <Badge variant="secondary">{props.cartItemsCount}</Badge>
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TitleBar;
