import Link from "next/link";
import React from "react";
import { Post } from "../../types/blog";
import { Article } from "../../types/dev-to";
import { chooseSlug } from "../../utils/blog";
import AnimatedImage from "../AnimatedImage";

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

        <div className="relative mt-12">
          {post.cover_image_placeholder ? (
            <AnimatedImage
              src={post.cover_image}
              alt="Featured story"
              width={1075}
              height={425}
              placeholder="blur"
              blurDataURL={post.cover_image_placeholder}
              className="object-cover"
            />
          ) : (
            <AnimatedImage
              src={post.cover_image}
              alt="Featured story"
              width={1075}
              height={425}
              className="object-cover"
            />
          )}
        </div>
      </a>
    </Link>
  </article>
);

export default FeaturedStory;
