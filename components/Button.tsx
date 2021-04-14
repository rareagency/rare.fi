import React, { ReactNode } from "react";
import cntl from "cntl";

type ButtonProps = {
  children?: ReactNode;
  kind?: "primary" | "secondary";
};

const buttonClass = ({ kind = "primary" }: ButtonProps) => cntl`
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
  font-medium
  border-solid
  border-blue-light
  border-2
  rounded-full
  pl-8
  pr-8
  pt-2
  pb-2
`;

const Button = ({ children, kind }: ButtonProps) => {
  return <button className={buttonClass({ kind })}>{children}</button>;
};

export default Button;
