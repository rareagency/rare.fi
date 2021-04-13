import React from "react";
import cntl from "cntl";
import CircleButton from "../CircleButton";

type StoryProps = {
  title?: string;
  header?: string;
  image?: string;
  image_alt?: string;
  link?: string;
  orientation?: "left" | "right";
};

const align = ({ orientation = "right" }: StoryProps) => cntl`
  ${
    orientation === "right"
      ? cntl`
      text-left
      flex-row
    `
      : cntl`
      text-right
      flex-row-reverse
    `
  }

`;

const Story = ({
  title,
  header,
  image,
  image_alt,
  link,
  orientation,
}: StoryProps) => {
  return (
    <div
      className={align({ orientation }) + " flex justify-center items-start"}
    >
      <img src={image} alt={image_alt} className="w-112 pl-2 md:w-48"></img>
      <div className="pl-8 pr-8">
        <div className="text-md font-mono md:text-sm">{title}</div>
        <div className="w-48 text-lg font-bold md:w-32 md:text-sm">
          {header}
        </div>
        <div className="pt-6">
          <CircleButton link={link} />
        </div>
      </div>
    </div>
  );
};

export default Story;
