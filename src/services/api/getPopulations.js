import axios from "axios";

export const getPopulations = async () => {
  const { data } = await axios.get("/populacao");

  if (!data) {
    throw new Error("Failed to get population");
  }

  return data;
};
