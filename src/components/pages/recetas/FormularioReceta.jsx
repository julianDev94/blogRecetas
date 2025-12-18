import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
const FormularioReceta = () => {
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

  return (
    <section className="seccionPricipal">
      <Container className="my-4">
        <h5>Alta de recetas</h5>
        <Form className="bg-white p-4 rounded shadow-lg">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formularioTitulo">
              <Form.Label>Título *</Form.Label>
              <Form.Control type="text" placeholder="Nombre de la receta" />
            </Form.Group>

            <Form.Group as={Col} controlId="formularioCategoria">
              <Form.Label>Categoria *</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccione la categoria</option>
                <option value="Principal">Principal</option>
                <option value="Postre">Postre</option>
                <option value="Ensalada">Ensalada</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="textAreaDescripcion">
            <Form.Label>Descripcion breve *</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formularioTiempoPrep">
              <Form.Label>Tiempo de Prep. Minutos*</Form.Label>
              <Form.Control type="number" placeholder="Por ejemplo: 20" />
            </Form.Group>

            <Form.Group as={Col} controlId="formularioTiempoCoccion">
              <Form.Label>Tiempo Cocción. Minutos*</Form.Label>
              <Form.Control type="number" placeholder="Por ejemplo: 20" />
            </Form.Group>
            <Form.Group as={Col} controlId="formularioPorciones">
              <Form.Label>Porciones *</Form.Label>
              <Form.Control type="number" placeholder="Por ejemplo: 5" />
            </Form.Group>
          </Row>
          <Form.Group controlId="formularioURLImagen" className="mb-3">
            <Form.Label>URL Imagen *</Form.Label>
            <Form.Control
              type="url"
              placeholder="Por ejemplo: https://imagen.com"
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
