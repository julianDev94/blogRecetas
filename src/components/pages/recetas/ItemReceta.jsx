
import { Button } from "react-bootstrap";
import { Link } from "react-router";
const ItemReceta = ({receta}) => {
  return (
    <tr>
      <td>
        <div className="d-flex">
            <img src={receta.urlImagen} alt="Imagen ilustrativa de la receta" className="img-fila rounded" />
            <div className="ms-3"><p>{receta.titulo}</p>
            <p className="text-body-secondary">{receta.descripcionBreve}</p></div>
        </div>
      </td>
      <td>{receta.categoria}</td>
      <td>{receta.tiempoPrep} + {receta.tiempoCoccion}</td>
      <td>{receta.porciones}</td>
      <td>
        <div className="d-flex">
          <Link to={"/administrador/modificar/"+ receta.id} className="btn btn-link">
            <i className="bi bi-pencil-square text-primary fs-4"></i>
          </Link>
          <Button variant="link"> 
            <i className="bi bi-trash3 text-danger fs-4"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
