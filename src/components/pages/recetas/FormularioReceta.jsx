import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const [ingredientes, setIngredientes] = useState([""]);
  const [pasos, setPasos] = useState([""]);

  const agregarIngrediente = () => {
    setIngredientes([...ingredientes, ""]);
  };

  const eliminarIngrediente = (posicion) => {
    const ingredientesNuevos = ingredientes.filter((_, i) => i !== posicion);
    setIngredientes(ingredientesNuevos);
  };

  const agregarPasos = () => {
    setPasos([...pasos, ""]);
  };

  const eliminarPaso = (posicion) => {
    const pasosNuevos = pasos.filter((_, pos) => pos !== posicion);
    setPasos(pasosNuevos);
  };

  const validacionFormulario = (datos) => {
    console.log(datos);
  };

  return (
    <section className="seccionPricipal">
      <Container className="my-4">
        <h5>Alta de recetas</h5>
        <Form
          className="bg-white p-4 rounded shadow-lg"
          onSubmit={handleSubmit(validacionFormulario)}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formularioTitulo">
              <Form.Label>Título *</Form.Label>
              <Form.Control type="text" placeholder="Nombre de la receta" {...register("titulo",{
                required:"El titulo de la receta es obligatorio",
                minLength: {
                  value: 4,
                  message: "El titulo de la receta tiene menos de 4 caracteres"
                },
                maxLength:{
                  value: 20,
                  message: "El titulo de la receta tiene más"
                }})} />
            </Form.Group>

            <Form.Group as={Col} controlId="formularioCategoria">
              <Form.Label>Categoria *</Form.Label>
              <Form.Select aria-label="Default select example" {...register("categoria", {required: "La categoria es obligatoria"})}>
                <option>Seleccione la categoria</option>
                <option value="Principal">Principal</option>
                <option value="Postre">Postre</option>
                <option value="Ensalada">Ensalada</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="textAreaDescripcion">
            <Form.Label>Descripcion breve *</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("descripcionBreve",{
              required: "La descripcion es obligatoria",
              minLength:{
                value: 4,
                message: "La descripcion ingresada tiene menos de 4 caracteres"
              },
              maxLength:{
                value: 30,
                message: "La descripcion ingresada tiene más de 30 caracteres"
              }
            })}/>
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formularioTiempoPrep">
              <Form.Label>Tiempo de Prep. Minutos*</Form.Label>
              <Form.Control type="number" placeholder="Por ejemplo: 20" {...register("tiempoPrep", {
                required: "El tiempo de preparacion es obligatorio",
                min:{
                  value: 1,
                  message: "El tiempo de preparacion debe ser mayor a 1 minuto"
                },
                max:{
                  value: 500,
                  message: "El tiempo de preparacion debe ser menor a 500 minutos"
                }
              })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formularioTiempoCoccion">
              <Form.Label>Tiempo Cocción. Minutos*</Form.Label>
              <Form.Control type="number" placeholder="Por ejemplo: 20" {...register("tiempoCoccion",{
                required: "El tiempo de coccion es obligatorio",
                min:{
                  value: 1,
                  message: "El tiempo de coccion debe superior a 1 minuto"
                },
                max: {
                  value: 500,
                  message: "El tiempo de coccion debe ser menor a 500 minutos"
                }
              })} />
            </Form.Group>
            <Form.Group as={Col} controlId="formularioPorciones">
              <Form.Label>Porciones *</Form.Label>
              <Form.Control type="number" placeholder="Por ejemplo: 5" {...register("porciones", {
                required: "La cantidad de porciones es obligatoria",
                min:{
                  value: 1,
                  message: "La cantidad de porciones debe ser mayor o igual a 1"
                },
                max:{
                  value: 20,
                  message: "La cantidad de porciones debe ser menor o igual a 20"
                }
              })} />
            </Form.Group>
          </Row>
          <Form.Group controlId="formularioURLImagen" className="mb-3">
            <Form.Label>URL Imagen *</Form.Label>
            <Form.Control
              type="url"
              placeholder="Por ejemplo: https://imagen.com"
              {...register("urlImagen", {

                required: "La URL de la imagen es obligatoria",
                pattern:{
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "La direccion de la url ingresada no es valida"
                }
              })}
            />
          </Form.Group>
          <Form.Group controlId="formularioIngredientes">
            <div className="d-flex mb-2">
              <Form.Label className="me-auto">Ingredientes *</Form.Label>
              <div>
                <Button type="button" onClick={agregarIngrediente}>
                  + Ingredientes
                </Button>
              </div>
            </div>
            {ingredientes.map((_, posicion) => (
              <div className="d-flex mb-3" key={posicion}>
                <Form.Control
                  type="text"
                  placeholder={`Ingrediente ${posicion + 1}`}
                  {...register("ingredientes", {
                    required: "El ingrediente es obligatorio",
                    minLength:{
                      value: 3,
                      message: "La cantidad de caracteres debe ser mayor o igual 3"
                    },
                    maxLength:{
                      value: 30,
                      message: "La cantidad de caracteres debe ser menor o igual a 30"
                    }
                  })}
                />
                <div className="ms-3">
                  {ingredientes.length > 1 && (
                    <Button
                      variant="danger"
                      onClick={() => eliminarIngrediente(posicion)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </Form.Group>
          <Form.Group controlId="formularioPasos" className="mb-3">
            <div className="d-flex mb-2">
              <Form.Label className="me-auto">Pasos para receta *</Form.Label>
              <div>
                <Button type="button" onClick={agregarPasos}>
                  + Pasos
                </Button>
              </div>
            </div>
            {pasos.map((_, posicion) => (
              <div className="d-flex mb-3" key={posicion}>
                <p className="btn btn-danger me-3">{posicion + 1}</p>
                <Form.Control
                  type="text"
                  placeholder={`Paso ${posicion + 1}`}
                  {...register("pasos", {
                    required: "Los pasos son obligatorios",
                    minLength:{
                      value: 3,
                      message: "La cantidad de caracteres debe ser mayor o igual a 3"
                    },
                    maxLength:{
                      value: 50,
                      message: "La cantidad de caracteres debe ser menor o igual a 30"
                    }
                  })}
                />
                <div className="ms-3">
                  {pasos.length > 1 && (
                    <Button
                      variant="danger"
                      onClick={() => eliminarPaso(posicion)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </Form.Group>
          <div className="d-flex gap-3 justify-content-center mt-3">
            <Button type="submit" variant="danger" size="lg">
              Crear receta
            </Button>
            <Button type="button" variant="secondary" size="lg">
              Cancelar
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;
