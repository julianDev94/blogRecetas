import { Col, Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import { useRecetas } from "../../hooks/useRecetas";

const Inicio = () => {
  const { recetas } = useRecetas();

  return (
    <section className="seccionPricipal">
      <Container className="my-3">
        <p className="fs-5">Explora Nuestras Recetas</p>
        <div className="mb-4">
          <span className="px-3 py-2 rounded-pill text-white buttonMenu">
            Categorias
          </span>
        </div>
        <Row xs={1} md={4} className="g-4">
          {recetas.map((receta, indice) => (
            <Col key={indice}>
              <CardReceta receta={receta} key={receta.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
