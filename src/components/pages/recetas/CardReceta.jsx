import { Card } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Card className="cardTransicion border-0">
      <Card.Img variant="top" src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg" alt="Imagen de la receta no disponible" />
      <Card.Body>
        <span className="bg-primary rounded px-2 py-1 text-white">Categoria</span>
        <Card.Title className="mt-3">Nombre receta</Card.Title>
        <Card.Text>Descripcion corta</Card.Text>
        <div className="d-flex">
          <p className="me-3">
            <i className="bi bi-clock-history"></i> Duracion preparacion
          </p>
          <p>
            <i className="bi bi-people"></i> Cantidad personas
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardReceta;
