import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import { links } from "../../utils/pagelinks";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-16 text-white">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex space-x-8 text-xl inline-flex lg:hidden">
        {links.map((link) => {
          return <NavItem url={link.url} text={link.text} key={link.text} />;
        })}
      </div>

      <div className="hidden lg:inline-flex">
        {/*TODO*/}
        MOBILE
      </div>
    </nav>
  );
};

export default NavBar;
