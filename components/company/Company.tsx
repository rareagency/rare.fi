import React from "react";
import FeatureBox from "./FeatureBox";

const Company = () => {
  return (
    <div className="w-240 flex flex-col" style={{ margin: "0 auto" }}>
      <h1 className="text-7xl font-mono pt-32">
        Settings pace for the modern tech companies
      </h1>
      <FeatureBox />
      <FeatureBox />
    </div>
  );
};

export default Company;
