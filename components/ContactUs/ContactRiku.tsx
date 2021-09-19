import React from "react";

export const ContactRiku = () => (
  <section id="contact-riku" className="col-all layout-grid p-0 mt-48">
    <img
      src="/static/pictures/riku-rouvila.jpg"
      alt="Riku Rouvila - Lead developer and Co-Founder of the company"
      className="col-start-2 col-span-4 md:col-span-6 lg:col-start-1 lg:col-span-6 lg:px-8"
    />

    <p className="paragraph col-start-6 col-span-2 self-center lg:col-all lg:px-8 lg:mt-20">
      Hi, I'm Riku –<br />
      Lead Developer &<br /> Co-Founder of Rare.
      <br />
      <br />
      I'm also your best pal to explore your unique needs, strengths and
      potential collaboration.
    </p>

    <div className="table-row col-all layout-grid px-8 md:flex md:flex-col md:mt-32">
      <span className="h6 col-start-2 mt-32 lg:mt-20 md:my-3">Say hi:</span>
      <span className="h4 col-start-3 col-span-2 mt-32 lg:mt-20 text-action-purple md:my-3">
        riku@rare.fi
        <br />
        +358&nbsp;50&nbsp;470&nbsp;0715
      </span>

      <span className="h6 col-start-2 mt-16 md:my-3">Listen:</span>
      <span className="h4 col-start-3 col-span-2 mt-16 md:my-3">
        <a href="https://webbidevaus.fi" target="_blank" className="link-text">
          Webbidevaus podcast{" "}
          <img
            className="inline-block ml-2"
            src="/static/icons/finnish_flag.svg"
            width="20"
            height="13"
          />
        </a>
      </span>

      <span className="h6 col-start-2 mt-16 md:my-3">Tune in:</span>
      <div className="col-start-3 flex mt-16 mb-48 md:my-3 md:mb-32">
        <a
          href="https://github.com/rareagency"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/static/social-media/github.svg" />
        </a>
        <a
          href="https://instagram.com/rarekoodaa"
          target="_blank"
          rel="noreferrer"
          className="ml-4"
        >
          <img src="/static/social-media/instagram.svg" />
        </a>
        <a
          href="https://www.linkedin.com/company/rareagency"
          target="_blank"
          rel="noreferrer"
          className="ml-4"
        >
          <img src="/static/social-media/linkedin.svg" />
        </a>
      </div>
    </div>
  </section>
);
