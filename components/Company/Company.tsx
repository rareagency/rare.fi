import React from "react";
import FeatureBox from "./FeatureBox";

const Company = () => {
  return (
    <section id="company" className="col-all layout-grid">
      <h1 className="col-start-2 col-span-6 pt-32 font-header-mono">
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
