import { useEffect, useRef, useState } from "react";

export function useHorizontalScroller([firstRow, secondRow, thirdRow]: [
  string,
  string,
  string
]) {
  const ref = useRef<HTMLElement>(null);
  const [number, setNumber] = useState(0);

  const handleScroll = () => {
    const offsetFromScrollerElement =
      window.scrollY + window.innerHeight - (ref.current?.offsetTop ?? 0);
    const speed = 0.6;
    setNumber(Math.max(0, offsetFromScrollerElement) * speed);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {
    container: { ref },
    firstRow: {
      children: firstRow,
      style: {
        transform: `translateX(${-400 + number}px)`,
        transition: "transform 50ms",
      },
    },
    secondRow: {
      children: secondRow,
      style: {
        transform: `translateX(${(-500 + number) * 0.8}px)`,
        transition: "transform 50ms",
      },
    },
    thirdRow: {
      children: thirdRow,
      style: {
        transform: `translateX(${-400 + number * 0.6}px)`,
        transition: "transform 50ms",
      },
    },
  };
}
