import React from "react";
import Link from "next/link";

type FooterProps = {
  url: string;
  text: string;
};

const classes =
  "text-white text-right py-2 uppercase title2 text hover:text-light";

const FooterItem = ({ url, text }: FooterProps) => {
  return (
    <Link href={url}>
      <a className={classes}>{text}</a>
    </Link>
  );
};

export default FooterItem;
