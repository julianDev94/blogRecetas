import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router";

const Menu = () => {
  return (
    <Navbar expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <i className="bi bi-fork-knife fs-3 colorEstilo"></i> Mi blog de
          recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              end
              className="buttonMenu nav-link rounded text-white text-center"
            >
              Ver Recetas
            </NavLink>
            <NavLink
              to="/administrador"
              end
              className="buttonMenu nav-link rounded text-white text-center ms-3"
            >
              Panel de Administrador
            </NavLink>
            <NavLink to="/login" end className="ms-3 nav-link">
              <i className="bi bi-arrow-bar-right"></i> Iniciar Sesión
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
