import { Col, Container, Row, Stack, Badge } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
const Inicio = () => {
    return (
        <section className="seccionPricipal">
            <Container className="my-3">
                <p className="fs-5">Explora Nuestras Recetas</p>
                <div className="mb-3">
                    <span className="px-3 py-2 rounded-pill text-white buttonMenu">Categorias</span>
                </div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <CardReceta></CardReceta>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Inicio;