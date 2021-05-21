import React from "react";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <header id="page-header" className="col-all layout-grid bg-black">
      <div className="col-start-2 col-end-8">
        <NavBar theme="dark" />

        <div className="pt-32 pb-64">
          <h1 className="text-off-white">
            Everyday contribution to envision{" "}
            <span className="font-header-mono lowercase font-light">
              a better
              <br />
              digital world of tomorrow
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
