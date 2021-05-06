import React from "react";

type LogoProps = {
  color?: "blue";
  className?: string;
};

const Logo = ({ color, className }: LogoProps) => {
  if (color === "blue") {
    return (
      <img
        className={className}
        src="/static/logo_blue.svg"
        alt="Rare Agency -logo"
      />
    );
  }
  return (
    <img className={className} src="/static/logo.svg" alt="Rare Agency -logo" />
  );
};

export default Logo;
