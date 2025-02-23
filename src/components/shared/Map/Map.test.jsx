/* eslint-disable react/prop-types */
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "../../../tests/utils";
import Map from "./index";

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => (
    <div data-testid="map-container">{children}</div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  GeoJSON: ({ data }) => (
    <div data-testid="geojson-layer">{JSON.stringify(data)}</div>
  ),
  Popup: ({ children }) => <div data-testid="popup">{children}</div>,
  ZoomControl: () => <div data-testid="zoom-control" />,
}));

const mockProps = {
  isLoading: false,
  neighborhoodsData: [
    {
      type: "Feature",
      properties: { id: 1, name: "Test Neighborhood" },
      geometry: { type: "Polygon", coordinates: [] },
    },
  ],
  onEachNeighborhood: vi.fn(),
  highlightedNeighborhood: null,
  popupCenter: null,
  setHighlightedNeighborhood: vi.fn(),
  setPopupCenter: vi.fn(),
  populationByNeighborhood: [
    {
      id: 1,
      population: [
        { year: 2020, value: 1000 },
        { year: 2021, value: 1100 },
      ],
    },
  ],
};

describe("Map", () => {
  it("Should render map when not loading", () => {
    render(<Map {...mockProps} />);
    expect(screen.getByTestId("map-container")).toBeInTheDocument();
    expect(screen.getByTestId("tile-layer")).toBeInTheDocument();
  });

  it("Should render GeoJSON when neighborhoods data is provided", () => {
    render(<Map {...mockProps} />);
    expect(screen.getByTestId("geojson-layer")).toBeInTheDocument();
  });

  it("Should not render popup when no neighborhood is highlighted", () => {
    render(<Map {...mockProps} />);
    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });
});
