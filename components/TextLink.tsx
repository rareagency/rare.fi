import React from "react";
import { c } from "../utils/classnames";

interface TextLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  kind?: "dark" | "light";
}

const TextLink: React.FC<TextLinkProps> = ({
  children,
  kind,
  className,
  ...props
}) => (
  <a {...props} className={c("link-text", kind, className)}>
    {children}

    <style jsx>{`
      .link-text {
        @apply text-dark-blue hover:text-dark-blue hover:border-dark-blue;
        width: min-content;
        position: relative;
      }
      .link-text:hover {
        @apply text-action-purple;
      }
      .link-text::after {
        @apply border-action-purple;
        border-bottom-width: 3px;
        border-style: solid;

        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 5px;
        content: "";
        transform: scaleX(1);
        transition: transform 250ms ease-in-out;
        transform-origin: 100% 50%;
      }
      .link-text:hover:not(:active)::after {
        transform: scaleX(0);
      }

      .light {
        @apply text-off-white;
      }
      .light:hover {
        @apply text-light-action-purple;
      }
    `}</style>
  </a>
);

export default TextLink;
