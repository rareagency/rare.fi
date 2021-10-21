import React from "react";
import { c } from "../../utils/classnames";

interface Props {
  num: number;
  children: React.ReactNode;
  sm?: boolean;
}

const BlogNumberedTitle = ({ num, sm, children }: Props) => (
  <header className={c("flex items-center mb-6", sm ? "h5" : "h3")}>
    <div
      className={c(
        "flex items-center justify-center mr-6 font-header-mono",
        sm ? "bg-light-blue w-10 h-10" : "bg-light-yellow w-16 h-16"
      )}
    >
      {num}
    </div>

    <span>{children}</span>
  </header>
);

export default BlogNumberedTitle;
