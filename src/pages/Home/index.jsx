import { useNeighborhoods } from "@/services/hooks/useNeighborhoods";
import { usePopulations } from "@/services/hooks/usePopulations";
import { Flex } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import Map from "../../components/shared/Map";
import SideBar from "../../components/shared/SideBar";

const Home = () => {
  const [highlightedNeighborhood, setHighlightedNeighborhood] = useState(null);
  const [popupCenter, setPopupCenter] = useState(null);
  const [populationByNeighborhood, setPopulationByNeighborhood] = useState([]);
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
      click: () => {
        handleClickNeighborhood(layer, neighborhoodId);
      },
      mouseover: () => handleMouseOverNeighborhood(layer),
      mouseout: () => handleMouseOutNeighborhood(layer),
    });
  };

  useEffect(() => {
    if (!popupCenter) {
      setHighlightedNeighborhood(null);
    }
  }, [popupCenter]);

  console.log(popupCenter, "popupCenter");

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
      setPopulationByNeighborhood(combined);
    }
  }, [populationsData, neighborhoodsData]);

  const handleCardMouseEnter = (id) => {
    const layer = layerRefs.current[id];

    if (layer) {
      layer.setStyle({ color: "#38A169" });
    }
  };

  const handleCardMouseLeave = (id) => {
    const layer = layerRefs.current[id];

    if (layer) {
      layer.setStyle({ color: "#435e55" });
    }
  };

  const handleCardClick = (id) => {
    const layer = layerRefs.current[id];

    if (layer) {
      const center = layer.getBounds().getCenter();
      setHighlightedNeighborhood(id);
      layer.setStyle({ color: "#38A169" });
      setPopupCenter(center);
    }
  };

  const isLoading = [isLoadingPopulations, isLoadingNeighborhoods].some(
    (loading) => loading
  );

  return (
    <Flex direction="row" height="100vh" width="100vw" overflow="hidden">
      <SideBar
        highlightedNeighborhood={highlightedNeighborhood}
        isLoading={isLoading}
        onClick={handleCardClick}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
        populationByNeighborhoodData={populationByNeighborhood}
      />

      <Map
        isLoading={isLoading}
        neighborhoodsData={neighborhoodsData?.features || []}
        onEachNeighborhood={onEachNeighborhood}
        highlightedNeighborhood={highlightedNeighborhood}
        popupCenter={popupCenter}
        setHighlightedNeighborhood={setHighlightedNeighborhood}
        setPopupCenter={setPopupCenter}
        populationByNeighborhood={populationByNeighborhood}
      />
    </Flex>
  );
};

export default Home;
