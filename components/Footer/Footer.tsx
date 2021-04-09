import React from "react";
import FooterItem from "../Footer/FooterItem";
import { links } from "../../utils/pagelinks";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-100 mx-auto h-144 text-white pl-24 pr-24 pt-16">
        <div className="p-16 pl-16 pb-28 h-full">
          <div className="flex flex-grow-1 justify-between gap-16 h-full">
            <div className="relative">
              <div className="text-6xl">
                <div>RARE</div>
              </div>
              <div className="absolute bottom-0 inset-x-0">
                <div className="font-bold pt-16">Tampere</div>
                <div className="pt-8">
                  <div>Polttimonkatu 4</div>
                  <div>33210 Tampere</div>
                  <div>Finland</div>
                </div>
                <div className="pt-8">
                  <div>+358 50 470 0715</div>
                  <div>riku@rare.fi</div>
                </div>
              </div>
            </div>
            <div className="text-xl flex flex-col-reverse">
              <div>3092335-9</div>
              <div>Rare agency OY</div>
            </div>
            <div className="flex flex-col-reverse">
              <div className="text-4xl pt-64">
                {links.map((link) => {
                  return <FooterItem url={link.url} text={link.text} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
