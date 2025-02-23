import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../../tests/utils";
import SideBar from "./index";

const mockNeighborhoodData = [
  {
    id: 1,
    name: "Test Neighborhood",
    setor: "Test Sector",
    zona: "Test Zone",
    population: [
      { id_geometria: 1, ano: "2020", populacao: 1000 },
      { id_geometria: 1, ano: "2021", populacao: 1100 },
    ],
  },
  {
    id: 2,
    name: "Test Neighborhood 2",
    setor: "Test Sector 2",
    zona: "Test Zone 2",
    population: [
      { id_geometria: 2, ano: "2020", populacao: 2000 },
      { id_geometria: 2, ano: "2021", populacao: 2100 },
    ],
  },
];

const mockProps = {
  isDrawerOpen: false,
  setDrawerOpen: vi.fn(),
  isLoading: false,
  populationByNeighborhoodData: mockNeighborhoodData,
  highlightedNeighborhood: null,
  onMouseEnter: vi.fn(),
  onMouseLeave: vi.fn(),
  onClick: vi.fn(),
};

describe("SideBar", () => {
  it("Should render toggle button", () => {
    render(<SideBar {...mockProps} />);
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });

  it("Should toggle sidebar visibility", () => {
    render(<SideBar {...mockProps} />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    fireEvent.click(toggleButton);
    expect(mockProps.setDrawerOpen).toHaveBeenCalledWith(true);
  });

  it("Should show content when open", () => {
    render(<SideBar {...mockProps} isDrawerOpen={true} />);
    expect(screen.getByText("Test Neighborhood")).toBeInTheDocument();
  });

  it("Should show loading spinner when loading", () => {
    render(<SideBar {...mockProps} isDrawerOpen={true} isLoading={true} />);
    expect(screen.getByTestId("chakra-spinner")).toBeInTheDocument();
  });

  it("Should handle neighborhood interactions", () => {
    render(<SideBar {...mockProps} isDrawerOpen={true} />);
    const card = screen.getByText("Test Neighborhood");

    fireEvent.mouseEnter(card);
    expect(mockProps.onMouseEnter).toHaveBeenCalledWith(1);

    fireEvent.mouseLeave(card);
    expect(mockProps.onMouseLeave).toHaveBeenCalledWith(1);

    fireEvent.click(card);
    expect(mockProps.onClick).toHaveBeenCalledWith(1);
  });
});
