import React from "react";
import { c } from "../utils/classnames";
import Button from "./Button";

type CircleButtonProps = {
  link?: string;
  className?: string;
  onClick?: () => void;
  label?: string;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  link,
  className,
  children = "Click me!",
  onClick,
  label,
}) => {
  return (
    <Button
      label={label}
      kind="arrow"
      href={link}
      onClick={onClick}
      className={c(
        `
      group
      relative
      whitespace-nowrap
      overflow-hidden
      `,
        className
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[16px] top-4 group-hover:hidden md:hidden"
      >
        <path
          d="M19.4411 9.96L13.5211 19.04H8.12111L12.2811 12.12H0.40111V7.8H12.2411L8.12111 0.959998H13.5211L19.4411 9.96Z"
          fill="#1941AA"
        />
      </svg>

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
    </Button>
  );
};

export default CircleButton;
