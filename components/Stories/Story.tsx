import React from "react";
import { c } from "../../utils/classnames";
import CircleButton from "../CircleButton";

type StoryProps = {
  title?: React.ReactNode;
  header?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  link?: string;
  orientation?: "left" | "right";
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
    className={c("pt-24 flex col-all justify-center", {
      "flex-row text-left": orientation === "left",
      "flex-row-reverse text-right": orientation === "right",
    })}
  >
    <img
      src={image}
      alt={imageAlt}
      className={"w-112 md:w-48 col-start-4 col-span-3 row-start-1"}
    ></img>
    <div className="pl-16 pr-16 col-start-3 row-start-1">
      <span className="tag text-mid-blue">{title}</span>
      <h4 className="w-96 md:w-32 md:text-sm text-dark-blue pt-6">{header}</h4>
      <div
        className={c("grid pt-6", {
          "justify-start": orientation === "left",
          "justify-end md:justify-start": orientation === "right",
        })}
      >
        <CircleButton link={link} />
      </div>
    </div>
  </div>
);

export default Story;
