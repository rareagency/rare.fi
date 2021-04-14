import Link from "next/link";
import React from "react";
import Button from "../Button";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="grid justify-center justify-items-center grid-cols-1">
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
    </div>
  );
};

export default Stories;
