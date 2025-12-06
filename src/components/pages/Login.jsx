import { Container, Button, Form, Card } from "react-bootstrap";

const Login = () => {
  return (
    <section className="seccionPricipal">
      <Container className="d-flex justify-content-center ">
        <Card
          className="shadow-md p-4
         col-sm-10 col-lg-5 col-md-8 border border-0"
        >
          <Card.Body>
            <Form>
              <div className="text-center">
                <p>
                  <i className="bi bi-lock-fill fs-2 colorEstilo"></i>
                </p>
                <p className="fw-medium">Iniciar Sesión</p>
                <p>Accede al panel de administración</p>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu usuario" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" size="lg">
                  Iniciar Sesión
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
