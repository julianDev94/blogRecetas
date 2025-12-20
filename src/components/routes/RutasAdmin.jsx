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
        element={<FormularioReceta></FormularioReceta>}
      />
      
      <Route
        path="/modificar"
        exac
        element={<FormularioReceta></FormularioReceta>}
      />
    </Routes>
  );
};

export default RutasAdmin;
