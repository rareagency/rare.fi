import Link from "next/link";
import React from "react";
import { Post } from "../../types/Post";
import { combineSlug } from "../../utils/slug";

const FeaturedStory = (props: { post: Post }) => (
  <article
    id="featured-story"
    className="col-start-2 col-span-6 mt-64 md:mt-32"
  >
    <Link href={`/blog/${combineSlug(props.post.slug, props.post.id)}`}>
      <a>
        <h2 className="h2-small text-dark-blue pb-6">{props.post.title}</h2>

        <p className="flex items-center">
          <img
            src="/static/icons/fresh.svg"
            className="icon"
            alt="Fresh"
            width="107"
            height="44"
          />
          <span className="tag">
            <b className="tag font-bold">Practical guide</b> by{" "}
            {props.post.user.name}
          </span>
        </p>

        <div className="relative md:h-[200px] lg:h-[350px] h-[425px] mt-12">
          <img
            src={props.post.cover_image || "/static/featured-article.png"}
            alt="Featured story"
            className="object-cover"
          />
        </div>
      </a>
    </Link>
  </article>
);

export default FeaturedStory;
