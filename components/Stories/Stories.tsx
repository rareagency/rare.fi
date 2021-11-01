import React from "react";
import { getStaticMetaData } from "../../utils/blog";
import Button from "../Button";
import TextLink from "../TextLink";
import Story from "./Story";

const foundingStory = getStaticMetaData("founding-story");

const Stories = () => {
  return (
    <section id="stories" className="layout-grid col-all relative">
      <img
        src="/static/rare_est.svg"
        alt="Rare Est. 2019"
        className="rare-est col-start-2 absolute transform -translate-y-1/3 md:w-1/2 md:-translate-y-1/2"
      />

      <Story
        image={foundingStory.cover_image}
        imageAlt={foundingStory.cover_image_alt}
        link={`/blog/${foundingStory.slug}`}
        title="Story"
        header={foundingStory.title}
        orientation="left"
      />
      <Story
        image="/static/pictures/stock2.svg"
        imageAlt="Stock photo"
        link={`/#`}
        title="Career story"
        header={
          <>
            Pyry&apos;s journey
            <br />
            with Rare
          </>
        }
        orientation="right"
      />
      <div className="pt-16 flex col-all justify-center md:hidden">
        <Button href="/blog" kind="secondary">
          See all stories
        </Button>
      </div>
      <div className="col-all text-center justify-center pt-0 hidden md:block">
        <TextLink href="/blog" className="link-text">
          See all stories
        </TextLink>
      </div>

      <style jsx>{`
        .rare-est {
          position: absolute;
        }
      `}</style>
    </section>
  );
};

export default Stories;
