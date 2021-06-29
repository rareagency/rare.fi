import React from "react";
import Link from "next/link";
import { smoothScroll } from "../../utils/smoothScroll";

type FooterProps = {
  url: string;
  text: string;
  scroll?: boolean;
};

const classes =
  "text-white text-right py-2 uppercase title2 text hover:text-light";

const FooterItem = ({ url, text, scroll }: FooterProps) => {
  if (scroll) {
    return (
      <a
        href={`/#${url}`}
        className={`${classes} cursor-pointer`}
        onClick={(e) => smoothScroll(url, e)}
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={url} passHref>
      <a className={classes}>{text}</a>
    </Link>
  );
};

export default FooterItem;
