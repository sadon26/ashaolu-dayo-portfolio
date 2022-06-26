import React from "react";
import { SideDrawer, MagicView } from "components";

const Home = () => {
  return (
    <div className="flex h-screen">
      <SideDrawer />
      <MagicView />
    </div>
  );
};

export default Home;
