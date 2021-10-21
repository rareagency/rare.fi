import React from "react";

interface Props {
  title?: string;
  titleSize?: "sm";
  children: React.ReactNode;
}

const BlogParagraph = ({ title, titleSize, children }: Props) => {
  return (
    <article className="mb-6">
      {title && (
        <header className={titleSize === "sm" ? "h5" : "h3"}>{title}</header>
      )}
      <div className="sm:text-[16px]">{children}</div>
    </article>
  );
};

export default BlogParagraph;
