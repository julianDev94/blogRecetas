import { Routes, Route } from "react-router";
import FormularioReceta from "../pages/recetas/FormularioReceta";
import PanelAdministrador from "../pages/PanelAdministrador";
const RutasAdmin = () => {
  return (
    <Routes>
      <Route
        path="/"
        exac
        element={<PanelAdministrador></PanelAdministrador>}
      />
      <Route
        path="/crear"
        exac
        element={<FormularioReceta editar={false} titulo={"Crear receta"}></FormularioReceta>}
      />
      
      <Route
        path="/modificar/:id"
        exac
        element={<FormularioReceta editar={true} titulo={"Modificar receta"}></FormularioReceta>}
      />
    </Routes>
  );
};

export default RutasAdmin;
