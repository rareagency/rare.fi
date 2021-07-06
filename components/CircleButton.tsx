import React from "react";
import { c } from "../utils/classnames";

type CircleButtonProps = {
  link?: string;
  className?: string;
  onClick?: () => void;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  link,
  className,
  children = "Click me!",
  onClick,
}) => {
  if (!link) link = "";
  return (
    <button
      onClick={onClick}
      className={c(`button border-action-purple border-[5px] h-14 w-14 rounded-full transition-all duration-300 text-action-purple text-bold text-base uppercase font-bold`, className)}
    >
      <style jsx>{`
        .button:hover {
          padding-left: 4rem;
          padding-right: 4rem;
          width: auto;
        }

        .content {
          display: none;
          opacity: 0;
        }

        .button:hover > .content {
          display: inline-block;
          opacity: 1;
          transition: 0.3s;
        }

        .button:hover .arrow {
          display: none;
        }
      `}</style>
      <span className="arrow relative top-[2px] text-2xl">{"→"}</span>
      <span className="content">{children}</span>
    </button>
  );
};

export default CircleButton;
