import React from "react";

type TextLinkProps = {
  url: string;
  text: string;
};

const TextLink = ({ url, text }: TextLinkProps) => (
  <a href={url} target="_blank" className="link-text" rel="noreferrer">
    {text}
  </a>
);

export default TextLink;
