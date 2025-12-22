import { Container, Button, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validacionLogin = (datos) => {
    console.log(datos);
  };

  return (
    <section className="seccionPricipal">
      <Container className="d-flex justify-content-center my-5 ">
        <Card
          className="shadow p-4
         col-sm-10 col-lg-5 col-md-8 border border-0"
        >
          <Card.Body>
            <Form onSubmit={handleSubmit(validacionLogin)}>
              <div className="text-center">
                <p>
                  <i className="bi bi-lock-fill fs-2 colorEstilo"></i>
                </p>
                <p className="fw-medium">Iniciar Sesión</p>
                <p>Accede al panel de administración</p>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu usuario"
                  {...register("usuario", {
                    required: "El usuario es obligatorio",
                    minLength: {
                      value: 5,
                      message:
                        "El usuario ingresado debe tener más de 5 caracteres",
                    },
                    maxLength: {
                      value: 8,
                      message: "El usuario ingresado debe al menos 8 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.usuario?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...register("contrasenia", {
                    required: "La contraseña es obligatoria",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.contrasenia?.message}
                </Form.Text>
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
