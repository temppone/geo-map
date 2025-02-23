import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "../../../tests/utils";
import NeighborhoodCard from "./index";

const mockProps = {
  name: "Test Neighborhood",
  population: [
    { ano: "2020", populacao: 1000 },
    { ano: "2021", populacao: 1100 },
  ],
  isHighlighted: false,
  onMouseEnter: vi.fn(),
  onMouseLeave: vi.fn(),
  onClick: vi.fn(),
};

describe("NeighborhoodCard", () => {
  it("Should render neighborhood name", () => {
    render(<NeighborhoodCard {...mockProps} />);
    expect(screen.getByText("Test Neighborhood")).toBeInTheDocument();
  });

  it("Should handle mouse enter event", () => {
    render(<NeighborhoodCard {...mockProps} />);
    const card = screen.getByText("Test Neighborhood").closest("div");
    fireEvent.mouseEnter(card);
    expect(mockProps.onMouseEnter).toHaveBeenCalled();
  });

  it("Should handle mouse leave event", () => {
    render(<NeighborhoodCard {...mockProps} />);
    const card = screen.getByText("Test Neighborhood").closest("div");
    fireEvent.mouseLeave(card);
    expect(mockProps.onMouseLeave).toHaveBeenCalled();
  });

  it("Should handle click event", () => {
    render(<NeighborhoodCard {...mockProps} />);
    const card = screen.getByText("Test Neighborhood").closest("div");
    fireEvent.click(card);
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
