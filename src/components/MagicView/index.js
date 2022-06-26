import React from "react";
import PropTypes from "prop-types";
import "./_magic-view.scss";
import ComputerOnTable from "assets/images/computer-on-table.png";

const MagicView = ({ showMenu }) => {
  return (
    <div
      className={`flex justify-between flex-grow shrink-0 magic__view ${
        showMenu ? "active" : ""
      }`}
    >
      <div className="flex flex-col justify-center pl-32 basis-4/6">
        <h1 className="fs-18 mb-12">Hi, I'm Ashaolu Dayo</h1>
        <p className="fw-600 fs-63 lh-85">
          Graphics Designer & <br /> Front End Developer
        </p>
      </div>
      <div className="basis-2/6 shrink-0">
        <div style={{ width: "520px", height: "100%" }}>
          <img
            src={ComputerOnTable}
            className="w-full h-full"
            alt="computer-on-table"
          />
        </div>
      </div>
    </div>
  );
};

MagicView.propTypes = {
  showMenu: PropTypes.bool,
};

export default MagicView;
