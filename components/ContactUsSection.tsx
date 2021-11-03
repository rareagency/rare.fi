import Link from "next/link";
import React from "react";
import { c } from "../utils/classnames";
import Button from "./Button";
import JourneyCircle from "./JourneyCircle";

const textBoxClass = c(`
  text-off-white
  inline-block
  md:text-lg
  md:text-center
`);

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="layout-grid col-all bg-action-purple h-auto w-full py-32 p-8 md:py-16"
    >
      <div className="text-left col-start-2 col-span-2 lg:text-center lg:row-start-1 lg:col-span-full lg:justify-self-center lg:flex lg:flex-col lg:items-center lg:mb-16 md:mb-8">
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
            alt="Swift person with a Rare -paper in it's hand"
          />
        </JourneyCircle>
      </div>

      <div className="text-center col-start-4 col-span-2 lg:row-start-2 lg:col-span-full lg:justify-self-center lg:flex lg:flex-col lg:items-center lg:mb-16 md:mb-8">
        <span className={textBoxClass + " tag"}>
          Bring modern tech &<br />
          practices to give a<br />
          headstart
        </span>

        <JourneyCircle className="inline-flex ">
          <img
            src="/static/journey-2.svg"
            className="transform scale-135 translate-y-4"
            alt="Person running to a futuristic car with a paper in it's hand"
          />
        </JourneyCircle>
      </div>

      <div className="text-right col-start-6 col-span-2 lg:text-center lg:row-start-3 lg:col-span-full lg:justify-self-center lg:flex lg:flex-col lg:items-center lg:mb-16 md:mb-8">
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
            alt="Flying hero with a lemon in it's hand"
          />
        </JourneyCircle>
      </div>

      <h2 className="h2-small col-all text-off-white pt-8 text-center md:w-128 uppercase font-bold md:pt-0">
        We adapt to our client&apos;s
        <br />
        environment & needs
      </h2>
      <h4 className="col-all text-off-white pt-8 text-center sm:text-[18px]">
        Let&apos;s explore yours
      </h4>

      <div className="col-all flex items-center justify-center text-center">
        <Link href="/contact-us">
          <a>
            <Button
              label="Book our first no-obligation chat"
              className="mt-10"
              kind="secondary-light"
            >
              Book our first no&#8209;obligation chat
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
