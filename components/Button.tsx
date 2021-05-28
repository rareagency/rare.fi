import React from "react";

type ButtonProps = {
  kind?: "primary" | "secondary";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  kind = "primary",
  className,
}) => {
  return (
    <button className={`${className} button ${kind}`}>
      <style jsx>{`
        .button {
          @apply w-auto font-default font-bold text-lg border-solid border-action-purple border-[3px] rounded-full pl-8 pr-8 pt-2 pb-2 uppercase;
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
