import { Box, Center, Spinner, useBreakpointValue } from "@chakra-ui/react";
import PropTypes from "prop-types";
import NeighborhoodCard from "../NeighborhoodCard";

const SideBar = ({
  isLoading,
  populationByNeighborhoodData,
  highlightedNeighborhood,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const sidebarWidth = useBreakpointValue({ base: "100%", md: "250px" });

  return isLoading ? (
    <Center h="100%" bg="gray.500">
      <Spinner size="xl" color="green.500" thickness="4px" />
    </Center>
  ) : (
    <Box
      bg="gray.100"
      color="white"
      width={sidebarWidth}
      height={{ base: "40vh", md: "100%" }}
      overflowY={{
        base: "auto",
      }}
      display="flex"
      flexDirection="column"
      padding="2"
      gap="2"
    >
      {populationByNeighborhoodData.length > 0 &&
        populationByNeighborhoodData.map((item) => (
          <NeighborhoodCard
            key={item.id}
            name={item?.name}
            population={item?.population || []}
            isHighlighted={highlightedNeighborhood === item.id}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={() => onMouseLeave(item.id)}
            onClick={() => onClick(item.id)}
          />
        ))}
    </Box>
  );
};

SideBar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  populationByNeighborhoodData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      setor: PropTypes.string,
      zona: PropTypes.string,

      population: PropTypes.arrayOf(
        PropTypes.shape({
          id_geometria: PropTypes.number,
          ano: PropTypes.string,
          populacao: PropTypes.number,
        })
      ),
    })
  ).isRequired,
  highlightedNeighborhood: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SideBar;
