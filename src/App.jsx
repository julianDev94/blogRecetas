import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/pages/Login";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import RutasAdmin from "./components/routes/RutasAdmin";
import RutasProtegidas from "./components/routes/RutasProtegidas";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>

        <Routes>
          <Route path="/" exac element={<Inicio></Inicio>} />
          <Route path="/login" exac element={<Login></Login>} />
          <Route
            path="/administrador/*"
            exac
            element={<RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
