import React from "react";
import cntl from "cntl";
import CircleButton from "../CircleButton";

type StoryProps = {
  title?: string;
  header?: string;
  image?: string;
  imageAlt?: string;
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

const buttonAlign = ({ orientation }: StoryProps) => {
  return orientation === "right" ? "justify-start" : "justify-end";
};

const Story = ({
  title,
  header,
  image,
  imageAlt,
  link,
  orientation,
}: StoryProps) => (
  <div
    className={
      align({ orientation }) + " flex justify-center content-end pt-24"
    }
  >
    <img src={image} alt={imageAlt} className="w-112 pl-2 md:w-48"></img>
    <div className="pl-4 pr-4">
      <div className="text-md font-mono md:text-sm">{title}</div>
      <div className="w-48 text-lg font-bold md:w-32 md:text-sm">{header}</div>
      <div className={buttonAlign({ orientation }) + " grid pt-6"}>
        <CircleButton link={link} />
      </div>
    </div>
  </div>
);

export default Story;
