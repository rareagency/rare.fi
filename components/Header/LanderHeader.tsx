import React from "react";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <header
      id="page-header"
      className="col-all layout-grid bg-black min-h-screen md:min-h-0"
    >
      <NavBar theme="dark" />
      <div className="col-start-2 col-end-8 relative flex flex-col">
        <h1 className="text-off-white mt-[34vh] mb-20 xl:p-8 md:mt-[20vh] md:mb-0 break-words">
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
