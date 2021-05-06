import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import { links } from "../../utils/pagelinks";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-16 text-white pt-8">
      <Link href="/">
        <Logo className="h-8 w-auto" />
      </Link>

      <div className="space-x-12 text-xl inline-flex lg:hidden">
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
