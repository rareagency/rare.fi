import React from "react";
import Link from "next/link";

type NavProps = {
  url: string;
  text: string;
};

const NavItem = ({ url, text }: NavProps) => {
  return (
    <div className="text-white lg:px-4 py-1 uppercase">
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default NavItem;
