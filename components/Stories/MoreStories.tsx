import React from "react";
import { Post } from "../../types/Post";
import CircleButton from "../CircleButton";
import BlogPostCard from "./BlogPostCard";

const INITIAL_AMOUNT_OF_POSTS = 4;

const MoreStories = (props: { posts: Post[] }) => {
  const [maxPosts, setMaxPosts] = React.useState(INITIAL_AMOUNT_OF_POSTS);
  const handlePosts = () => {
    setMaxPosts(props.posts.length);

    // setTimeout to wait for the posts to render and then scroll
    setTimeout(() => {
      document.getElementById("post_5")?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  return (
    <section id="more-stories" className="col-all layout-grid  pt-16 pb-16">
      {props.posts.slice(0, maxPosts).map((post, i) => (
        <article
          key={post.id}
          id={`post_${i}`}
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

      <div className="col-start-6 row-start-1 col-span-2 pt-16 pb-16 ml-12">
        <CircleButton onClick={handlePosts}>See more</CircleButton>
      </div>
    </section>
  );
};

export default MoreStories;
