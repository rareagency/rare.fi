import React from "react";
import { c } from "../utils/classnames";

type CircleProps = {
  className?: string;
};

const JourneyCircle: React.FC<CircleProps> = ({ className, children }) => {
  return (
    <div
      className={c(
        "bg-dark-blue h-80 w-80 xl:h-64 xl:w-64 inline-block rounded-full my-16 bg-center bg-no-repeat",
        className
      )}
    >
      {children}
    </div>
  );
};

export default JourneyCircle;
