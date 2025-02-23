import {
  Box,
  Center,
  IconButton,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MenuIcon, X } from "lucide-react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import NeighborhoodCard from "../NeighborhoodCard";

const SideBar = ({
  isLoading,
  populationByNeighborhoodData,
  highlightedNeighborhood,
  onMouseEnter,
  onMouseLeave,
  onClick,
  setDrawerOpen: setIsOpen,
  isDrawerOpen: isOpen,
}) => {
  const { t } = useTranslation(["common"]);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <IconButton
        position="absolute"
        top="10px"
        left="10px"
        zIndex="overlay"
        colorScheme="green"
        aria-label="Toggle menu"
        size="sm"
        colorPalette="green"
        variant="solid"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </IconButton>

      <Box
        position="fixed"
        left={0}
        top={0}
        bg="white"
        boxShadow="lg"
        transform={
          isMobile
            ? isOpen
              ? "translateY(0)"
              : "translateY(-100%)"
            : isOpen
            ? "translateX(0)"
            : "translateX(-100%)"
        }
        transition={`transform 0.3s ease-in-out`}
        width={{ base: "100%", md: "250px" }}
        height={{ base: "40vh", md: "100vh" }}
        zIndex="overlay"
        overflow="hidden"
      >
        <Box
          p={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box fontWeight="bold">{t("common:neighborhoods")}</Box>
          <IconButton
            size="sm"
            colorPalette="green"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            <X />
          </IconButton>
        </Box>

        <Box
          overflowY="auto"
          height="calc(100% - 60px)"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
          }}
          p={4}
        >
          {isLoading ? (
            <Center height="100%">
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
                onClick={() => {
                  onClick(item.id);
                  if (isMobile) setIsOpen(false);
                }}
              />
            ))
          )}
        </Box>
      </Box>
    </>
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
  setDrawerOpen: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool,
};

export default SideBar;
