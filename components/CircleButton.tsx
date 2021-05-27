import Link from "next/link";
import React from "react";
import { c } from "../utils/classnames";

type CircleButtonProps = {
  link?: string;
  className?: string;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  link,
  className,
  children,
}) => {
  if (!link) link = "#";
  return (
    <Link href={link}>
      <a className="inline-flex items-center ml-12 md:ml-0">
        <span className="h5 text-action-purple inline-block">{children}</span>
        <img
          src="/static/button.svg"
          alt="Circle button"
          className={c(
            "cursor-pointer w-12 inline-block ml-6 md:ml-0",
            className
          )}
        />
      </a>
    </Link>
  );
};

export default CircleButton;
