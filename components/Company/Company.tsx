import React from "react";
import FeatureBox from "./FeatureBox";

const Company = () => {
  return (
    <section className="col-all layout-grid">
      <h2 className="text-6xl pt-32 col-start-2 col-span-6 uppercase text-blue-dark font-TTAutonomousMonoBold">
        Setting pace for the modern tech companies
      </h2>
      <div className="row-start-2 col-all">
        <FeatureBox />
        <FeatureBox />
      </div>
    </section>
  );
};

export default Company;
