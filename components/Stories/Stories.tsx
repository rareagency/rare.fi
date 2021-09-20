import Link from "next/link";
import React from "react";
import Button from "../Button";
import Story from "./Story";

const Stories = () => {
  return (
    <section id="stories" className="layout-grid col-all relative">
      <img
        src="/static/rare_est.svg"
        alt="Rare Est. 2019"
        className="rare-est col-start-2 absolute transform -translate-y-1/3 md:w-1/2 md:-translate-y-1/2"
      />

      <Story
        image="/static/pictures/stock1.svg"
        imageAlt="Stock photo"
        title={
          <>
            <span className="tag font-bold">Case study</span> / Tieto
          </>
        }
        header="Applying the right tech from the start"
        orientation="left"
      />
      <Story
        image="/static/pictures/stock2.svg"
        imageAlt="Stock photo"
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
        <Link href="/stories">
          <a>
            {/* TODO: This should be link instead of button too */}
            <Button kind="secondary">See all stories</Button>
          </a>
        </Link>
      </div>
      <div className="col-all text-center justify-center pt-0 hidden md:block">
        <a className="link-text">See all stories</a>
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
