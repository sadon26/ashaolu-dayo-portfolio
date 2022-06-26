import { Suspense } from "react";
import Routes from "../routes";
import { ReactComponent as DayoLogo } from "assets/icons/dayo-logo.svg";

const initView = (
  <div className="flex h-screen items-center justify-center">
    <DayoLogo />
  </div>
);

function App() {
  return (
    <Suspense fallback={initView}>
      <Routes />
    </Suspense>
  );
}

export default App;
