import React, { useEffect } from "react";
import Button from "./Button";
import { c } from "../utils/classnames";
import { getItem, setItem } from "../utils/localStorage";

const Floater = () => {
  const [hidden, setHidden] = React.useState(false);
  const [hiddenAnimation, setHiddenAnimation] = React.useState(false);

  const handleClose = () => {
    setHiddenAnimation(true);
    setTimeout(() => setHidden(true), 700);
    setItem("floater_hidden", true);
  };

  useEffect(() => {
    const item = getItem("floater_hidden");
    if (item) {
      setHidden(true);
    }
  }, []);

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
          0% {
            height: 0px;
          }
          70% {
            height: 100px;
          }
          100% {
            height: 93px;
          }
        }
        @keyframes moveDown {
          0% {
            height: 93px;
            bottom: 0px;
          }
          40% {
            height: 115px;
            bottom: 0px;
          }
          100% {
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
        className={"absolute right-0 top-0 p-4 text-light-red"}
        onClick={handleClose}
      >
        x
      </button>
    </section>
  );
};

export default Floater;
