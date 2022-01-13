import Link from "next/link";
import React, { CSSProperties } from "react";
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
  style?: CSSProperties;
  label?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  kind = "primary",
  className,
  onClick,
  href,
  style,
  label,
}) => {
  return (
    <>
      {href ? (
        <Link aria-label={label} href={href}>
          <a style={style} className={c("button", kind, className)}>
            {children}
          </a>
        </Link>
      ) : (
        <button
          aria-label={label}
          style={style}
          className={c(
            "button",
            kind,
            className,
            "group-hover:w-[275px] md:group-hover:w-full"
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}

      <style jsx>{`
        .button {
          @apply flex items-center justify-center text-center font-default font-bold text-lg border-solid border-action-purple;
          @apply border-[4px] rounded-full px-8 pb-2 pt-3 min-h-[60px] uppercase tracking-wider;
          @apply text-[22px] sm:text-[16px] sm:px-6;
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
      `}</style>
    </>
  );
};

export default Button;
