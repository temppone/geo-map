import * as matchers from "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

expect.extend(matchers);

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  resources: {
    en: {
      common: {
        error: "Error",
        errorMessage: "Somethin wrong",
        neighborhoods: "Neighborhoods",
      },

      populationEvolutionChart: {
        years: "Anos",
        population: "População",
        populationEvolution: "Evolução populacional",
        showLineChart: "Mostrar gráfico de linha",
        showBarChart: "Mostrar gráfico de barras",
      },
    },
  },
});

afterEach(() => {
  cleanup();
});

if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
