import Link from "next/link";
import React from "react";
import { Post } from "../../types/Blog";
import { Article } from "../../types/Devto";
import { chooseSlug } from "../../utils/blog";

interface Props {
  post: Article | Post;
}

const FeaturedStory = ({ post }: Props) => (
  <article
    id="featured-story"
    className="col-start-2 col-span-6 mt-64 md:mt-32"
  >
    <Link href={`/blog/${chooseSlug(post)}`}>
      <a>
        <h2 className="h2-small text-dark-blue pb-6">{post.title}</h2>

        <p className="flex items-center">
          <img
            src="/static/icons/fresh.svg"
            className="icon"
            alt="Fresh"
            width="107"
            height="44"
          />
          <span className="tag">
            <b className="tag font-bold">Practical guide</b> by {post.user.name}
          </span>
        </p>

        <div className="relative md:h-[200px] lg:h-[350px] h-[425px] mt-12">
          <img
            src={post.cover_image || "/static/featured-article.png"}
            alt="Featured story"
            className="object-cover"
          />
        </div>
      </a>
    </Link>
  </article>
);

export default FeaturedStory;
