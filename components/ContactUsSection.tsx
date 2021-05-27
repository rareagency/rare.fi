import React from "react";
import cntl from "cntl";
import Link from "next/link";
import JourneyCircle from "./JourneyCircle";
import Button from "./Button";

const textBoxClass = cntl`
  text-off-white
  w-3/5
  inline-block
  md:text-lg
  md:text-center
`;

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="layout-grid col-all bg-action-purple h-auto w-full py-32 xl:p-8"
    >
      <div className="text-left col-start-2 col-span-2">
        <span className={textBoxClass + " tag"}>
          Join for a journey
          <br />
          from conception to
          <br />
          implemention
        </span>
        <JourneyCircle className="col-start-2 col-span-2">
          <img src="/static/journey-1.svg" />
        </JourneyCircle>
      </div>

      <div className="text-center col-start-4 col-span-2">
        <span className={textBoxClass + " tag"}>
          Bring modern tech &<br />
          practices to give a<br />
          headstart
        </span>

        <JourneyCircle className="col-start-4 col-span-2 inline-flex">
          <img src="/static/journey-2.svg" className="transform scale-150" />
        </JourneyCircle>
      </div>

      <div className="text-right col-start-6 col-span-2">
        <span className={textBoxClass + " tag"}>
          Inject a missing
          <br />
          capability & skill
          <br />
          to your team
        </span>
        <JourneyCircle className="col-start-6 col-span-2">
          <img src="/static/journey-3.svg" />
        </JourneyCircle>
      </div>

      <h2 className="col-all text-off-white pt-8 text-center md:w-64 uppercase font-bold text-[36px]">
        We adapt to our client&apos;s
        <br />
        environment & needs
      </h2>
      <h4 className="col-all text-off-white pt-8 text-center">
        Let&apos;s explore yours
      </h4>

      <div className="col-all text-center">
        <Button
          className="m-10 h-16 px-12 spacing tracking-wider"
          kind="secondary"
        >
          <Link href="/about">Book our first no-obligation chat</Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactUs;
