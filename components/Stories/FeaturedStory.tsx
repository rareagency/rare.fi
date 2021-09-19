import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../types/Post";

const FeaturedStory = (props: { post: Post }) => (
  <article id="featured-story" className="col-start-2 col-span-6 mt-64">
    <Link href={props.post.url}>
      <a>
        <h2 className="h2-small text-dark-blue pb-6">{props.post.title}</h2>

        <p className="flex items-center">
          <img
            src="/static/icons/fresh.svg"
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
          <Image
            src={props.post.cover_image}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </a>
    </Link>
  </article>
);

export default FeaturedStory;
