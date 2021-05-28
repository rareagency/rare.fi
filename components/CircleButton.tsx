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
  children = <p>Click me! Me Me!</p>,
}) => {
  const [isShown, setIsShown] = React.useState(false);
  if (!link) link = "#";
  return (
    <div
      id="button-container"
      onMouseEnter={() => setTimeout(() => setIsShown(true), 150)}
      onMouseLeave={() => setTimeout(() => setIsShown(false), 250)}
    >
      <Link href={link}>
        <a
          className={`inline-flex items-center ml-12 md:ml-0 ${c(className)} `}
        >
          <style jsx>{`
            .text {
              display: inline-block;
              @apply rounded-full border-action-purple
              border-[3px] py-3 px-6;
            }
            .img {
              animation-name: move;
              animation-duration: 0.2s;
              @apply rounded-full border-action-purple border-[3px] h-14 w-14 flex items-center justify-center;
            }
            .button {
              animation-name: moveReverse;
              animation-duration: 0.3s;
              @apply font-default text-lg border-solid border-action-purple border-[3px] rounded-full px-8 py-2 uppercase;
            }

            @keyframes move {
              from {
                padding-left: 32px;
                padding-right: 32px;
              }
              to {
                padding-left: 0px;
                padding-right: 0px;
              }
            }
            @keyframes moveReverse {
              from {
                padding-left: 0px;
                padding-right: 0px;
              }
              to {
                padding-left: 32px;
                padding-right: 32px;
              }
            }
          `}</style>
          {!isShown && (
            <div className="img text-action-purple text-bold">{">"}</div>
          )}
          {isShown && (
            <button className="button">
              <span className="h5 text-action-purple">{children}</span>
            </button>
          )}
        </a>
      </Link>
    </div>
  );
};

export default CircleButton;
