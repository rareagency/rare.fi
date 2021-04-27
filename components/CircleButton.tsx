import Link from "next/link";
import React from "react";

type CircleButtonProps = {
  link?: string | undefined;
};

const CircleButton = ({ link }: CircleButtonProps) => {
  if (!link) link = "#";
  return (
    <Link href={link}>
      <img
        src="/static/button.svg"
        alt="Circle button"
        className="cursor-pointer w-12"
      />
    </Link>
  );
};

export default CircleButton;
