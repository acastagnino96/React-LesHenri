import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function BasicExample() {
  return (
    <Navbar className="nvbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Les Henrí</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Todos</Nav.Link>
            <Nav.Link href="/category/tarteletas">Tarteletas</Nav.Link>
            <Nav.Link href="/category/bombones">Bombones</Nav.Link>
            <Nav.Link href="/category/mentitas">Mentitas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="px-4" href="#login">Log In</Nav.Link>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicExample;