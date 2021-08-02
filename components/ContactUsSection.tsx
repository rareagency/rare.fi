import React from "react";
import Link from "next/link";
import JourneyCircle from "./JourneyCircle";
import Button from "./Button";
import { c } from "../utils/classnames";

const textBoxClass = c(`
  text-off-white
  w-3/5
  inline-block
  w-64
  md:text-lg
  md:text-center
`);

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="layout-grid col-all bg-action-purple h-auto w-full py-32 p-8"
    >
      <div className="text-left col-start-2 col-span-2 lg:text-center lg:row-start-1 lg:col-span-full lg:justify-self-center lg:flex lg:flex-col">
        <span className={textBoxClass + " tag"}>
          Join for a journey
          <br />
          from conception to
          <br />
          implemention
        </span>
        <JourneyCircle className="-ml-6 lg:ml-0">
          <img
            src="/static/journey-1.svg"
            className="transform translate-x-8 translate-y-8 xl:translate-x-6 xl:translate-y-6 xl:scale-90"
          />
        </JourneyCircle>
      </div>

      <div className="text-center col-start-4 col-span-2 lg:row-start-2 lg:col-span-full lg:justify-self-center lg:flex lg:flex-col">
        <span className={textBoxClass + " tag"}>
          Bring modern tech &<br />
          practices to give a<br />
          headstart
        </span>

        <JourneyCircle className="inline-flex">
          <img
            src="/static/journey-2.svg"
            className="transform scale-135 translate-y-4"
          />
        </JourneyCircle>
      </div>

      <div className="text-right col-start-6 col-span-2 lg:text-center lg:row-start-3 lg:col-span-full lg:justify-self-center lg:flex lg:flex-col">
        <span className={textBoxClass + " tag"}>
          Inject a missing
          <br />
          capability & skill
          <br />
          to your team
        </span>
        <JourneyCircle className="-mr-6 lg:mr-0">
          <img
            src="/static/journey-3.svg"
            className="transform translate-y-2"
          />
        </JourneyCircle>
      </div>

      <h2 className="col-all text-off-white pt-8 text-center md:w-128 uppercase font-bold text-[36px]">
        We adapt to our client&apos;s
        <br />
        environment & needs
      </h2>
      <h4 className="col-all text-off-white pt-8 text-center">
        Let&apos;s explore yours
      </h4>

      <div className="col-all text-center">
        <Link href="/about">
          <a>
            <Button
              className="m-10 h-16 px-12 spacing tracking-wider"
              kind="secondary"
              xl
            >
              Book our first no-obligation chat
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
