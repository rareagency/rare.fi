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
      className="button-underline text-action-purple hover:text-dark-blue hover:border-dark-blue"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default TextLink;
