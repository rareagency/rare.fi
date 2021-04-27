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
    <section className="flex justify-between pt-32">
      <h3 className="flex-row justify-between w-32 text-2xl">
        Exceptional tech side
      </h3>
      <div className="flex-col w-[70%] md:w-[90%]">
        <h3 className="text-2xl">
          We fight mediocrity in development practices and insert ourselves to
          the product teams to tackle projects with confidence, together.
        </h3>
        <div className="grid grid-cols-3 grid-rows-auto justify-items-start gap-32 pt-8">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <Button className="mt-16" kind="secondary">
          <Link href="#">Learn how we apply it</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeatureBox;
