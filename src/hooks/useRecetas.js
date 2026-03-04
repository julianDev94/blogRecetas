import { obtenerRecetas } from "../helpers/consultasAPI";
import { useQuery } from "@tanstack/react-query";

export const useRecetas = () => {
  const { isPending, isError, data: recetas = [] } = useQuery({
    queryKey: ["recetas"],
    queryFn: obtenerRecetas,
    staleTime: 1000 * 60 * 5,
  });

  return { isPending, recetas , isError };
};
