import { Suspense } from "react";
import Routes from "../routes";

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes />
    </Suspense>
  );
}

export default App;
