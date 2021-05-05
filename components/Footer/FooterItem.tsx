import React from "react";
import Link from "next/link";

type FooterProps = {
  url: string;
  text: string;
};

const FooterItem = ({ url, text }: FooterProps) => {
  return (
    <Link href={url}>
      <h5>
        <a className="text-white text-right py-2 uppercase">{text}</a>
      </h5>
    </Link>
  );
};

export default FooterItem;
