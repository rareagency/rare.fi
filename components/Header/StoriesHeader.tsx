import React from "react";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <header id="page-header" className="col-all layout-grid">
      <div className="col-start-2 col-end-8">
        <NavBar theme="light" />
      </div>
    </header>
  );
};

export default Header;
