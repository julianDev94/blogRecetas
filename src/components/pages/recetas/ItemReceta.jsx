import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { eliminarUnProducto } from "../../../helpers/consultasAPI";
import Swal from "sweetalert2";
const ItemReceta = ({ receta }) => {
  const eliminarReceta = () => {
    Swal.fire({
      title: "Esta seguro de eliminar la receta?",
      text: "Si lleva a cabo la acción, luego es irreversible..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#15ad36",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarUnProducto(receta._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta borrada exitosamente!",
            text: `La receta de ${receta.titulo}`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="d-flex">
          <img
            src={receta.urlImagen}
            alt="Imagen ilustrativa de la receta"
            className="img-fila rounded object-fit-cover"
          />
          <div className="ms-3">
            <p>{receta.titulo}</p>
            <p className="text-body-secondary">{receta.descripcionBreve}</p>
          </div>
        </div>
      </td>
      <td>{receta.categoria}</td>
      <td>
        {receta.tiempoPrep} + {receta.tiempoCoccion}
      </td>
      <td>{receta.porciones}</td>
      <td>
        <div className="d-flex">
          <Link
            to={"/administrador/modificar/" + receta._id}
            className="btn btn-link"
          >
            <i className="bi bi-pencil-square text-primary fs-4"></i>
          </Link>
          <Button variant="link" onClick={eliminarReceta}>
            <i className="bi bi-trash3 text-danger fs-4"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
