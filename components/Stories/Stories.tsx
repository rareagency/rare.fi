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
        orientation="right"
      />
      <Story
        image="/static/stock/stock2.svg"
        imageAlt="Stock photo"
        title="Career story"
        header="Pyry's journey with Rare"
        orientation="left"
      />
      <div className="pt-16">
        <Button kind="secondary">
          <Link href="#">See all stories</Link>
        </Button>
      </div>
    </section>
  );
};

export default Stories;
