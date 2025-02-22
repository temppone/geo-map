import "leaflet/dist/leaflet.css";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
