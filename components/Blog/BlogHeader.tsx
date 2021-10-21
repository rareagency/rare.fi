import React from "react";
import { c } from "../../utils/classnames";

interface Props {
  imgUrl: string;
  imgAlt: string;
  title: string;
  category: string;
  readLength?: number;
  children: React.ReactNode;
}

const BlogHeader = ({
  imgUrl,
  imgAlt,
  title,
  category,
  children,
  readLength,
}: Props) => {
  return (
    <header className="col-all layout-grid mt-48 sm:mt-24">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="col-all object-fill w-full"
        style={{ minHeight: "20rem" }}
      />

      <article
        className={c(
          "col-all layout-grid bg-light-yellow",
          "mx-auto py-16 px-8 -mt-64",
          "md:-mt-4 2xl:w-full 2xl:-mt-24"
        )}
        style={{ maxWidth: "1535px" }}
      >
        <section className="col-start-2 col-span-6">
          <h2
            className="mb-10"
            style={{ lineHeight: "120%", letterSpacing: "0.2rem" }}
          >
            {title}
          </h2>

          <div>{children}</div>

          <footer className="mt-8 uppercase tag flex items-center">
            <img
              src="/static/icons/fresh.svg"
              className="w-24 mr-4"
              alt="Fresh"
            />
            {category} {readLength && `/ ${readLength} min read`}
          </footer>
        </section>
      </article>
    </header>
  );
};

export default BlogHeader;
