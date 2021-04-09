import React from "react";
import Link from "next/link";

type FooterProps = {
  url: string;
  text: string;
};

const FooterItem = ({ url, text }: FooterProps) => {
  return (
    <div className="text-white text-right py-2 uppercase">
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default FooterItem;
