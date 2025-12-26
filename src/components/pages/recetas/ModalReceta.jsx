import { Modal, Row, Col } from "react-bootstrap";

const ModalReceta = ({ mostrarModal, setMostrarModal, receta }) => {
  return (
    <Modal
      show={mostrarModal}
      onHide={() => setMostrarModal(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {receta.titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <img
            src={receta.urlImagen}
            alt="Imagen de la receta"
            className="w-100 rounded"
          />
        </div>
        <p className="lead">{receta.descripcionBreve}</p>

        <Row>
          <Col>
            <p>Preparación</p>
            <p>{receta.tiempoPrep}</p>
          </Col>
          <Col>
            <p>Cocción</p>
            <p>{receta.tiempoCoccion}</p>
          </Col>
          <Col>
            <p>Porciones</p>
            <p>{receta.porciones}</p>
          </Col>
        </Row>

        <div>
          <h5>Ingredientes</h5>
          <ul>
            {receta?.ingredientes?.map((ingrediente, indice) => (
              <li key={indice}>{ingrediente}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Preparación</h5>
          <ul>
            { receta.pasos.map((paso,indice) => (
              <li key={indice}>{paso}</li>
            ))}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalReceta;
