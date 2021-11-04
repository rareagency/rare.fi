import Image from "next/image";
import React from "react";
import { c } from "../../utils/classnames";

interface Props {
  imgUrl: string;
  imgAlt: string;
  title: string;
  intro?: string;
  tags?: string[];
  publishedAt: string;
  readLength?: number;
}

const BlogHeader = ({
  imgUrl,
  imgAlt,
  title,
  tags,
  intro,
  publishedAt,
  readLength,
}: Props) => {
  return (
    <header className="col-all layout-grid mt-48 sm:mt-24">
      {/* <img
        src={imgUrl}
        alt={imgAlt}
        className="col-all object-cover w-full"
        style={{ minHeight: "20rem", maxHeight: "35rem" }}
      /> */}

      <div
        className="col-all w-full object-cover overflow-hidden"
        style={{
          minHeight: "20rem",
          maxHeight: "25rem",
          objectPosition: "50% 5%",
        }}
      >
        <Image
          src={imgUrl}
          alt={imgAlt}
          className="object-cover"
          layout="responsive"
          width={1000}
          height={200}
        />
      </div>

      <article
        className={c(
          "col-all layout-grid bg-light-yellow",
          "mx-auto py-16 px-8 -mt-64",
          "md:-mt-4 2xl:w-full 2xl:-mt-24 sm:py-8"
        )}
        style={{ maxWidth: "1535px" }}
      >
        <section className="col-start-2 col-span-6">
          <h2 className="mb-10 sm:text-xl sm:mb-3 tracking-wider">{title}</h2>

          {intro && <div className="sm:text-sm">{intro}</div>}

          {tags && (
            <div className="mt-4 text-[20px] sm:text-[14px]">
              {tags.map((tag) => {
                return `#${tag} `;
              })}
            </div>
          )}

          <footer className="mt-8 uppercase tag flex items-center sm:mt-3">
            <img
              src="/static/icons/fresh.svg"
              className="w-24 mr-4"
              alt="Fresh"
            />
            {`${publishedAt} `}
            {readLength && `/ ${readLength} min read`}
          </footer>
        </section>
      </article>
    </header>
  );
};

export default BlogHeader;
