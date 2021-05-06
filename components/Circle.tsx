import React from "react";
import cntl from "cntl";

type CircleProps = {
  image?: string;
};
const circle = cntl`
  bg-gray-400
  h-64
  w-64
  inline-block
  rounded-full
  m-8
  bg-center
  bg-no-repeat
`;

const Circle = ({ image }: CircleProps) => {
  let style = ` background-image: url(${image})`;
  if (!image) {
    style = "";
  }
  return <div className={circle + style}></div>;
};

export default Circle;
