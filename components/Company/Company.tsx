import React from "react";
import FeatureBox from "./FeatureBox";

const Company = () => {
  return (
    <section className="col-all layout-grid">
      <h1 className="col-start-2 col-span-6 pt-32 title">
        Setting pace for the modern tech companies
      </h1>
      <div className="row-start-2 col-all">
        <FeatureBox />
        <FeatureBox />
      </div>
    </section>
  );
};

export default Company;
