import React from "react";
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
    ? "justify-end md:justify-start"
    : "justify-start";
};

const align = ({ orientation }: StoryProps) => {
  return orientation === "right"
    ? "flex-row-reverse text-right"
    : "flex-row text-left";
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
    <div className="pl-16 pr-16 col-start-3 row-start-1">
      <span className="text-md font-mono uppercase md:text-sm">{title}</span>
      <h4 className="w-96 md:w-32 md:text-sm">{header}</h4>
      <div className={buttonAlign({ orientation }) + " grid pt-6"}>
        <CircleButton link={link} />
      </div>
    </div>
  </div>
);

export default Story;
