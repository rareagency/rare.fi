import React from "react";
import { c } from "../utils/classnames";

type ButtonProps = {
  kind?: "primary" | "secondary";
  className?: string;
  xl: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  kind = "primary",
  xl,
  className,
}) => {
  return (
    <button className={`${className} ${c("button", { xl }, kind)}`}>
      <style jsx>{`
        .button {
          @apply w-auto font-default font-bold text-lg border-solid border-action-purple border-[3px] rounded-full px-8 py-2 uppercase;
          animation-name: moveReverse;
          animation-duration: 0.1s;
        }
        .button:hover {
          animation-name: move;
          animation-duration: 0.25s;
          animation-fill-mode: forwards;
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

        @keyframes move {
          from {
            box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px #1941aa;
          }
          to {
            box-shadow: 0px 7px 0px -4px #ffffff, 0px 6px 0px #1941aa;
          }
        }
        @keyframes moveReverse {
          from {
            box-shadow: 0px 7px 0px -4px #ffffff, 0px 6px 0px #1941aa;
          }
          to {
            box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px #1941aa;
          }
        }
      `}</style>
      {children}
    </button>
  );
};

export default Button;
