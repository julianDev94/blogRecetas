const apiRecetas = import.meta.env.VITE_API_RECETAS;

export const altaReceta = async (receta) => {
  try {
    const respuesta = await fetch(apiRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

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
