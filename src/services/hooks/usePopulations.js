import { getPopulations } from "@/services/api/getPopulations";
import { POPULATIONS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const usePopulations = ({ enabled }) => {
  return useQuery({
    queryKey: [POPULATIONS],
    queryFn: getPopulations,
    enabled,
  });
};
