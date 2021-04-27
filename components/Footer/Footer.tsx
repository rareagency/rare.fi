import React from "react";
import cntl from "cntl";
import Logo from "../Logo";
import FooterItem from "../Footer/FooterItem";
import { links } from "../../utils/pagelinks";

const container = cntl`
  layout-grid
  col-all
  bg-black
  text-white
  h-auto
  justify-items-center
  place-items-end
  pb-20
  pt-16
  md:text-center
`;

const Footer = () => {
  return (
    <footer className={container}>
      <address className="row-span-3 space-y-6">
        <Logo />

        <ol className="pt-16">
          <li className="font-bold pb-2">Tampere</li>
          <li>Polttimonkatu 4</li>
          <li>33210 Tampere</li>
          <li>Finland</li>
        </ol>
        <ul>
          <li>+358 50 470 0715</li>
          <li>riku@rare.fi</li>
        </ul>
      </address>
      <ol className="row-span-3 pt-8">
        <li>Rare Agency Oy</li>
        <li>3092335-9</li>
      </ol>
      <div className="row-span-3 md:hidden">
        {links.map((link) => (
          <FooterItem url={link.url} text={link.text} key={link.text} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
