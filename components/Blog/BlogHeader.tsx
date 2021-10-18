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
    <header className="col-all layout-grid mt-48 mb-56 2xl:mb-0 sm:mt-24">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="col-all object-cover"
        style={{ minHeight: "20rem" }}
      />

      <article
        className={c(
          "absolute mx-auto left-0 right-0",
          "2xl:static 2xl:col-all",
          "layout-grid bg-light-yellow py-16 px-8"
        )}
        style={{ maxWidth: "1680px", bottom: "-40%" }}
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
