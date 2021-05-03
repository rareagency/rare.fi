import React from "react";
import NavBar from "../../components/Nav/NavBar";

const Header = () => {
  return (
    <header className="col-all layout-grid bg-black">
      <div className="col-start-2 col-end-8">
        <NavBar />

        <div className="text-white pt-32 pb-64 text-8xl md:text-5xl">
          <div>Everyday</div>
          <div>contribution to</div>
          <div className="font-serif">envision a better</div>
          <div className="font-serif">digital world of tomorrow</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
