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
      <img src={image} alt={imageAlt} className="mb-6" />
      <span className="tag text-mid-blue">{title}</span>
      <h4 className="md:text-sm text-dark-blue mt-6 group-hover:text-action-purple">{header}</h4>
    </a>
  </Link>
);

export default BlogPostCard;
