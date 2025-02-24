/* eslint-disable react/prop-types */
import { render, screen, waitFor } from "@/tests/utils";
import { beforeAll, describe, expect, it, vi } from "vitest";
import Home from ".";
import * as populationsHook from "@/services/hooks/usePopulations";
import * as neighborhoodsHook from "@/services/hooks/useNeighborhoods";
import fakePopulationsNeighborHoodsData from "./__mocks__/fakePopulationsNeighborHoodsData.mock";
import fakeNeighborhoodsData from "./__mocks__/fakeNeighborhoodsData.mock";

vi.mock("@/services/hooks/usePopulations", () => ({
  usePopulations: vi.fn(),
}));

vi.mock("@/services/hooks/useNeighborhoods", () => ({
  useNeighborhoods: vi.fn(),
}));

vi.mock("@/components/Map", () => ({
  __esModule: true,
  default: (props) => <div data-testid="map">{props.children}</div>,
}));

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

describe("Home page", () => {
  beforeAll(() => {
    vi.resetAllMocks();
  });

  it("Should render component with api data mocked", async () => {
    populationsHook.usePopulations.mockReturnValue({
      data: fakePopulationsNeighborHoodsData,
      isPending: false,
      error: null,
    });

    neighborhoodsHook.useNeighborhoods.mockReturnValue({
      data: fakeNeighborhoodsData,
      isPending: false,
      error: null,
    });

    render(<Home />);

    await waitFor(() => {
      const elements = screen.getAllByText(/Jd. Colinas/);

      expect(elements[0]).toBeInTheDocument();

      expect(screen.getByTestId("map-container")).toBeInTheDocument();
    });
  });

  it("Should render the error message API", async () => {
    populationsHook.usePopulations.mockReturnValue({
      data: null,
      isPending: false,
      error: { message: "Error to search population" },
    });

    neighborhoodsHook.useNeighborhoods.mockReturnValue({
      data: { features: [] },
      isPending: false,
      error: null,
    });

    render(<Home />);

    expect(screen.getByText(/Error to search population/));
  });
});
