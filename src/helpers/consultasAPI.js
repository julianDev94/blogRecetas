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

export const obtenerRecetas = async () => {
  try {
    const respuesta = await fetch(apiRecetas);
    if (respuesta.status === 200) {
      const datosRecetas = await respuesta.json();
      return datosRecetas;
    }
  } catch (error) {
    console.log(error);
  }
};

export const modificarReceta = async (id, productoAModificar) => {
  try {
    const respuesta = await fetch(apiRecetas + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoAModificar),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const leerUnProducto = async (id) => {
  try {
    const respuesta = await fetch(apiRecetas + `/${id}`);
    if (respuesta.status === 200) {
      const productoEncontrado = await respuesta.json();
      return productoEncontrado;
    }
  } catch (error) {
    console.log(error);
  }
};

export const eliminarUnProducto = async (id) => {
  try {
    const respuesta = await fetch(apiRecetas + `/${id}`, {
      method: "DELETE",
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
      JSON.stringify(usuarioLogin.usuario),
    );
    return true;
  } else {
    return false;
  }
};
