import { obtenerRecetas } from "../helpers/consultasAPI";
import { useState, useEffect } from "react";

export const useRecetas = () => {
  const [recetas, setRecetas] = useState([]);
  const obtenerArrayRecetas = async () => {
    try {
      const recetas = await obtenerRecetas();
      setRecetas(recetas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerArrayRecetas();
  }, [recetas]);   


  return {recetas};
};
