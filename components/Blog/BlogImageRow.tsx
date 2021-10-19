import React from "react";
import { c } from "../../utils/classnames";

interface BlogImage {
  url: string;
  alt: string;
}

interface Props {
  images: BlogImage[];
  captionTitle?: string;
  captionContent?: string;
}

const BlogImageRow = ({ images, captionTitle, captionContent }: Props) => (
  <section className="layout-grid col-all  grid-cols-4 my-12">
    {captionTitle && (
      <aside className="col-start-6 col-span-2 tag md:col-all">
        <div
          className={c(
            "border-l-2 border-mid-blue pl-8 border-b-0 pb-0 mb-0",
            "md:border-l-0 md:border-b-2 md:pb-4 md:pl-0 md:mb-6"
          )}
        >
          <span className="h5">{captionTitle}</span>
          {captionContent}
        </div>
      </aside>
    )}

    <div className="col-start-2 col-span-4 pr-16 md:col-all">
      <figure className={`grid gap-8 grid-cols-${images.length}`}>
        {images.map((img, i) => (
          <a href={img.url} className="col-span-1" key={i}>
            <img src={img.url} alt={img.alt} />
          </a>
        ))}
      </figure>
    </div>
  </section>
);

export default BlogImageRow;
