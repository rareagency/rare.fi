import React from "react";
import NavBar from "../../components/Nav/NavBar";

const Header = () => {
  return (
    <header className="col-all layout-grid bg-black">
      <div className="col-start-2 col-end-8">
        <NavBar />

        <div className="text-white pt-32 pb-64">
          <h1>Everyday</h1>
          <h1>contribution to envision</h1>
          <h2>a better digital world of tomorrow</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
