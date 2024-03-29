import React from "react";
import { c } from "../../utils/classnames";
import NavItem from "../Nav/NavItem";
import { links } from "../Nav/pagelinks";
import TextLink from "../TextLink";
import TickerText from "./TickerText";

const container = c(`
  layout-grid
  col-all
  bg-black
  text-white
  h-auto
  p-8
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

      <ol className="col-start-6 col-span-2 row-start-1 justify-self-end lg:w-full md:mt-20 sm:mt-10 md:justify-self-start md:row-start-2 md:col-start-1 md:col-span-full md:pt-8 sm:pt-0">
        {links.map((link, index) => (
          <li
            className="py-2 text-right lg:-mx-4 md:text-left w-48 lg:w-full"
            key={index}
          >
            <NavItem url={link.url} text={link.text} key={index} />
          </li>
        ))}
      </ol>

      <div className="h6 text-off-white space-y-6 col-start-2 row-start-2 col-span-3 py-20 sm:pt-0 sm:pb-10 md:row-start-3 md:col-start-1 md:col-span-6">
        <ol className="pt-16 sm:pt-12">
          <li className="pb-6">
            <b className="h5 text-off-white">Tampere</b>
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
      <div className="layout-grid row-start-3 col-all text-sm md:text-left md:row-start-4">
        <div className="uppercase h6 text-off-white col-start-2 col-span-2 md:row-start-1 md:col-start-1 md:col-span-6 md:py-1">
          © Rare Agency
        </div>
        <div className="uppercase h6 text-off-white col-span-2 text-center md:row-start-2 md:col-span-6 md:text-left md:py-1">
          <img
            className="inline-block mb-[3px]"
            src="/static/icons/finnish_flag.svg"
            width="20"
            height="13"
            alt="Finnish flag"
          />{" "}
          Made in Finland
        </div>
        <div className="col-span-2 text-right md:row-start-3 md:col-span-6 md:text-left md:py-1 sm:pt-4">
          <TextLink href="/privacy" kind="light" className="sm:text-sm">
            Cookie &amp; Privacy policy
          </TextLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
