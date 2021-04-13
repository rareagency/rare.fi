import React from "react";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="pt-32">
      <Story
        image="/static/stock/stock1.svg"
        image_alt="Stock photo"
        title="Case study / Tieto"
        header="Applying the right tech from the start"
        orientation="right"
      />
    </div>
  );
};

export default Stories;
