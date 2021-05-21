import React from "react";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = () => (
  <section id="blog-posts" className="layout-grid col-start-2 col-span-6 pt-16">
    <div className="col-start-6 col-span-2 pt-16 flex justify-center">
      <ul className="table-of-contents">
        <li>
          <h5 data-count="10">All of Rare</h5>
        </li>
        <li>
          <h5 data-count="3">Career journeys</h5>
        </li>
        <li>
          <h5 data-count="3">Client cases</h5>
        </li>
        <li>
          <h5 data-count="4">Practical guides</h5>
        </li>
      </ul>
    </div>

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

    <style jsx>{`
      .table-of-contents h5 {
        @apply inline-block relative pb-8;
      }
      .table-of-contents h5:after {
        @apply font-header-mono inline-block font-light align-top text-sm pl-2;
        content: attr(data-count);
      }
    `}</style>
  </section>
);

export default BlogPosts;
