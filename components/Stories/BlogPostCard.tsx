import Link from "next/link";
import React from "react";

type StoryProps = {
  title?: React.ReactNode;
  header?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  href: string;
  orientation?: "left" | "right";
};

const BlogPostCard = ({ title, header, image, imageAlt, href }: StoryProps) => (
  <Link href={href}>
    <a className="group block">
      <img src={image} alt={imageAlt} className="mb-6 md:mb-3" />
      <span className="tag text-mid-blue">{title}</span>
      <span className="h4 mt-6 sm:mt-3 sm:text-[14px] group-hover:text-action-purple break-words">
        {header}
      </span>
    </a>
  </Link>
);

export default BlogPostCard;
