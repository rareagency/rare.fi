import React from "react";

type TextLinkProps = {
  url: string;
  text: string;
};

const classes = {
  fontSize: "18px",
  lineHeight: "29px",
  letterSpacing: "0.085em",
};

const TextLink = ({ url, text }: TextLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`button-underline text-blue-dark hover:text-blue-light ${classes}`}
    >
      {text}
    </a>
  );
};

export default TextLink;
