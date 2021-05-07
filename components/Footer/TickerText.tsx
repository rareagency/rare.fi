import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TickerText = () => {
  const words = ["Collaborative", "Properly", "Very good", "Even better"];

  return (
    <ReactTypingEffect
      text={words}
      cursorRenderer={(cursor: string) => <h2>{cursor}</h2>}
      speed={200}
      eraseSpeed={50}
      typingDelay={1000}
      eraseDelay={3000}
      displayTextRenderer={(text: string) => {
        return <h2>{text}</h2>;
      }}
    />
  );
};

export default TickerText;
