import React from "react";
import { c } from "../utils/classnames";

type ButtonProps = {
  kind?: "primary" | "secondary" | "secondary-light";
  className?: string;
  xl?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  kind = "primary",
  xl = false,
  className,
  onClick,
}) => (
  <button className={c("button", { xl }, kind, className)} onClick={onClick}>
    <style jsx>{`
      .button {
        @apply w-auto font-default font-bold text-lg border-solid border-action-purple;
        @apply border-[4px] rounded-full px-8 py-2 min-h-[60px] uppercase tracking-wider;
        @apply transition;
      }
      .primary {
        @apply bg-action-purple text-off-white;
      }
      .primary:hover {
        @apply bg-light-action-purple border-light-action-purple;
      }
      .secondary {
        @apply bg-off-white text-action-purple;
      }
      .secondary:hover {
        @apply bg-action-purple text-off-white;
      }
      .secondary-light {
        @apply bg-transparent text-off-white border-off-white;
      }
      .secondary-light:hover {
        @apply bg-off-white text-action-purple;
      }
      .button:active {
        transform: scale(0.98);
      }
      .button:focus:not(:focus-visible) {
        outline: none;
      }
      .xl {
        @apply text-xl md:text-sm md:px-4;
      }
      span {
        vertical-align: -15%;
      }
    `}</style>
    <span>{children}</span>
  </button>
);

export default Button;
