import { Alert, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ErrorMessage = ({ title, description }) => {
  const { t } = useTranslation(["common"]);

  return (
    <Box w="100%" justifyContent="center" alignItems="center">
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>{title || t("common:error")}</Alert.Title>
          <Alert.Description>
            {description || t("common:errorMessage")}{" "}
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </Box>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ErrorMessage;
