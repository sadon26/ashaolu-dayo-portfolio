import React, { useState } from "react";
import { SideDrawer, MagicView } from "components";

const Home = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="flex h-screen overflow-x-hidden">
      <SideDrawer showMenu={showMenu} setshowMenu={setshowMenu} />
      <MagicView showMenu={showMenu} />
    </div>
  );
};

export default Home;
