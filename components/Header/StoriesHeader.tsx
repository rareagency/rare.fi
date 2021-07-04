import React from "react";
import NavBar from "../Nav/NavBar";

const Header = () => {
  return (
    <header id="page-header" className="col-all layout-grid">
      <NavBar theme="light" />
      <div className="col-start-2 col-end-8"></div>
    </header>
  );
};

export default Header;
