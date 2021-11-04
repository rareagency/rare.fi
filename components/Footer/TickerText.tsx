import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TickerText = () => {
  const words = [
    "collaborative",
    "accessible",
    "to last",
    "with love",
    "for humans",
  ];

  return (
    <ReactTypingEffect
      text={words}
      cursorRenderer={(cursor: string) => (
        <h2 className="text-off-white">{cursor}</h2>
      )}
      speed={200}
      eraseSpeed={50}
      typingDelay={1000}
      eraseDelay={3000}
      displayTextRenderer={(text: string) => {
        return <h2 className="text-off-white sm:text-[1.6rem]">{text}</h2>;
      }}
    />
  );
};

export default TickerText;
