import React from "react";
import NavBar from "../../components/Nav/NavBar";

const Header = () => {
  // Fonts are temp
  return (
    <header className="bg-black">
      <div className=" mx-auto px-2 pt-4 h-screen pl-24 pr-24 lg:pl-4 lg:pr-4">
        <NavBar />
        <div className="text-white p-16 text-8xl pl-16 pt-32 lg:pl-4 sm:text-6xl">
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
