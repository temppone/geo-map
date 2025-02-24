import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider.jsx";
import "./i18n/config";

export const initAPIMock = async () => {
  const { worker } = await import("./backend/worker.js");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
};

const initApplication = async () => {
  await initAPIMock();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: Infinity,
      },
    },
  });

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
};

initApplication();
