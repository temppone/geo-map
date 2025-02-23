import { Box, Center, Spinner } from "@chakra-ui/react";
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
  return (
    <Box
      bg="gray.100"
      width={{ base: "100%", md: "250px" }}
      color="white"
      height={{ base: "40vh", md: "100%" }}
      overflowY={{
        base: "auto",
      }}
      display="flex"
      flexDirection="column"
      padding="2"
      gap="2"
    >
      {isLoading ? (
        <Center
          height={{ base: "40vh", md: "100%" }}
          width={{ base: "100%", md: "230px" }}
        >
          <Spinner
            size="xl"
            color="green.500"
            thickness="4px"
            data-testid="chakra-spinner"
          />
        </Center>
      ) : (
        populationByNeighborhoodData?.length > 0 &&
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
        ))
      )}
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
