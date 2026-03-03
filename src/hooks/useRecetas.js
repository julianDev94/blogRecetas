import { obtenerRecetas } from "../helpers/consultasAPI";
import { useState, useEffect } from "react";

export const useRecetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const obtenerArrayRecetas = async () => {
    try {

      const recetas = await obtenerRecetas();
      setRecetas(recetas);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerArrayRecetas();
  }, []);   


  return {recetas, obtenerArrayRecetas, loading};
};
