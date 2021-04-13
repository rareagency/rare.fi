import React from "react";
import cntl from "cntl";

type cirlceProps = {
  image?: string;
};

const Circle = ({ image }: cirlceProps) => {
  const circle = cntl`
    bg-gray-400
    h-64
    w-64
    inline-block
    rounded-full
    m-8
    `;
  return (
    <div
      className={circle}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Circle;
