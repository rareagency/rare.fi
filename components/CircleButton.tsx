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
      className={c(
        `
        circle-button

        group

        button border-action-purple border-[4px] h-14 w-14 rounded-full transition-all
        duration-300 text-action-purple text-bold text-base uppercase
        font-bold whitespace-nowrap overflow-hidden
        p-[0.5rem]
        hover:w-[172px]
        inline-block

        md:border-[3px]
        md:w-full
        md:hover:w-full
        `,
        className
      )}
    >
      <span className="arrow relative top-[2px] text-2xl group-hover:hidden md:hidden">
        {"→"}
      </span>
      <span
        className={c(`
        hidden
        opacity-0
        px-4

        group-hover:inline-block
        group-hover:opacity-100
        
        md:opacity-100
        md:inline-block`)}
      >
        {children}
      </span>

      <style jsx>{`
        .circle-button:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default CircleButton;
