import React from "react";
import NavBar from "../../components/Nav/NavBar";

const Header = () => {
  return (
    <header className="col-all layout-grid bg-black">
      <div className="col-start-2 col-end-8">
        <NavBar />

        <div className="text-white pt-32 pb-64">
          <h1 className="header uppercase">Everyday</h1>
          <h1 className="header uppercase">contribution to envision</h1>
          <div className="font-TTAutonomousMonoRegular text-7xl tracking-wider">
            a better digital world of tomorrow
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
