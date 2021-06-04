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
  <article className="pt-24 col-all layout-grid md:pt-8">
    <img
      src={image}
      alt={imageAlt}
      className={c("col-span-3 md:col-span-full", {
        "col-start-2": orientation === "left",
        "col-start-5": orientation === "right",
      })}
    />

    <div
      className={c("col-span-3 pl-32 pr-32 md:col-span-full md:p-8", {
        "col-start-5": orientation === "left",
        "col-start-2 text-right md:text-left": orientation === "right",
      })}
    >
      <span className="tag text-mid-blue">{title}</span>
      <h4 className="md:text-sm text-dark-blue pt-6">{header}</h4>
      <div className="pt-6 inline-flex items-center">
        <CircleButton link={link} />
      </div>
    </div>
  </article>
);

export default Story;
