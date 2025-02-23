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
  isLoading: false,
  populationByNeighborhoodData: mockNeighborhoodData,
  highlightedNeighborhood: null,
  onMouseEnter: vi.fn(),
  onMouseLeave: vi.fn(),
  onClick: vi.fn(),
};

describe("SideBar", () => {
  it("Should render loading spinner when isLoading is true", () => {
    render(<SideBar {...mockProps} isLoading={true} />);
    expect(screen.getByTestId("chakra-spinner")).toBeInTheDocument();
  });

  it("Should render neighborhood cards when data is provided", () => {
    render(<SideBar {...mockProps} />);
    expect(screen.getByText("Test Neighborhood")).toBeInTheDocument();
    expect(screen.getByText("Test Neighborhood 2")).toBeInTheDocument();
  });

  it("Should handle mouse enter event", () => {
    render(<SideBar {...mockProps} />);
    const neighborhoodCard = screen.getByText("Test Neighborhood");
    fireEvent.mouseEnter(neighborhoodCard);
    expect(mockProps.onMouseEnter).toHaveBeenCalledWith(1);
  });

  it("Should handle mouse leave event", () => {
    render(<SideBar {...mockProps} />);
    const neighborhoodCard = screen.getByText("Test Neighborhood");
    fireEvent.mouseLeave(neighborhoodCard);
    expect(mockProps.onMouseLeave).toHaveBeenCalledWith(1);
  });

  it("Should handle click event", () => {
    render(<SideBar {...mockProps} />);
    const neighborhoodCard = screen.getByText("Test Neighborhood");
    fireEvent.click(neighborhoodCard);
    expect(mockProps.onClick).toHaveBeenCalledWith(1);
  });
});
