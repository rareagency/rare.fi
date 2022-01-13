import Link from "next/link";
import React, { ReactNode } from "react";
import { staticPlaceholder } from "../../utils/blog";
import { c } from "../../utils/classnames";
import AnimatedImage from "../AnimatedImage";
import CircleButton from "../CircleButton";

type StoryProps = {
  title?: ReactNode;
  header?: ReactNode;
  image: string | StaticImageData;
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
  <Link href={link} aria-label={`Read ${header}`} passHref>
    <a className="group mt-24 col-all layout-grid md:mt-4 md:pb-2">
      <div
        className={c(
          "col-span-3 md:col-span-full md:w-full md:px-0 lg:order-2 cursor-pointer",
          {
            "col-start-2": orientation === "left",
            "col-start-5": orientation === "right",
          }
        )}
      >
        {typeof image === "string" ? (
          <AnimatedImage
            src={image}
            alt={imageAlt}
            height={450}
            width={600}
            placeholder="blur"
            blurDataURL={staticPlaceholder}
            className="object-cover"
          />
        ) : (
          <AnimatedImage
            src={image}
            alt={imageAlt}
            placeholder="blur"
            layout="responsive"
          />
        )}
      </div>

      <div
        className={c(
          "col-span-3 pl-32 pr-32 md:col-span-full lg:px-16 md:py-8 md:px-0 lg:order-1",
          {
            "col-start-5": orientation === "left",
            "col-start-2 text-right md:text-left": orientation === "right",
          }
        )}
      >
        <span className="tag md-tag text-mid-blue font-bold">{title}</span>
        <h4 className="text-dark-blue pt-6">{header}</h4>
        <div className="pt-8 inline-flex items-center md:w-full md:hidden">
          <CircleButton>Read article</CircleButton>
        </div>
      </div>
    </a>
  </Link>
);

export default Story;
