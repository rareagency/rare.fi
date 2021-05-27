import React from "react";
import { useHorizontalScroller } from "../utils/horizontal-scroller";

type HorizontalScrollerProps = {
  textRows: [string, string, string];
};

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  textRows,
}) => {
  const { container, firstRow, secondRow, thirdRow } = useHorizontalScroller(
    textRows
  );

  return (
    <section
      id="horizontal-scroller"
      className="col-all flex flex-col overflow-x-hidden mt-64 mb-64 word-spacing-xl xl:word-spacing-md text-action-purple"
      {...container}
    >
      <span
        className="text-[90px] whitespace-nowrap font-thin leading-loose font-header md:text-[40px] xl:text-[60px]"
        {...firstRow}
      />
      <span
        className="text-[90px] whitespace-nowrap font-thin leading-loose font-header md:text-[40px] xl:text-[60px]"
        {...secondRow}
      />
      <span
        className="text-[90px] whitespace-nowrap font-thin leading-loose font-header md:text-[40px] xl:text-[60px]"
        {...thirdRow}
      />
    </section>
  );
};

export default HorizontalScroller;
