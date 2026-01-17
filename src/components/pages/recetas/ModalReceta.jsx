import { Modal, Row, Col } from "react-bootstrap";

const ModalReceta = ({ mostrarModal, setMostrarModal, receta }) => {
  return (
    <Modal
      show={mostrarModal}
      onHide={() => setMostrarModal(false)}
      size="lg"
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
            className="w-100 rounded modalImagen"
          />
        </div>
        <p className="lead">{receta.descripcionBreve}</p>

        <Row>
          <Col>
            <p>Preparación</p>
            <p>{receta.tiempoPrep} min</p>
          </Col>
          <Col>
            <p>Cocción</p>
            <p>{receta.tiempoCoccion} min</p>
          </Col>
          <Col>
            <p>Porciones</p>
            <p>{receta.porciones} personas</p>
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
          <ol>
            { receta.pasos.map((paso,indice) => (
              <li key={indice}>{paso}</li>
            ))}
          </ol>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalReceta;
