import { Card } from "react-bootstrap";
import ModalReceta from "./ModalReceta";
import { useState } from "react";
const CardReceta = ({receta}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  return (
    <>
      <div onClick={() => setMostrarModal(true)} className="d-flex h-100">
        <Card className="cardTransicion h-100 w-100">
          <Card.Img
            variant="top"
            src={`${receta.urlImagen}`}
            alt="Imagen de la receta no disponible"
            className="cardImagenReceta"
          />
          <Card.Body>
            <span className="bg-primary rounded px-2 py-1 text-white">
              {receta.categoria}
            </span>
            <Card.Title className="mt-3">{receta.titulo}</Card.Title>
            <Card.Text>{receta.descripcionBreve}</Card.Text>
            <div className="d-flex">
              <p className="me-3">
                <i className="bi bi-clock-history"></i> {receta.tiempoPrep} min
              </p>
              <p>
                <i className="bi bi-people"></i> {receta.porciones} personas
              </p>
            </div>
          </Card.Body>
        </Card>
        
      </div>

      <ModalReceta
        mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        receta={receta}
      />
    </>
  );
};

export default CardReceta;
