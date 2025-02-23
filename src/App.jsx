import { Center, Spinner } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <Center h="100vh">
          <Spinner size="xl" color="green.500" thickness="4px" />
        </Center>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
