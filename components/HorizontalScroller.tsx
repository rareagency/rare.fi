import React from "react";
import { useHorizontalScroller } from "../utils/horizontal-scroller";

type HorizontalScrollerProps = {
  textRows: [string, string, string];
};

const rowStyle =
  "text-[90px] whitespace-nowrap font-thin leading-loose font-header md:text-[40px] xl:text-[60px]";

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  textRows,
}) => {
  const { container, firstRow, secondRow, thirdRow } =
    useHorizontalScroller(textRows);

  return (
    <section
      id="horizontal-scroller"
      className="col-all flex flex-col overflow-x-hidden mt-64 mb-32 word-spacing-xl xl:word-spacing-md text-action-purple md:mt-20 md:mb-6 select-none"
      {...container}
    >
      <span className={rowStyle} {...firstRow} />
      <span className={rowStyle} {...secondRow} />
      <span className={rowStyle} {...thirdRow} />
    </section>
  );
};

export default HorizontalScroller;
