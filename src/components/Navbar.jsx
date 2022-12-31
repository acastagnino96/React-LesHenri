import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar className="nvbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Les Henrí</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Todos</Nav.Link>
            <Nav.Link as={Link} to="/category/tarteletas">Tarteletas</Nav.Link>
            <Nav.Link as={Link} to="/category/bombones">Bombones</Nav.Link>
            <Nav.Link as={Link} to="/category/mentitas">Mentitas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="px-4" as={Link} to="#login">Log In</Nav.Link>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicExample;