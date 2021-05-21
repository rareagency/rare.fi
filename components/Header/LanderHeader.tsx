import React from "react";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <header id="page-header" className="col-all layout-grid bg-black">
      <div className="col-start-2 col-end-8">
        <NavBar theme="dark" />

        <div className="text-white pt-32 pb-64">
          <h1>
            Everyday contribution to envision{" "}
            <span className="font-header-mono lowercase lander-header font-light">
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
