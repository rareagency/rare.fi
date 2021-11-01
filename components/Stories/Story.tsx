import Link from "next/link";
import React, { ReactNode } from "react";
import { c } from "../../utils/classnames";
import CircleButton from "../CircleButton";

type StoryProps = {
  title?: ReactNode;
  header?: ReactNode;
  image?: string;
  imageAlt?: string;
  link: string;
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
  <article className="pt-24 col-all layout-grid md:pt-0 md:pb-2">
    <img
      src={image}
      alt={imageAlt}
      className={c("col-span-3 md:col-span-full md:w-full", {
        "col-start-2": orientation === "left",
        "col-start-5": orientation === "right",
      })}
    />

    <div
      className={c(
        "col-span-3 pl-32 pr-32 md:col-span-full md:p-8 lg:pl-16 lg:pr-16",
        {
          "col-start-5": orientation === "left",
          "col-start-2 text-right md:text-left": orientation === "right",
        }
      )}
    >
      <span className="tag text-mid-blue">
        <Link href={link}>{title}</Link>
      </span>
      <h4 className="text-dark-blue pt-6">
        <Link href={link}>{header}</Link>
      </h4>
      <div className="pt-8 inline-flex items-center md:w-full">
        <CircleButton link={link}>Read article</CircleButton>
      </div>
    </div>
  </article>
);

export default Story;
