import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import { links } from "../../utils/pagelinks";

const NavBar = () => {
  return (
    <div className="relative flex items-center justify-between h-16 text-white ">
      <div className="text-3xl pl-16 lg:pl-4">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex space-x-8 text-xl inline-flex xl:hidden">
        {links.map((link) => {
          return <NavItem url={link.url} text={link.text} key={link.text} />;
        })}
      </div>
      <div className="hidden xl:inline-flex">
        {/*TODO*/}
        MOBILE
      </div>
    </div>
  );
};

export default NavBar;
