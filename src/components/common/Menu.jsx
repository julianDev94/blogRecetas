import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><i className="bi bi-fork-knife fs-3 colorEstilo"></i> Mi blog de recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="buttonMenu rounded text-white text-center" href="#home">Ver Recetas</Nav.Link>
            <Nav.Link href="#link"  className="ms-3"><i className="bi bi-arrow-bar-right"></i> Iniciar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
