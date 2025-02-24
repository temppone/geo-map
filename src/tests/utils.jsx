/* eslint-disable react-refresh/only-export-components */
import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import PropTypes from "prop-types";

function AllProviders({ children }) {
  const queryClient = new QueryClient();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: AllProviders, ...options });

export { fireEvent, screen, waitFor } from "@testing-library/react";
export { customRender as render };
