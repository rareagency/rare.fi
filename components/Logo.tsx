import React from "react";

type LogoProps = {
  color?: "blue";
};

const Logo = ({ color }: LogoProps) => {
  if (color === "blue") {
    return <img src="/static/logo_blue.svg" alt="Rare Agency -logo" />;
  }
  return <img src="/static/logo.svg" alt="Rare Agency -logo" />;
};

export default Logo;
