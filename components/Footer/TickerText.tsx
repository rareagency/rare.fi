import React from "react";
import ReactTypingEffect from "react-typing-effect";

const fontClassName =
  "text-off-white text-[64px] xl:text-[50px] lg:text-[42px] md:text-[35px] sm:text-[1.6rem]";

const TickerText = () => (
  <ReactTypingEffect
    text={["collaborative", "accessible", "to last", "with love", "for humans"]}
    cursorRenderer={(cursor: string) => (
      <h2 className={fontClassName}>{cursor}</h2>
    )}
    speed={200}
    eraseSpeed={50}
    typingDelay={1000}
    eraseDelay={3000}
    displayTextRenderer={(text: string) => (
      <h2 className={fontClassName}>{text}</h2>
    )}
  />
);

export default TickerText;
