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
        className="rare-est col-start-2 absolute transform -translate-y-1/3 md:w-1/2"
      />

      <Story
        image="/static/stock/stock1.svg"
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
        image="/static/stock/stock2.svg"
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
      <div className="pt-16 flex col-all justify-center">
        <Link href="/stories">
          <a>
            <Button kind="secondary">See all stories</Button>
          </a>
        </Link>
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
