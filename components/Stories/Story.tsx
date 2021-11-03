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
  <article className="pt-24 col-all layout-grid md:pt-4 md:pb-2">
    <Link href={link} aria-label={`Read ${header}`} passHref>
      <img
        src={image}
        alt={imageAlt}
        className={c(
          "col-span-3 md:col-span-full md:w-full md:px-0 lg:order-2 cursor-pointer",
          {
            "col-start-2": orientation === "left",
            "col-start-5": orientation === "right",
          }
        )}
      />
    </Link>

    <div
      className={c(
        "col-span-3 pl-32 pr-32 md:col-span-full lg:px-16 md:py-8 md:px-0 lg:order-1",
        {
          "col-start-5": orientation === "left",
          "col-start-2 text-right md:text-left": orientation === "right",
        }
      )}
    >
      <Link href={link} aria-label={`Read ${header}`}>
        <a>
          <span className="tag text-mid-blue font-bold">{title}</span>
          <h4 className="text-dark-blue pt-6">{header}</h4>
          <div className="pt-8 inline-flex items-center md:w-full md:hidden">
            <CircleButton>Read article</CircleButton>
          </div>
        </a>
      </Link>
    </div>
  </article>
);

export default Story;
