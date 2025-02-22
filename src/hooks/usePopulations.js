import { getPopulations } from "@/api/getPopulations";
import { POPULATIONS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const usePopulations = () => {
  return useQuery({ queryKey: [POPULATIONS], queryFn: getPopulations });
};
