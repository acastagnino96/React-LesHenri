import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function BasicExample() {
  return (
    <Navbar className="nvbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Les Henrí</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#tarteletas">Tarteletas</NavDropdown.Item>
              <NavDropdown.Item href="#bombones">
                Bombones
              </NavDropdown.Item>
              <NavDropdown.Item href="galletas">Galletas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="regala">
                Regalá
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="px-4" href="#login">Log In</Nav.Link>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicExample;