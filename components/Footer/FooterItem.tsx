import React from "react";
import Link from "next/link";

type FooterProps = {
  url: string;
  text: string;
};

const FooterItem = ({ url, text }: FooterProps) => {
  return (
    <Link href={url}>
      <a className="text-white text-right py-2 uppercase">{text}</a>
    </Link>
  );
};

export default FooterItem;
