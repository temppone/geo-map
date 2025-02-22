import { getNeighborhoods } from "@/api/getNeighborhoods";
import { NEIGHBORHOODS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useNeighborhoods = () => {
  return useQuery({ queryKey: [NEIGHBORHOODS], queryFn: getNeighborhoods });
};
