import React, { ReactNode } from "react";
import cntl from "cntl";

type buttonProps = {
  children?: ReactNode;
  isPrimary?: boolean;
};

const Button = ({ children, isPrimary }: buttonProps) => {
  const buttonClass = cntl`
    ${
      isPrimary
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
  m-16
  `;

  return <button className={buttonClass}>{children}</button>;
};

export default Button;
