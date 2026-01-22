import { Navigate } from "react-router";
const RutasProtegidas = ({ children }) => {
  const admin = JSON.parse(sessionStorage.getItem("usuarioAdmin"));

  if (!admin) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
