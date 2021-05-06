import React from "react";
import cntl from "cntl";
import Logo from "../Logo";
import TextLink from "../TextLink";

const container = cntl`
  layout-grid
  col-all
  bg-white
  h-auto
  pt-8
  pb-6
  md:pl-8
`;

const stories = cntl`
  font-headerMono
  uppercase
  col-start-4
  col-span-2
  text-right
  text-blue-mid
  md:col-start-1
  md:col-span-4
  md:text-left
`;

const BottomFooter = () => {
  return (
    <footer className={container}>
      <div className="col-start-2 md:col-start-1 md:col-span-3 md:pb-8">
        <Logo color="blue" />
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
