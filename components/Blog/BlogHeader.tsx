import Image from "next/image";
import React from "react";
import { daysPassed } from "../../utils/blog";
import { c } from "../../utils/classnames";

interface Props {
  image: string | StaticImageData;
  imageAlt: string;
  imagePlaceholder?: string;
  title: string;
  intro?: string;
  tags?: string[];
  publishedAt: string;
  publishedAtReadable: string;
  readLength?: number;
}

const BlogHeader = ({
  image,
  imageAlt,
  imagePlaceholder,
  title,
  intro,
  publishedAtReadable,
  publishedAt,
  readLength,
}: Props) => {
  return (
    <header className="col-all layout-grid mt-48 sm:mt-24">
      <div
        className="overflow-hidden col-all w-full"
        style={{ maxHeight: "40rem" }}
      >
        {typeof image === "string" ? (
          <Image
            src={image}
            alt={imageAlt}
            placeholder="blur"
            blurDataURL={imagePlaceholder}
            layout="responsive"
            width={1075}
            height={425}
            className="object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            placeholder="blur"
            layout="responsive"
          />
        )}
      </div>

      <article
        className={c(
          "col-all layout-grid bg-light-yellow",
          "mx-auto py-16 px-8 -mt-64",
          "md:-mt-4 2xl:w-full 2xl:-mt-24 sm:py-8"
        )}
        style={{ maxWidth: "1535px", zIndex: 1 }}
      >
        <section className="col-start-2 col-span-6">
          <h2 className="h2-small mb-10 sm:text-xl sm:mb-3">{title}</h2>

          {intro && (
            <div className="sm:text-sm text-xl tracking-wider">{intro}</div>
          )}

          <footer className="mt-8 uppercase tag flex items-center sm:mt-3 tracking-normal">
            {!daysPassed(publishedAt, 30) && (
              <img
                src="/static/icons/fresh.svg"
                className="w-24 mr-4"
                alt="Fresh"
              />
            )}

            {`${publishedAtReadable} `}
            {readLength && `/ ${readLength} min read`}
          </footer>
        </section>
      </article>
    </header>
  );
};

export default BlogHeader;
