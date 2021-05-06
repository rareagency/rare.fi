import Link from "next/link";
import React from "react";
import Button from "../Button";
import Story from "./Story";

const Stories = () => {
  return (
    <section className="layout-grid col-all">
      <Story
        image="/static/stock/stock1.svg"
        imageAlt="Stock photo"
        title="Case study / Tieto"
        header="Applying the right tech from the start"
        orientation="left"
      />
      <Story
        image="/static/stock/stock2.svg"
        imageAlt="Stock photo"
        title="Career story"
        header="Pyry's journey with Rare"
        orientation="right"
      />
      <div className="pt-16 flex col-all justify-center">
        <Button kind="secondary">
          <Link href="#">See all stories</Link>
        </Button>
      </div>
    </section>
  );
};

export default Stories;
