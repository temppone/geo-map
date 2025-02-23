import { Provider } from "@/components/ui/provider";
import { render } from "@testing-library/react";
import PropTypes from "prop-types";

function AllProviders({ children }) {
  return <Provider>{children}</Provider>;
}

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: AllProviders, ...options });

export { fireEvent, screen, waitFor } from "@testing-library/react";
export { customRender as render };
