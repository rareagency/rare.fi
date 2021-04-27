import React from "react";
import cntl from "cntl";
import Link from "next/link";
import Circle from "./Circle";
import Button from "./Button";

const textBoxClass = cntl`
  text-white
  w-52
  text-xl
  md:text-lg
  md:text-center
`;

const ContactUs = () => {
  return (
    <section className="col-all bg-blue-light h-auto w-full">
      <div className="pt-16 grid justify-center justify-items-center grid-cols-3 gap-1 md:grid-cols-1 md:gap-y-4">
        <span className={textBoxClass + " text-left"}>
          Join for a journey from conception to implemention
        </span>
        <span className={textBoxClass + " text-center"}>
          Bring modern tech & practices to give a headstart
        </span>
        <span className={textBoxClass + " text-right"}>
          Inject a missing capability & skill to your team
        </span>
        <Circle image="/static/logo.svg" />
        <Circle />
        <Circle />
      </div>

      <div className="grid justify-center justify-items-center grid-cols-1">
        <h1 className="text-4xl text-white pt-16 w-112 text-center md:text-2xl md:w-64">
          We adapt to our client&apos;s environment & needs
        </h1>
        <h1 className="text-2xl text-white pt-16 text-center md:text-xl">
          Let&apos;s explore yours
        </h1>

        <Button className="m-16" kind="secondary">
          <Link href="/about">Book our first no-obligation chat</Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactUs;
