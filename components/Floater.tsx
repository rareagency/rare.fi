import React from "react";
import Button from "./Button";
import { c } from "../utils/classnames";

const Floater = () => {
  const [hidden, setHidden] = React.useState(false);
  const [hiddenAnimation, setHiddenAnimation] = React.useState(false);

  if (hidden) {
    return null;
  }
  return (
    <section
      className={c(
        `bg-action-purple w-full p-4 layout-grid col-all sticky bottom-0 animation`,
        { hidden: hiddenAnimation }
      )}
    >
      <style jsx>{`
        .animation {
          animation-name: move;
          animation-duration: 1s;
        }
        .hidden {
          animation-name: moveDown;
          animation-duration: 0.7s;
          height: 0px;
          bottom: -50px;
        }
        @keyframes move {
          from {
            height: 0px;
          }
          to {
            height: 93px;
          }
        }
        @keyframes moveDown {
          from {
            height: 93px;
            bottom: 0px;
          }
          to {
            height: 0px;
            bottom: -50px;
          }
        }
      `}</style>
      <p className="col-start-2 col-span-4 md:col-span-4 normal-case text-off-white md:text-[18px] text-[32px] my-2 tag">
        Psst... Don&lsquo;t miss out!
      </p>
      <Button
        xl
        className="col-start-6 col-span-2 md:col-start-5 md:col-span-3"
        kind="secondary"
      >
        Subscribe to rare
      </Button>
      <button
        className={"absolute right-0 top-0 pt-2 pr-4 text-light-red"}
        onClick={() => {
          setHiddenAnimation(true);
          setTimeout(() => setHidden(true), 700);
        }}
      >
        x
      </button>
    </section>
  );
};

export default Floater;
