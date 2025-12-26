import { Container } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../helpers/consultasAPI";
import { useRecetas } from "../../hooks/useRecetas";
const PanelAdministrador = () => {

  const {recetas} = useRecetas(); 
  

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
        <article className="my-4 table-responsive rounded shadow-lg">
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
                <ItemReceta receta={receta} key={receta.id}/>
              ))}
            </tbody>
          </table>
        </article>
      </Container>
    </section>
  );
};

export default PanelAdministrador;
