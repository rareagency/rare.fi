import React from "react";
import cntl from "cntl";
import Logo from "../Logo";
import FooterItem from "../Footer/FooterItem";
import { links } from "../../utils/pagelinks";

const container = cntl`
  bg-black
  text-white
  mx-auto
  h-auto
  grid
  grid-rows-3
  grid-cols-3
  justify-items-center
  place-items-end
  pb-20
  pt-16
  md:text-center

  md:grid-cols-1
`;

const Footer = () => {
  return (
    <footer className={container}>
      <address className="row-span-3 space-y-6">
        <Logo />
        <div className="pt-16">
          <div className="font-bold pb-2">Tampere</div>
          <div>Polttimonkatu 4</div>
          <div>33210 Tampere</div>
          <div>Finland</div>
        </div>
        <div className="">
          <div>+358 50 470 0715</div>
          <div>riku@rare.fi</div>
        </div>
      </address>
      <div className="row-span-3 pt-8">
        <div>Rare Agency Oy</div>
        <div>3092335-9</div>
      </div>
      <div className="row-span-3 md:hidden">
        <div className="text-4xl">
          {links.map((link) => {
            return (
              <FooterItem url={link.url} text={link.text} key={link.text} />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
