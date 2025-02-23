/* eslint-disable react/prop-types */
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../../tests/utils";
import { PopulationEvolutionChart } from "./index";

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
  LineChart: ({ children }) => <div data-testid="line-chart">{children}</div>,
  Line: () => <div data-testid="line" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: () => <div data-testid="tooltip" />,
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  Legend: () => <div data-testid="legend">Population Evolution</div>,
}));

const mockData = [
  { year: 2020, value: 1000 },
  { year: 2021, value: 1100 },
  { year: 2022, value: 1200 },
];

describe("PopulationEvolutionChart", () => {
  it("Should render chart with all components", () => {
    render(<PopulationEvolutionChart data={mockData} />);

    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
    expect(screen.getByTestId("line")).toBeInTheDocument();
    expect(screen.getByTestId("x-axis")).toBeInTheDocument();
    expect(screen.getByTestId("y-axis")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
    expect(screen.getByTestId("cartesian-grid")).toBeInTheDocument();
  });

  it("Should render chart with correct title", () => {
    render(<PopulationEvolutionChart data={mockData} />);
    expect(screen.getByText("Population Evolution")).toBeInTheDocument();
  });

  it("Should render chart even with empty data", () => {
    render(<PopulationEvolutionChart data={[]} />);
    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();
  });
});
