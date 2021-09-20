import React from "react";
import { c } from "../utils/classnames";

type ButtonProps = {
  kind?: "primary" | "secondary";
  className?: string;
  xl?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  kind = "primary",
  xl = false,
  className,
}) => (
  <button className={c("button", { xl }, kind, className)}>
    <style jsx>{`
      .button {
        @apply w-auto font-default font-bold text-lg border-solid border-action-purple;
        @apply border-[5px] rounded-full px-8 py-2 min-h-[60px] uppercase tracking-wider;
        animation-name: moveReverse;
        animation-duration: 0.1s;
      }
      .button:hover {
        animation: move 0.15s ease-out forwards;
      }
      .primary {
        @apply bg-action-purple text-off-white;
      }
      .secondary {
        @apply bg-off-white text-action-purple;
      }
      .xl {
        @apply text-xl md:text-sm md:px-4;
      }
      span {
        vertical-align: -15%;
      }

      @keyframes move {
        from {
          box-shadow: 0px 0px 0px 0px #fff, 0px 0px 0px #1941aa;
        }
        to {
          box-shadow: 0px 6px 0px -4px #fff, 0px 5px 0px #1941aa;
        }
      }
      @keyframes moveReverse {
        from {
          box-shadow: 0px 6px 0px -4px #fff, 0px 5px 0px #1941aa;
        }
        to {
          box-shadow: 0px 0px 0px 0px #fff, 0px 0px 0px #1941aa;
        }
      }
    `}</style>
    <span>{children}</span>
  </button>
);

export default Button;
