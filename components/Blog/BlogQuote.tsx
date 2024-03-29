import React from "react";
import { c } from "../../utils/classnames";

interface Props {
  source: string;
  color?: string;
  children: React.ReactNode;
}

const BlogQuote = ({ source, color, children }: Props) => {
  return (
    <div
      className={c(
        "my-12 text-2xl font-header-mono sm:text-[18px] md:text-[26px]",
        color === "orange" ? "text-notification-red" : undefined,
        color === "green" ? "text-notification-green" : undefined
      )}
    >
      {children}
      <span className="block mt-4 text-sm uppercase">{source}</span>
    </div>
  );
};

export default BlogQuote;
