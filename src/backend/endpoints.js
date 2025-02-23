import { HttpResponse, http } from "msw";
import populacao from "./populacao.json";
import bairros from "./bairros-geojson.json";

export const endpoints = [
  http.get("/bairros-geojson", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return HttpResponse.json(bairros);
  }),
  http.get("/populacao", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return HttpResponse.json(populacao);
  }),
];
