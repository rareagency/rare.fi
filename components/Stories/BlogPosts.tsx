import React from "react";
import { Post } from "../../types/Post";
import { c } from "../../utils/classnames";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = (props: { posts: Post[] }) => {
  return (
    <section
      id="blog-posts"
      className="layout-grid col-start-2 col-span-6 pt-16"
    >
      {/*<div className="col-start-6 col-span-2 pt-16 flex justify-center">
        <ul className="table-of-contents">
          <li>
            <h5 className="selected" data-count="10">
              All of Rare
            </h5>
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
  </div>*/}

      {props.posts.map((post, i) => (
        <article
          key={post.id}
          className={c(
            `col-start-${i % 2 === 0 ? "2" : "4"}`,
            "col-span-2 pt-16 pb-16 pr-8",
            "md:col-span-3 md:p-0 md:pb-8",
            { "md:pr-2": i % 2 === 0 },
            { "md:pl-2": i % 2 === 1 },
            `md:col-start-${i % 2 === 0 ? "2" : "4"}`
          )}
        >
          <BlogPostCard
            image={post.cover_image || "/static/featured-article.png"}
            title={
              <>
                <span className="tag font-bold">{post.tags}</span>
              </>
            }
            href={post.url}
            header={post.title}
          />
        </article>
      ))}

      <style jsx>{`
        .table-of-contents h5 {
          @apply inline-block relative pb-8 text-mid-blue;
        }
        .table-of-contents h5:after {
          @apply font-header-mono inline-block font-light align-top text-sm pl-2;
          content: attr(data-count);
        }
        .table-of-contents h5.selected {
          @apply text-action-purple;
        }
      `}</style>
    </section>
  );
};

export default BlogPosts;
