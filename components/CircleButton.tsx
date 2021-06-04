import Link from "next/link";
import React from "react";
import { c } from "../utils/classnames";

type CircleButtonProps = {
  link?: string;
  className?: string;
  text?: string;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  link,
  className,
  children = "Click me!",
}) => {
  if (!link) link = "#";
  return (
    <Link href={link}>
      <a className={c(`inline-flex items-center ml-12 md:ml-0`, className)}>
        <style jsx>{`
          .button {
            animation-name: move;
            animation-duration: 0.2s;
            @apply rounded-full border-action-purple border-[3px] h-14 w-14 flex items-center justify-center;
          }
          .button:hover {
            animation-name: moveReverse;
            animation-duration: 0.3s;
            width: 16rem;
          }

          .arrow {
            position: absolute;
          }

          .content {
            opacity: 0;
          }

          .text:hover > .content {
            opacity: 1;
            transition: 0.1s 0.1s;
          }

          .text:hover .arrow {
            display: none;
          }

          @keyframes move {
            from {
              width: 16rem;
            }
            to {
              width: 3.5rem;
            }
          }
          @keyframes moveReverse {
            from {
              width: 3.5rem;
            }
            to {
              width: 16rem;
            }
          }
        `}</style>
        <button className="button text-action-purple text-bold text">
          <span className="arrow">{">"}</span>
          <span className="content">{children}</span>
        </button>
      </a>
    </Link>
  );
};

export default CircleButton;
