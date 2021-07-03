import React from "react";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <header
      id="page-header"
      className="col-all layout-grid bg-black min-h-screen"
    >
      <div className="col-start-2 col-end-8 relative">
        <NavBar theme="dark" />

        <h1 className="text-off-white mt-[30vh] mb-20 xl:p-8">
          Everyday
          <br />
          contribution to
          <br />
          envision{" "}
          <span className="font-header-mono lowercase font-light">
            a better
            <br />
            digital world of tomorrow
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
