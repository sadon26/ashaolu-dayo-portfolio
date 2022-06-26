import React from "react";
import "./_side-drawer.scss";
import { ReactComponent as DayoLogo } from "assets/icons/dayo-logo.svg";
import PropTypes from "prop-types";

const SideDrawer = ({ showMenu, setshowMenu }) => {
  return (
    <div className="relative w-20">
      <nav className="h-screen flex justify-center items-center side__drawer relative">
        <div
          onClick={() => setshowMenu(!showMenu)}
          className="w-12 h-12 cursor-pointer"
        >
          <DayoLogo />
        </div>
      </nav>
      <div
        className={`absolute side__drawer-menu p-12${
          showMenu ? " active" : ""
        }`}
      ></div>
    </div>
  );
};

SideDrawer.propTypes = {
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func,
};

export default SideDrawer;
