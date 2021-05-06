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
      style={classes}
      className={`button-underline text-blue-light hover:text-blue-dark hover:border-blue-dark;`}
    >
      {text}
    </a>
  );
};

export default TextLink;
