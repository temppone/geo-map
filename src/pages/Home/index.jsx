import { useNeighborhoods } from "@/hooks/useNeighborhoods";
import { usePopulations } from "@/hooks/usePopulations";
import { Box, Flex, Spinner, useBreakpointValue } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { Fragment, useEffect, useRef, useState } from "react";
import { GeoJSON, MapContainer, Popup, TileLayer } from "react-leaflet";
import NeighborhoodCard from "./NeighborhoodCard";
import { PopulationChart } from "./PopulationEvolutionChart";

const Home = () => {
  const [highlightedNeighborhood, setHighlightedNeighborhood] = useState(null);
  const [popupCenter, setPopupCenter] = useState(null);
  const [combinedData, setCombinedData] = useState([]);
  const layerRefs = useRef({});

  const { data: populationsData, isPending: isLoadingPopulations } =
    usePopulations();
  const { data: neighborhoodsData, isPending: isLoadingNeighborhoods } =
    useNeighborhoods();

  const handleClickNeighborhood = (layer, neighborhoodId) => {
    const center = layer.getBounds().getCenter();
    setHighlightedNeighborhood(neighborhoodId);
    layer.setStyle({ color: "#38A169" });

    setPopupCenter(center);
  };

  const handleMouseOverNeighborhood = (layer) => {
    layer.setStyle({ color: "#38A169" });
  };

  const handleMouseOutNeighborhood = (layer) => {
    layer.setStyle({ color: "#435e55" });
  };

  const onEachNeighborhood = (neighborhoodFeature, layer) => {
    const neighborhoodId = neighborhoodFeature.properties.id;
    layerRefs.current[neighborhoodId] = layer;

    layer.on({
      click: () => handleClickNeighborhood(layer, neighborhoodId),
      mouseover: () => handleMouseOverNeighborhood(layer),
      mouseout: () => handleMouseOutNeighborhood(layer),
    });
  };

  const sidebarWidth = useBreakpointValue({ base: "100%", md: "250px" });

  useEffect(() => {
    if (populationsData && neighborhoodsData) {
      const combined = neighborhoodsData.features.map((neighborhood) => {
        const population = populationsData.filter(
          (populationItem) =>
            populationItem.id_geometria === neighborhood.properties.id
        );
        return {
          ...neighborhood.properties,
          population,
        };
      });
      setCombinedData(combined);
    }
  }, [populationsData, neighborhoodsData]);
  const onMouseEnter = (id) => {
    const layer = layerRefs.current[id];
    if (layer) layer.setStyle({ color: "#38A169" });
  };

  const onMouseLeave = (id) => {
    const layer = layerRefs.current[id];
    if (layer) layer.setStyle({ color: "#435e55" });
  };

  const onClick = (id) => {
    const layer = layerRefs.current[id];
    if (layer) {
      const center = layer.getBounds().getCenter();
      setHighlightedNeighborhood(id);
      layer.setStyle({ color: "#38A169" });
      setPopupCenter(center);
    }
  };

  if (isLoadingPopulations || isLoadingNeighborhoods) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="gray.50"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Flex direction="row" height="100vh" width="100vw" overflow="hidden">
      <Box
        bg="gray.100"
        color="white"
        width={sidebarWidth}
        display="flex"
        flexDirection="column"
        padding="2"
        gap="2"
      >
        {combinedData.length > 0 &&
          combinedData.map((item) => (
            <NeighborhoodCard
              key={item.id_geometria}
              name={item?.name}
              population={item?.population || []}
              isHighlighted={highlightedNeighborhood === item.id}
              onMouseEnter={() => onMouseEnter(item.id)}
              onMouseLeave={() => onMouseLeave(item.id)}
              onClick={() => onClick(item.id)}
            />
          ))}
      </Box>

      <Box flex="1" overflow="hidden">
        <MapContainer
          style={{ height: "100vh" }}
          bounds={[
            [-23.234708, -45.928813],
            [-23.198917, -45.900761],
          ]}
          zoom={15}
          whenCreated={(map) => {
            map.createPane("top-layer");
            map.getPane("top-layer").style.zIndex = 650;
          }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {neighborhoodsData ? (
            <Fragment>
              <GeoJSON
                data={neighborhoodsData}
                onEachFeature={onEachNeighborhood}
                style={{ color: "#435e55" }}
              />

              {highlightedNeighborhood && popupCenter && (
                <Popup
                  position={popupCenter}
                  onClose={() => {
                    setHighlightedNeighborhood(null);
                    setPopupCenter(null);
                  }}
                >
                  <PopulationChart
                    data={
                      combinedData.find(
                        (item) => item.id === highlightedNeighborhood
                      )?.population
                    }
                  />
                </Popup>
              )}
            </Fragment>
          ) : (
            <div>loading</div>
          )}
        </MapContainer>
      </Box>
    </Flex>
  );
};

export default Home;
