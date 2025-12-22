import { Modal, Row, Col } from "react-bootstrap";

const ModalReceta = ({ mostrarModal, setMostrarModal }) => {
  return (
    <Modal
      show={mostrarModal}
      onHide={() => setMostrarModal(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Titulo receta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <img
            src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg"
            alt="Imagen de la receta"
            className="w-100 rounded"
          />
        </div>
        <p className="lead">Descripcion breve</p>

        <Row>
          <Col>
            <p>Preparación</p>
            <p>Tiempo</p>
          </Col>
          <Col>
            <p>Cocción</p>
            <p>Tiempo</p>
          </Col>
          <Col>
            <p>Porciones</p>
            <p>Cantidad</p>
          </Col>
        </Row>

        <div>
          <h5>Ingredientes</h5>
          <ul>
            <li>Ingrediente 1</li>
          </ul>
        </div>
        <div>
          <h5>Preparación</h5>
          <ul>
            <li>Paso 1</li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalReceta;
