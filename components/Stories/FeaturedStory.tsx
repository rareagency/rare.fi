import React from "react";
import Image from "next/image";

const FeaturedStory = () => (
  <article id="featured-story" className="col-start-2 col-span-6 mt-12">
    <h2 className="text-4xl leading-relaxed text-dark-blue pt-6 pb-6">
      What I learned from building
      <br />a Telegram bot on Next.js
    </h2>

    <p className="flex items-center">
      <img src="/static/icons/fresh.svg" alt="Fresh" width="107" height="44" />
      <span className="tag">
        <b className="tag font-bold">Practical guide</b> by Riku Rouvila
      </span>
    </p>

    <div className="relative md:h-[200px] lg:h-[350px] h-[425px] mt-12">
      <Image
        src="/static/featured-article.png"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  </article>
);

export default FeaturedStory;
