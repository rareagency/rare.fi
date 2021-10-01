import React from "react";
import Button from "./Button";

const JoinUsSection: React.FC = ({
  children = "Rare family welcomes people of any shape and form",
}) => (
  <section
    id="join-us"
    className="col-all px-8 relative layout-grid bg-light-yellow pt-16 pb-16"
  >
    <h2 className="h2-small text-action-purple col-start-2 col-span-3 lg:text-center lg:col-all">
      {children}
    </h2>
    <Button
      kind="secondary"
      className="col-start-2 col-span-2 lg:col-all mt-8"
      xl
    >
      Dare to join Rare
    </Button>

    <img
      src="/static/skateramp.png"
      alt="Person skating in a pool ramp"
      className="object-cover w-1/2 h-full absolute right-0 top-0 opacity-100 lg:w-full lg:opacity-50"
    />
  </section>
);

export default JoinUsSection;
