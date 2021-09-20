import React from "react";
import Button from "../Button";

export const ContactUsHeader = () => (
  <section id="contact-us-header" className="col-all layout-grid p-8 mt-64">
    <h2 className="h2-small col-start-2 col-span-4 leading-relaxed md:col-span-6 lg:col-start-1">
      You have a higher chance to succeed if we work together.
    </h2>
    <Button
      className="mt-10 mb-10 px-12 col-start-2 col-span-3 lg:col-start-1 lg:col-span-4 md:col-span-5 sm:col-span-6"
      xl
    >
      Book our first no&#8209;obligation chat
    </Button>
  </section>
);
