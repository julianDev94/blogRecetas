const apiRecetas = import.meta.env.VITE_API_RECETAS;

const admin = {
  usuario: "admin",
  contrasenia: "1234Admin",
};

export const login = (usuarioLogin) => {
  if (
    usuarioLogin.usuario === admin.usuario &&
    usuarioLogin.contrasenia === admin.contrasenia
  ) {
    sessionStorage.setItem(
      "usuarioAdmin",
      JSON.stringify(usuarioLogin.usuario)
    );
    return true;
  } else {
    return false;
  }
};
