import React from "react";

type LogoProps = {
  color?: "blue";
  className?: string;
};

const Logo = ({ color, className }: LogoProps) => {
  let image = "/static/logo.svg";
  if (color === "blue") {
    image = "/static/logo_blue.svg";
  }
  return <img className={className} src={image} alt="Rare Agency -logo" />;
};

export default Logo;
