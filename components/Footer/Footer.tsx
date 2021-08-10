import React from "react";
import { links } from "../../utils/pagelinks";
import NavItem from "../Nav/NavItem";
import TickerText from "./TickerText";
import { c } from "../../utils/classnames";

const container = c(`
  layout-grid
  col-all
  bg-black
  text-white
  h-auto
  pb-12
  pt-48
  xl:p-8
  xl:pt-16
  bg-footer-map
  bg-cover
  bg-center
`);

const Footer = () => {
  return (
    <footer id="page-footer" className={container}>
      <section className="col-start-2 col-span-4 md:col-start-1 md:col-span-full">
        <h4 className="text-off-white">Software made</h4>
        <TickerText />
      </section>

      <ol className="col-start-6 col-span-2 row-start-1 justify-self-end md:justify-self-start md:row-start-2 md:col-start-1 md:col-span-full md:pt-8">
        {links.map((link, index) => (
          <li
            className="py-2 text-right lg:-mx-4 md:text-left w-48"
            key={index}
          >
            <NavItem
              url={link.url}
              text={link.text}
              key={index}
              scroll={link.scroll}
            />
          </li>
        ))}
      </ol>

      <div className="h6 text-off-white space-y-6 col-start-2 row-start-2 col-span-3 pb-24 pt-24 md:row-start-3 md:col-start-1 md:col-span-6">
        <ol className="pt-16">
          <li className="pb-6">
            <h5 className="text-off-white">Tampere</h5>
          </li>
          <li>Kyttälänkatu 1</li>
          <li>33100 Tampere</li>
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
      </div>
      <div className="layout-grid row-start-3 col-all uppercase text-sm md:text-left md:row-start-4">
        <div className="col-start-2 col-span-2 md:row-start-1 md:col-start-1 md:col-span-4">
          © Rare Agency
        </div>
        <div className="col-span-2 text-center md:row-start-2 md:col-span-6 md:text-left">
          <img
            className="inline-block align-text-top"
            src="/static/icons/finnish_flag.svg"
            width="20"
            height="13"
          />{" "}
          Made in Finland
        </div>
        <div className="col-span-2 text-right md:row-start-3 md:col-span-6 md:text-left">
          <a href="#" className="button-underline">
            Cookie & Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
