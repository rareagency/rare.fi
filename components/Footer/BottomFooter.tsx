import React from "react";
import { c } from "../../utils/classnames";
import Logo from "../Logo";
import TextLink from "../TextLink";

const container = c(`
  layout-grid
  col-all
  bg-white
  h-auto
  px-8
  pt-8
  pb-8
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
  xl:col-span-4
  xl:text-left
  md:col-all
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
      <div className="col-span-2 text-right space-x-12 font-bold md:hidden xl:col-start-5 xl:col-span-4">
        <TextLink
          href="https://github.com/rareagency"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </TextLink>
        <TextLink
          href="https://www.linkedin.com/company/rareagency/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </TextLink>
        <TextLink
          href="https://instagram.com/rarekoodaa"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </TextLink>
      </div>
      <div className="invisible md:space-x-12 md:row-start-3 md:col-start-1 md:col-span-full md:visible md:mt-6 sm:mt-0">
        <div className="flex">
          <a
            href="https://github.com/rareagency/rareagency.fi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/social-media/github.svg"
              alt="GitHub logo"
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
              alt="Instagram logo"
              className="w-1/7 pr-4"
            />
          </a>
          <a
            href="https://linkedin.com/company/rareagency"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/social-media/linkedin.svg"
              alt="LinkedIn logo"
              className="w-1/7"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
