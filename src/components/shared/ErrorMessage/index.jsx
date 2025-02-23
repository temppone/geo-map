import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ErrorMessage = ({ title, description }) => {
  const { t } = useTranslation(["common"]);

  return (
    <Box w="100%">
      <Alert status="error" borderRadius="md" variant="solid">
        <AlertIcon />
        <Box>
          <AlertTitle>{title || t("common:error")}</AlertTitle>
          <AlertDescription>
            {description || t("common:errorMessage")}
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ErrorMessage;
