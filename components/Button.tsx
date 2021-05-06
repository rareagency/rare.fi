import React from "react";
import cntl from "cntl";

type ButtonProps = {
  kind?: "primary" | "secondary";
  className?: string;
};

const buttonClass = ({ kind = "primary", className }: ButtonProps) => cntl`
  ${
    kind === "primary"
      ? cntl`
      bg-blue-light
      text-white
    `
      : cntl`
      bg-white
      text-blue-light
    `
  }

  w-auto
  font-default
  font-bold
  text-lg
  border-solid
  border-blue-light
  border-[3px]
  rounded-full
  pl-8
  pr-8
  pt-2
  pb-2
  uppercase
  ${className}
`;

const Button: React.FC<ButtonProps> = ({ children, kind, className }) => (
  <button className={buttonClass({ kind, className })}>{children}</button>
);

export default Button;
