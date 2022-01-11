import React from "react";
import FeatureBox from "./FeatureBox";

const Company = () => {
  return (
    <section id="company" className="col-all layout-grid p-8 pt-0 md:pt-8">
      <h1 className="col-start-2 col-span-6 pt-32 font-header-mono md:pt-8">
        Setting the pace for modern tech companies
      </h1>
      <div className="row-start-2 col-all">
        <FeatureBox />
      </div>
    </section>
  );
};

export default Company;
