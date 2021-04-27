import React from "react";
import NavBar from "../../components/Nav/NavBar";

const Header = () => {
  return (
    <header className="col-all layout-grid bg-black min-h-screen">
      <div className="col-start-2 col-end-8">
        <NavBar />

        <div className="mx-auto px-2 pt-4  pl-24 pr-24 lg:pl-4 lg:pr-4">
          <div className="text-white p-16 text-8xl pl-16 pt-32 lg:pl-4 sm:text-5xl">
            <div>Everyday</div>
            <div>contribution to</div>
            <div className="font-serif">envision a better</div>
            <div className="font-serif">digital world of tomorrow</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
