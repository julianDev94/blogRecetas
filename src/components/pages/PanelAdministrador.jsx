import { Container } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { Link } from "react-router";
const PanelAdministrador = () => {
  return (
    <section className="seccionPricipal">
      <Container className="mt-4">
        <div className="d-flex justify-content-between">
          <h2>Administrar recetas</h2>
          <Link to={"/administrador/formulario"} className=" btn btn-primary text-white">
            + Nueva Receta
          </Link>
        </div>
        <article className="my-4 table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Categoría</th>
                <th scope="col">Tiempo Total</th>
                <th scope="col">Porciones</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <ItemReceta />
            </tbody>
          </table>
        </article>
      </Container>
    </section>
  );
};

export default PanelAdministrador;
