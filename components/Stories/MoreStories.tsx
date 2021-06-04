import React from "react";
import CircleButton from "../CircleButton";
import BlogPostCard from "./BlogPostCard";

const MoreStories = () => (
  <section id="more-stories" className="col-all layout-grid  pt-16 pb-16">
    <article className="col-start-2 col-span-2 pt-16 pb-16 pr-8">
      <BlogPostCard
        image="/static/stock/stock2.svg"
        title={
          <>
            <span className="tag font-bold">Client story</span> / Tieto
          </>
        }
        href="/"
        header="Applying the right tech from the start"
      />
    </article>

    <article className="col-start-4 col-span-2 pt-16 pb-16 pr-8">
      <BlogPostCard
        image="/static/stock/stock2.svg"
        title={
          <>
            <span className="tag font-bold">Client story</span> / Tieto
          </>
        }
        href="/"
        header="Applying the right tech from the start"
      />
    </article>

    <div className="col-start-6 col-span-2 pt-16 pb-16 ml-12">
      <CircleButton>Load more</CircleButton>
    </div>
  </section>
);

export default MoreStories;
