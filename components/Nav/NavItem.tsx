import React from "react";
import Link from "next/link";

type NavProps = {
  url: string;
  text: string;
};

const NavItem = ({ url, text }: NavProps) => {
  return (
    <Link href={url}>
      <a className="text-white lg:px-4 py-1 uppercase font-default font-medium">
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
