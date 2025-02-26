import { useMutation } from "@tanstack/react-query";
import { getNaturalLanguageData } from "../api/getNaturalLanguageData";

export const useNaturalLanguageData = () => {
  return useMutation({
    mutationFn: async ({ populationEvolutionData, question }) => {
      return await getNaturalLanguageData(populationEvolutionData, question);
    },

    onMutate: () => {},
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onSettled: () => {},
  });
};
