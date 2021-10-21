import React from "react";

interface Props {
  title?: string;
  titleSize?: "sm";
  textSize?: "sm";
  children: React.ReactNode;
}

const BlogParagraph = ({ title, titleSize, children, textSize }: Props) => {
  return (
    <article className="mb-6">
      {title && (
        <header className={titleSize === "sm" ? "h5" : "h3"}>{title}</header>
      )}
      <div className={textSize === "sm" ? "paragraph-sm" : ""}>{children}</div>
    </article>
  );
};

export default BlogParagraph;
