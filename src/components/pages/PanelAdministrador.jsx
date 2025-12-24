import { Container } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../helpers/consultasAPI";
const PanelAdministrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerArrayRecetas();
  }, [recetas]);

  const obtenerArrayRecetas = async () => {
    try {
      const recetas = await obtenerRecetas();
      if (recetas.status === 201) {
        const datosRecetas = await recetas.json();
        setRecetas(datosRecetas);
      }
    } catch (error) {}
  };
  return (
    <section className="seccionPricipal">
      <Container className="mt-4">
        <div className="d-flex justify-content-between">
          <h2>Administrar recetas</h2>
          <Link
            to={"/administrador/crear"}
            className=" btn btn-primary text-white"
          >
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
              {recetas.map((receta) => (
                <ItemReceta receta={receta} />
              ))}
            </tbody>
          </table>
        </article>
      </Container>
    </section>
  );
};

export default PanelAdministrador;
