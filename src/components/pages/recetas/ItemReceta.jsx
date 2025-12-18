
const ItemReceta = () => {
  return (
    <tr>
      <td>
        <div className="d-flex">
            <img src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg" alt="" className="img-fila rounded" />
            <div className="ms-3"><p>Nombre receta</p>
            <p className="text-body-secondary">Descripcion breve</p></div>
        </div>
      </td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <div className="d-flex">
          <a href="">
            <i className="bi bi-pencil-square text-primary fs-4 me-3"></i>
          </a>
          <a href="">
            <i className="bi bi-trash3 text-danger fs-4"></i>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
