import { Container } from "react-bootstrap";

const PanelAdministrador = () => {
  return (
    <section className="seccionPricipal">
      <Container className="mt-4">
        <div className="d-flex justify-content-between">
          <h2>Administrar recetas</h2>
          <a href="" className=" btn btn-primary text-white">
            + Nueva Receta
          </a>
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div className="d-flex">
                    <a href="" ><i className="bi bi-pencil-square text-primary fs-4 me-3"></i></a>
                    <a href=""><i className="bi bi-trash3 text-danger fs-4"></i></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </Container>
    </section>
  );
};

export default PanelAdministrador;
