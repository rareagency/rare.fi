import React from "react";
import Logo from "../Logo";
import TextLink from "../TextLink";
import { c } from "../../utils/classnames";

const container = c(`
  layout-grid
  col-all
  bg-white
  h-auto
  px-8
  pt-8
  pb-6
  xl:pl-8
  items-center
`);

const stories = c(`
  font-header-mono
  uppercase
  col-start-4
  col-span-2
  text-right
  text-mid-blue
  xl:col-start-1
  xl:col-span-6
  xl:text-left
  sm:font-thin
  sm:text-sm
  sm:pb-6
  tag
`);

const BottomFooter = () => {
  return (
    <footer id="page-bottom-footer" className={container}>
      <div className="col-start-2 justify-self-start xl:col-start-1 xl:col-span-full xl:pb-8">
        <Logo kind="accent" />
      </div>
      <span className={stories}>Follow our stories on:</span>
      <div className="col-span-2 text-right space-x-12 xl:row-start-3 xl:col-start-1 font-bold sm:invisible">
        <TextLink url="https://github.com/rareagency" text="GitHub" />
        <TextLink
          url="https://www.linkedin.com/company/rareagency/"
          text="LinkedIn"
        />
        <TextLink url="https://instagram.com/rarekoodaa" text="Instagram" />
      </div>
      <div className=" invisible sm:space-x-12 sm:row-start-3 sm:col-start-1 sm:col-span-full sm:visible">
        <div className="flex">
          <a
            href="https://github.com/rareagency/rareagency.fi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/social-media/github.svg"
              alt="Instagram"
              className="w-1/7 pr-4"
            />
          </a>
          <a
            href="https://www.instagram.com/rarekoodaa"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/social-media/instagram.svg"
              alt="Instagram"
              className="w-1/7 pr-4"
            />
          </a>
          <a
            href="https://fi.linkedin.com/company/rareagency"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/social-media/linkedin.svg"
              alt="Instagram"
              className="w-1/7"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
