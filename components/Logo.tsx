import React from "react";
import Image from "next/image";

const Logo = () => (
  <Image
    className="h-8 w-auto"
    src="/static/logo.svg"
    alt="Rare Agency -logo"
    width="194"
    height="47"
  />
);

export const BlueLogo = () => (
  <Image
    src="/static/logo_blue.svg"
    alt="Rare Agency -logo"
    width="122"
    height="30"
  />
);

export const DarkBlueLogo = () => (
  <Image
    className="h-8 w-auto"
    src="/static/logo_dark_blue.svg"
    alt="Rare Agency -logo"
    width="194"
    height="47"
  />
);

export default Logo;
