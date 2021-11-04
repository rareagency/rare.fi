import Image from "next/image";
import Link from "next/link";
import React from "react";

type StoryProps = {
  title?: React.ReactNode;
  header?: React.ReactNode;
  image: string;
  imageAlt?: string;
  imagePlaceholder?: string;
  href: string;
  orientation?: "left" | "right";
};

const BlogPostCard = ({
  title,
  header,
  image,
  imageAlt,
  imagePlaceholder,
  href,
}: StoryProps) => (
  <Link href={href}>
    <a className="group block">
      <div
        className="mb-4 md:mb-2"
        style={{ aspectRatio: "42/17", overflow: "hidden" }}
      >
        {imagePlaceholder ? (
          <Image
            src={image}
            alt={imageAlt}
            width={1075}
            height={425}
            placeholder="blur"
            blurDataURL={imagePlaceholder}
          />
        ) : (
          <Image src={image} alt={imageAlt} width={1075} height={425} />
        )}
      </div>
      {title && <span className="tag text-mid-blue">{title}</span>}
      <span className="h4 mt-6 sm:mt-3 sm:text-[14px] group-hover:text-action-purple break-words">
        {header}
      </span>
    </a>
  </Link>
);

export default BlogPostCard;
