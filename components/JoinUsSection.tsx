import React from "react";
import Button from "./Button";

const JoinUsSection = () => (
  <section
    id="join-us"
    className="col-all layout-grid bg-light-yellow pt-16 pb-16"
  >
    <h2 className="text-action-purple col-start-2 col-span-3 text-4xl leading-relaxed">
      Rare family welcomes people of any shape and form
    </h2>
    <Button kind="secondary" className="col-start-2 col-span-2 mt-8">
      Dare to join Rare
    </Button>
  </section>
);

export default JoinUsSection;