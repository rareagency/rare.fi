import React from "react";
import firstStoryImg from "../../public/static/blog/founding-story/header.jpg";
import secondStoryImg from "../../public/static/blog/pyry-career-story/header.jpg";
import { getStaticMetaData } from "../../utils/blog";
import Button from "../Button";
import TextLink from "../TextLink";
import Story from "./Story";

const foundingStory = getStaticMetaData("founding-story");
const pyryCareerStory = getStaticMetaData("pyry-career-story");

const Stories = () => {
  return (
    <section
      id="stories"
      className="layout-grid col-all relative md:pt-12 md:px-8"
    >
      <img
        src="/static/rare_est.svg"
        alt="Rare Est. 2019"
        className="rare-est col-start-2 absolute transform -translate-y-1/3 md:w-1/2 md:-translate-y-1/2 pointer-events-none z-10"
      />

      <Story
        image={firstStoryImg}
        imageAlt={foundingStory.cover_image_alt}
        link={`/blog/${foundingStory.slug}`}
        title="Story"
        header={foundingStory.title}
        orientation="left"
      />
      <Story
        image={secondStoryImg}
        imageAlt={pyryCareerStory.cover_image_alt}
        link={`/blog/${pyryCareerStory.slug}`}
        title="Career story"
        header={pyryCareerStory.title}
        orientation="right"
      />
      <div className="pt-16 flex col-all justify-center md:hidden">
        <Button href="/blog" kind="secondary">
          See all stories
        </Button>
      </div>
      <div className="col-all pt-0 hidden md:block md:pt-8">
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
