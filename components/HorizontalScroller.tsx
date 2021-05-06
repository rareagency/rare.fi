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
      className="col-all flex flex-col overflow-x-hidden mt-64 mb-64 word-spacing-xl"
      {...container}
    >
      <span
        className="text-[6rem] whitespace-nowrap font-thin leading-loose font-header word-spacing-xl"
        {...firstRow}
      />
      <span
        className="text-[6rem] whitespace-nowrap font-thin leading-loose font-header word-spacing-xl"
        {...secondRow}
      />
      <span
        className="text-[6rem] whitespace-nowrap font-thin leading-loose font-header word-spacing-xl"
        {...thirdRow}
      />
    </section>
  );
};

export default HorizontalScroller;
