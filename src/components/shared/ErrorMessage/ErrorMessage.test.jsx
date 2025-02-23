import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import ErrorMessage from ".";
import { render, screen } from "../../../tests/utils";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        "common:error": "Error",
        "common:errorMessage": "An error has occurred",
      };
      return translations[key];
    },
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        "common:error": "Error",
        "common:errorMessage": "An error has occurred",
      };
      return translations[key];
    },
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

describe("ErrorMessage", () => {
  it("Should render with default props", () => {
    render(<ErrorMessage />);
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("An error has occurred")).toBeInTheDocument();
  });

  it("Should render with custom title", () => {
    render(<ErrorMessage title="Custom Error" />);
    expect(screen.getByText("Custom Error")).toBeInTheDocument();
  });
});
