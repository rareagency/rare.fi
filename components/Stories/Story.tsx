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

// TODO fix left / right orientation

const buttonAlign = ({ orientation }: StoryProps) => {
  return orientation === "right"
    ? "justify-start"
    : "justify-end md:justify-start";
};

const align = ({ orientation }: StoryProps) => {
  return orientation === "right"
    ? "flex-row-reverse text-left"
    : "flex-row text-right";
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
    className={"pt-24 flex col-all justify-center " + align({ orientation })}
  >
    <img
      src={image}
      alt={imageAlt}
      className={"w-112 md:w-48 col-start-4 col-span-3 row-start-1"}
    ></img>
    <div className="pl-8 pr-8 col-start-3 row-start-1">
      <div className="text-md font-mono md:text-sm">{title}</div>
      <div className="w-44 text-lg font-bold md:w-32 md:text-sm">{header}</div>
      <div className={buttonAlign({ orientation }) + " grid pt-6"}>
        <CircleButton link={link} />
      </div>
    </div>
  </div>
);

export default Story;
