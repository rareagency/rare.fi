import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div className="relative flex items-center justify-between h-16 text-white ">
      <div className="text-3xl pl-16">
        <Link href="/">RARE</Link>
      </div>
      <div className="flex space-x-8 text-xl hidden lg:inline-flex">
        <NavItem url="/about" text="Why us?" />
        <NavItem url="/about" text="Career" />
        <NavItem url="/about" text="Stories" />
        <NavItem url="/about" text="Training" />
        <NavItem url="/about" text="Let's chat" />
      </div>
      <div className="inline-flex lg:hidden">
        {/*TODO*/}
        MOBILE
      </div>
    </div>
  );
};

export default NavBar;
