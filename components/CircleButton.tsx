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
      <a className={c(`button text-action-purple text-bold text`, className)}>
        <style jsx>{`
          .button {
            animation-name: retract;
            animation-duration: 0.2s;
            @apply rounded-full border-action-purple border-[3px] h-14 w-14 flex items-center justify-center;
          }
          .button:hover {
            animation-name: extend;
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

          @keyframes retract {
            from {
              width: 16rem;
            }
            to {
              width: 3.5rem;
            }
          }
          @keyframes extend {
            from {
              width: 3.5rem;
            }
            to {
              width: 16rem;
            }
          }
        `}</style>
        <span className="arrow">{">"}</span>
        <span className="content">{children}</span>
      </a>
    </Link>
  );
};

export default CircleButton;
