import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import { links } from "../../utils/pagelinks";

const NavBar: React.FC<{ theme?: "dark" | "light" }> = ({
  theme = "light",
}) => {
  return (
    <nav className="flex items-center justify-between h-16 pt-16 pb-16 xl:pl-8 xl:pr-8">
      <Link href="/">
        <a>{theme === "dark" ? <Logo kind="light" /> : <Logo kind="dark" />}</a>
      </Link>

      <div className="space-x-16 text-xl inline-flex lg:hidden">
        {links.map((link) => (
          <NavItem
            theme={theme}
            url={link.url}
            text={link.text}
            key={link.text}
            hasBadge={link.hasBadge}
          />
        ))}
      </div>

      <div className="hidden lg:inline-flex">
        {/*TODO*/}
        MOBILE
      </div>
    </nav>
  );
};

export default NavBar;
