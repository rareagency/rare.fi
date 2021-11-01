import React, { useState } from "react";
import { Post } from "../../types/Blog";
import { Article } from "../../types/Devto";
import { chooseSlug } from "../../utils/blog";
import { c } from "../../utils/classnames";
import CircleButton from "../CircleButton";
import BlogPostCard from "./BlogPostCard";

const INITIAL_AMOUNT_OF_POSTS = 4;

interface Props {
  posts: (Article | Post)[];
}

const MoreStories = ({ posts }: Props) => {
  const [maxPosts, setMaxPosts] = useState(INITIAL_AMOUNT_OF_POSTS);
  const [seeMoreClick, setSeeMoreClick] = useState(false);

  const handlePosts = () => {
    setSeeMoreClick(true);
    setMaxPosts(posts.length);

    // setTimeout to wait for the posts to render and then scroll
    setTimeout(() => {
      document.getElementById("post_5")?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  return (
    <section
      id="more-stories"
      className="col-all layout-grid pl-8 pt-16 pb-16 md:px-8"
    >
      {posts.slice(0, maxPosts).map((post, i) => (
        <article
          key={i}
          id={`post_${i}`}
          className={c(
            `col-start-${i % 2 === 0 ? "2" : "4"} col-span-2 pt-16 pb-16 pr-8`,

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
            href={`/blog/${chooseSlug(post)}`}
            header={post.title}
          />
        </article>
      ))}

      <div
        className={c(
          `${
            seeMoreClick ? "md:hidden" : ""
          } col-start-6 row-start-1 col-span-2 pt-16 pb-16 ml-12 md:row-start-auto md:col-start-2 md:col-end-8 md:m-0 md:p-0`
        )}
      >
        <CircleButton onClick={handlePosts}>See more</CircleButton>
      </div>
    </section>
  );
};

export default MoreStories;
