import React from "react";

interface Props {
  title?: string;
  titleSize?: "sm";
  children: React.ReactNode;
}

const BlogParagraph = ({ title, titleSize, children }: Props) => {
  return (
    <article className="my-6">
      {title && (
        <header
          className={`${
            titleSize === "sm" ? "h5" : "h3"
          } sm:text-[20px] md:text-[26px]`}
        >
          {title}
        </header>
      )}
      <div className="text-xl sm:text-base sm:tracking-normal">{children}</div>
    </article>
  );
};

export default BlogParagraph;
