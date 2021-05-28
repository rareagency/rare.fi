import React from "react";
import Button from "./Button";

const Floater = () => {
  const [hidden] = React.useState(false);
  if (hidden) {
    return null;
  }
  return (
    <section className="bg-action-purple w-full p-4 layout-grid col-all sticky bottom-0">
      <p className="col-start-2 col-span-4 md:col-span-4 normal-case text-off-white tag md:text-[18px] text-[32px] my-2">
        Psst... Don't miss out!
      </p>
      <Button
        xl
        className="col-start-6 col-span-2 md:col-start-5 md:col-span-3"
        kind="secondary"
      >
        Subscribe to rare
      </Button>
    </section>
  );
};

export default Floater;
