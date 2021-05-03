import React from "react";
import cntl from "cntl";
import Logo from "../Logo";

const container = cntl`
  layout-grid
  col-all
  bg-white
  h-auto
  pt-2
  pb-4
  md:pl-8
`;

const stories = cntl`
  font-mono
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
      <div className={stories}>Follow our stories on:</div>
      <div className="col-span-2 text-right space-x-6 text-blue-light font-bold md:row-start-3 md:col-start-1">
        <a className="button-underline">Github</a>
        <a className="button-underline">Linkedin</a>
        <a className="button-underline">Instagram</a>
      </div>
    </footer>
  );
};

export default BottomFooter;
