import React from "react";
import { Post } from "../../pages/stories/Post";
import CircleButton from "../CircleButton";
import BlogPostCard from "./BlogPostCard";

const MoreStories = (props: { posts: Post[] }) => (
  <section id="more-stories" className="col-all layout-grid  pt-16 pb-16">
    {props.posts.map((post, i) => (
      <article
        key={post.id}
        className={`col-start-${
          i % 2 === 0 ? "2" : "4"
        } col-span-2 pt-16 pb-16 pr-8`}
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

    <div className="col-start-6 col-span-2 pt-16 pb-16 ml-12">
      <CircleButton>Load more</CircleButton>
    </div>
  </section>
);

export default MoreStories;
