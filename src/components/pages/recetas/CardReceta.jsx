import { Card } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Card className="cardTransicion">
      <Card.Img variant="top" src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg" />
      <Card.Body>
        <Card.Title>Nombre receta</Card.Title>
        <Card.Text>Descripcion corta</Card.Text>
        <div className="d-flex">
          <p className="me-3">
            <i class="bi bi-clock-history"></i> Duracion preparacion
          </p>
          <p>
            <i class="bi bi-people"></i> 
            Cantidad personas
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardReceta;
