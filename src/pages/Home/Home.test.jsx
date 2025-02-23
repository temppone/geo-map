/* eslint-disable react/prop-types */
import "@testing-library/jest-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "../../tests/utils";
import Home from "./index";

vi.mock("@/services/hooks/useNeighborhoods", () => ({
  useNeighborhoods: () => ({
    data: {
      features: [
        {
          properties: { id: 1, name: "Test Neighborhood 1" },
          geometry: { type: "Polygon", coordinates: [] },
        },
        {
          properties: { id: 2, name: "Test Neighborhood 2" },
          geometry: { type: "Polygon", coordinates: [] },
        },
      ],
    },
    isPending: false,
    error: null,
  }),
}));

vi.mock("@/services/hooks/usePopulations", () => ({
  usePopulations: () => ({
    data: [
      { id_geometria: 1, ano: "2020", populacao: 1000 },
      { id_geometria: 1, ano: "2021", populacao: 1100 },
      { id_geometria: 2, ano: "2020", populacao: 2000 },
      { id_geometria: 2, ano: "2021", populacao: 2100 },
    ],
    isPending: false,
    error: null,
  }),
}));

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => (
    <div data-testid="map-container">{children}</div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  GeoJSON: ({ onEachFeature, data }) => (
    <div data-testid="geojson-layer">
      {data.features.map((feature) => (
        <div
          key={feature.properties.id}
          data-testid={`neighborhood-${feature.properties.id}`}
          onClick={() => {
            const mockLayer = {
              getBounds: () => ({
                getCenter: () => ({ lat: 0, lng: 0 }),
              }),
              setStyle: vi.fn(),
            };
            onEachFeature(feature, mockLayer);
          }}
        />
      ))}
    </div>
  ),
  Popup: ({ children }) => <div data-testid="map-popup">{children}</div>,
}));

describe("Home Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it("Should render both sidebar and map", () => {
    render(<Home />);
    expect(screen.getByTestId("map-container")).toBeInTheDocument();
    expect(screen.getByText("Test Neighborhood 1")).toBeInTheDocument();
    expect(screen.getByText("Test Neighborhood 2")).toBeInTheDocument();
  });

  it("Should show popup when neighborhood is clicked in sidebar", async () => {
    render(<Home />);
    const neighborhoodCard = screen.getByText("Test Neighborhood 1");
    fireEvent.click(neighborhoodCard);

    await waitFor(() => {
      expect(screen.getByTestId("map-popup")).toBeInTheDocument();
    });
  });

  it("Should highlight neighborhood when hovering over sidebar card", async () => {
    render(<Home />);
    const neighborhoodCard = screen.getByText("Test Neighborhood 1");

    fireEvent.mouseEnter(neighborhoodCard);
    it("Should show error message when API fails", () => {
      vi.mock("@/services/hooks/useNeighborhoods", () => ({
        useNeighborhoods: () => ({
          data: null,
          isPending: false,
          error: new Error("Failed to load neighborhoods"),
        }),
      }));

      render(<Home />);
      expect(
        screen.getByText("Failed to load neighborhoods")
      ).toBeInTheDocument();
    });

    render(<Home />);
    expect(
      screen.getByText("Failed to load neighborhoods")
    ).toBeInTheDocument();
  });

  it("Should combine population data with neighborhood data", async () => {
    render(<Home />);
    const neighborhoodCard = screen.getByText("Test Neighborhood 1");
    fireEvent.click(neighborhoodCard);

    await waitFor(() => {
      expect(screen.getByTestId("map-popup")).toBeInTheDocument();
    });
  });

  it("Should clear highlight when popup is closed", async () => {
    render(<Home />);
    const neighborhoodCard = screen.getByText("Test Neighborhood 1");

    fireEvent.click(neighborhoodCard);
    await waitFor(() => {
      expect(screen.getByTestId("map-popup")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("map-popup"));
    expect(screen.queryByTestId("map-popup")).not.toBeInTheDocument();
  });
});
