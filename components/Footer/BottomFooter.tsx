import React from "react";
import Logo from "../Logo";
import TextLink from "../TextLink";
import { c } from "../../utils/classnames";

const container = c(`
  layout-grid
  col-all
  bg-white
  h-auto
  pt-8
  pb-6
  md:pl-8
  items-center
`);

const stories = c(`
  font-header-mono
  uppercase
  col-start-4
  col-span-2
  text-right
  text-mid-blue
  md:col-start-1
  md:col-span-4
  md:text-left
  tag
`);

const BottomFooter = () => {
  return (
    <footer id="page-bottom-footer" className={container}>
      <div className="col-start-2 md:col-start-1 md:col-span-full md:pb-8">
        <Logo kind="accent" />
      </div>
      <span className={stories}>Follow our stories on:</span>
      <div className="col-span-2 text-right space-x-6 md:row-start-3 md:col-start-1">
        <TextLink url="https://github.com/rareagency" text="Github" />
        <TextLink
          url="https://www.linkedin.com/company/rareagency/"
          text="Linkedin"
        />
        <TextLink url="https://instagram.com/rarekoodaa" text="Instagram" />
      </div>
    </footer>
  );
};

export default BottomFooter;
