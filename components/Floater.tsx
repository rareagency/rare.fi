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
        `flex bg-action-purple w-full p-4 col-all sticky bottom-0 animation`
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
      <p className="flex-auto h6 mr-2 my-auto normal-case text-off-white sm:text-[16px] md:text-[20px] lg:text-[28px] text-[32px]">
        Psst… Don&lsquo;t miss out!
      </p>
      <Button
        xl
        className="flex-none w-64 sm:w-32 sm:whitespace-normal whitespace-nowrap"
        kind="secondary-light"
      >
        Subscribe to Rare
      </Button>
      <button
        className={"flex-none w-4 right-0 top-0 p-4 text-light-red"}
        onClick={handleClose}
      >
        X
      </button>
    </section>
  );
};

export default Floater;
