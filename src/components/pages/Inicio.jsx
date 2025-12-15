import { Col, Container, Row, Card } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
const Inicio = () => {
    return (
        <section className="seccionPricipal">
            <Container className="my-3">
                <p className="fs-5">Explora Nuestras Recetas</p>
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