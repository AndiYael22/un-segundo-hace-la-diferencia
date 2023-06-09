import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../imagenes/logo.png"

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <img src={logo} alt="" />
        <Navbar.Brand href="#home">Nombre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menú del Sistema" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">carga de informacion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Modificacion de datos
              </NavDropdown.Item>
        
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;