import Link from "next/link";
import React from "react";
import { c } from "../utils/classnames";

type ButtonProps = {
  kind?:
    | "primary"
    | "secondary"
    | "primary-light"
    | "secondary-light"
    | "arrow";
  className?: string;
  xl?: boolean;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  kind = "primary",
  xl = false,
  className,
  onClick,
  href,
}) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={c("button", { xl }, kind, className)}>{children}</a>
        </Link>
      ) : (
        <button
          className={c("button", { xl }, kind, className)}
          onClick={onClick}
        >
          {children}
        </button>
      )}

      <style jsx>{`
        .button {
          @apply flex items-center justify-center text-center font-default font-bold text-lg border-solid border-action-purple;
          @apply border-[4px] rounded-full px-8 pb-2 pt-3 min-h-[60px] uppercase tracking-wider;
          @apply text-[22px];
          @apply transition;
        }

        .primary {
          @apply bg-action-purple text-off-white;
        }
        .primary:hover {
          @apply bg-light-action-purple border-light-action-purple;
        }

        .secondary {
          @apply text-action-purple;
        }
        .secondary:hover {
          @apply bg-action-purple text-off-white;
        }

        .primary-light {
          @apply text-action-purple;
        }
        .primary-light:hover {
          @apply text-light-action-purple;
        }

        .secondary-light {
          @apply bg-transparent text-off-white border-off-white;
        }
        .secondary-light:hover {
          @apply bg-off-white text-action-purple;
        }

        .arrow {
          @apply text-action-purple px-0 w-16 hover:w-[275px] md:w-full md:hover:w-full;
          transition: width 200ms ease-in-out;
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
      `}</style>
    </>
  );
};

export default Button;
