import React from "react";
import Button from "./Button";

const JoinUsSection: React.FC = ({
  children = "Rare family welcomes people of any shape and form",
}) => (
  <section
    id="join-us"
    className="col-all px-8 layout-grid bg-light-yellow pt-16 pb-16"
  >
    <h2 className="h2-small text-action-purple col-start-2 col-span-3 md:col-all">
      {children}
    </h2>
    <Button
      kind="secondary"
      className="col-start-2 col-span-2 md:col-all mt-8"
      xl
    >
      Dare to join Rare
    </Button>
  </section>
);

export default JoinUsSection;
