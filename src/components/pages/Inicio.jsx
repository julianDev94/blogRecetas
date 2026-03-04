import { Col, Container, Row, Spinner } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import { useRecetas } from "../../hooks/useRecetas";
const Inicio = () => {
  const { recetas, isPending, isError } = useRecetas();

  return (
    <section className="seccionPricipal">
      <Container className="my-3">
        <p className="fs-5">Explora Nuestras Recetas</p>
        <div className="mb-4">
          <span className="px-3 py-2 rounded-pill text-white buttonMenu">
            Categorias
          </span>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {isPending ? (
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <Spinner animation="border" variant="danger" />
              <span className="fw-bold">Cargando recetas...</span>
            </div>
          ) : isError? (<div className="d-flex flex-column justify-content-center align-items-center w-100">
              <p className="fw-bold text-warning ">Error al cargas las recetas.</p>
            </div>) : recetas.length === 0? (<div className="d-flex flex-column justify-content-center align-items-center w-100">
              <span className="fw-bold">No hay recetas disponibles por el momento.</span>
            </div>) : (
            recetas.map((receta) => (
              <Col key={receta._id}>
                <CardReceta receta={receta} key={receta._id} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
