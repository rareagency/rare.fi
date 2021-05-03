import React from "react";

type TextLinkProps = {
  url: string;
  text: string;
};

const TextLink = ({ url, text }: TextLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="button-underline text-blue-dark hover:text-blue-light "
    >
      {text}
    </a>
  );
};

export default TextLink;
