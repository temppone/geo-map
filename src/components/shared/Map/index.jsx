import { PopulationEvolutionChart } from "@/components/shared/PopulationEvolutionChart";
import { Box, Center, Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { GeoJSON, MapContainer, Popup, TileLayer } from "react-leaflet";

const Map = ({
  isLoading,
  neighborhoodsData,
  onEachNeighborhood,
  highlightedNeighborhood,
  popupCenter,
  setHighlightedNeighborhood,
  setPopupCenter,
  populationByNeighborhood,
}) => {
  const mapBounds = [
    [-23.234708, -45.928813],
    [-23.198917, -45.900761],
  ];

  const tileLayerUrl =
    "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr";

  const onMapCreate = (map) => {
    map.createPane("top-layer");
    map.getPane("top-layer").style.zIndex = 650;
  };

  const handlePopupClose = () => {
    setHighlightedNeighborhood(null);
    setPopupCenter(null);
  };

  const getPopulationData = () =>
    populationByNeighborhood.find((item) => item.id === highlightedNeighborhood)
      ?.population;

  if (isLoading) {
    return (
      <Center h="100%" bg="gray.500">
        <Spinner size="xl" color="green.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Box
      flex={{
        md: "1",
      }}
      overflow="hidden"
      height={{ base: "60vh", md: "100%" }}
      position={{ base: "fixed", md: "relative" }}
      bottom={{ base: 0, md: "auto" }}
      left={0}
      right={0}
      marginTop={{ base: 0, md: "auto" }}
    >
      <MapContainer
        style={{ height: "100%" }}
        bounds={mapBounds}
        zoom={15}
        whenCreated={onMapCreate}
      >
        <TileLayer
          url={tileLayerUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={neighborhoodsData}
          onEachFeature={onEachNeighborhood}
          style={{ color: "#435e55" }}
        />

        {highlightedNeighborhood && popupCenter && (
          <Popup position={popupCenter} onClose={handlePopupClose}>
            <PopulationEvolutionChart data={getPopulationData()} />
          </Popup>
        )}
      </MapContainer>
    </Box>
  );
};

Map.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  neighborhoodsData: PropTypes.array.isRequired,
  onEachNeighborhood: PropTypes.func.isRequired,
  highlightedNeighborhood: PropTypes.number,
  popupCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  setHighlightedNeighborhood: PropTypes.func.isRequired,
  setPopupCenter: PropTypes.func.isRequired,
  populationByNeighborhood: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      population: PropTypes.arrayOf(
        PropTypes.shape({
          year: PropTypes.number,
          value: PropTypes.number,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Map;
