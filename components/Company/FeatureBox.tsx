import React from "react";
import Link from "next/link";
import Button from "../Button";

// TODO, use theese in stead of hardcoded values
type FeatureBoxProps = {
  title: string;
  header: string;
  buttonText: string;
  buttonLink: string;
  boxes: InfoBox[];
};

type InfoBox = {
  imageUrl: string;
  imageAlt: string;
  text: string;
};

const FeatureBox = () => {
  return (
    <section className="layout-grid col-all pt-32">
      <h3 className="col-start-2 col-span-2 text-xl font-bold">
        Exceptional tech side
      </h3>
      <h3 className="text-xl col-start-4 col-span-4 md:col-start-2 md:row-start-2 md:col-span-2">
        We fight mediocrity in development practices and insert ourselves to the
        product teams to tackle projects with confidence, together.
      </h3>
      <div className="row-start-2 col-start-4 col-span-6 pt-16 md:row-start-3 md:col-start-2 md:col-span-2">
        <div className="grid grid-cols-3 grid-rows-auto gap-32 md:grid-cols-1 md:gap-8">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
      <Button
        className="mt-16 row-start-3 col-start-4 col-span-2 md:row-start-4 md:col-start-2 md:col-span-3"
        kind="secondary"
      >
        <Link href="#">Learn how we apply it</Link>
      </Button>
    </section>
  );
};

export default FeatureBox;
