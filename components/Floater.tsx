import React, { useEffect } from "react";
import { c } from "../utils/classnames";
import { getItem, setItem } from "../utils/local-storage";
import Button from "./Button";

const Floater = () => {
  const [hidden, setHidden] = React.useState(false);

  const handleClose = () => {
    setHidden(true);
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
        `bg-action-purple w-full p-4 layout-grid col-all sticky bottom-0 animation`
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
      <p className="col-start-1 col-span-4 md:col-span-4 normal-case text-off-white sm:text-[16px] md:text-[16px] lg:text-[24px] text-[32px] my-4 h6">
        Psst… Don&lsquo;t miss out!
      </p>
      <Button
        xl
        className="col-start-5 col-span-3 sm:col-start-5 sm:col-span-3 w-5/6"
        kind="secondary-light"
      >
        Subscribe to Rare
      </Button>
      <button
        className={"absolute right-0 top-0 p-4 text-light-red"}
        onClick={handleClose}
      >
        X
      </button>
    </section>
  );
};

export default Floater;
