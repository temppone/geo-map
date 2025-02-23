import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const NeighborhoodCard = ({
  name,
  population,
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <Box
      cursor="pointer"
      _hover={{
        borderColor: "green.500",
      }}
      borderColor={isHighlighted ? "green.500" : "gray.300"}
      backgroundColor={isHighlighted ? "gray.50" : "gray.100"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      p="4"
      borderWidth="1px"
      borderRadius="md"
      mb="2"
      transition="background-color 0.2s, border-color 0.2s"
    >
      <Text fontSize="xl" mb="2" color="black" fontWeight="bold">
        {name}
      </Text>

      {population.map((entry, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="space-between"
          color="black"
        >
          <Text fontWeight="bold">{entry.ano}</Text>
          <Text>{entry.populacao.toLocaleString()}</Text>
        </Box>
      ))}
    </Box>
  );
};

NeighborhoodCard.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.arrayOf(
    PropTypes.shape({
      ano: PropTypes.string.isRequired,
      populacao: PropTypes.number.isRequired,
    })
  ).isRequired,
  isHighlighted: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
};

export default NeighborhoodCard;
