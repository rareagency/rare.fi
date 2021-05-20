import React from "react";
import cntl from "cntl";
import { links } from "../../utils/pagelinks";
import FooterItem from "./FooterItem";
import TickerText from "./TickerText";

const container = cntl`
  layout-grid
  col-all
  bg-black
  text-white
  h-auto
  pb-12
  pt-48
  md:pl-8
`;

const Footer = () => {
  return (
    <footer id="page-footer" className={container}>
      <section className="col-start-2 col-span-5 md:col-start-1">
        <h4 className="pb-2">Software made</h4>
        <TickerText />
      </section>

      <ol className="col-start-7 row-start-1 md:row-start-2 md:col-start-1 md:col-span-3">
        {links.map((link, index) => (
          <li className="p-2 text-right md:text-left" key={index}>
            <FooterItem url={link.url} text={link.text} key={index} />
          </li>
        ))}
      </ol>

      <h6 className="space-y-6 col-start-2 row-start-2 col-span-3 pb-24 pt-24 md:row-start-3 md:col-start-1 md:col-span-4">
        <ol className="pt-16">
          <li className="pb-6">
            <h5>Tampere</h5>
          </li>
          <li>Polttimonkatu 4</li>
          <li>33210 Tampere</li>
          <li>Finland</li>
        </ol>
        <ul>
          <li>+358 50 470 0715</li>
          <li>riku@rare.fi</li>
        </ul>
        <ul>
          <li>Rare Agency Oy</li>
          <li>3092335-9</li>
        </ul>
      </h6>
      <div className="layout-grid row-start-3 col-all uppercase text-sm md:text-left md:row-start-4">
        <div className="col-start-2 col-span-2 md:row-start-1 md:col-start-1 md:col-span-4">
          © Rare Agency
        </div>
        <div className="col-span-2 text-center md:row-start-2 md:col-span-4 md:text-left">
          <img
            className="inline-block align-text-top"
            src="/static/finnish_flag.svg"
            width="20"
            height="13"
          />{" "}
          Made in Finland
        </div>
        <div className="col-span-2 text-right  md:row-start-3 md:col-span-4 md:text-left">
          <a href="#" className="button-underline">
            Cookie & Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
