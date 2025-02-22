import axios from "axios";

export const getNeighborhoods = async () => {
  const { data } = await axios.get("/bairros-geojson");

  if (!data) {
    throw new Error("Failed to get neighbor hood");
  }

  return data;
};
