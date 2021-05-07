import { useEffect, useRef } from "react";

export function useHorizontalScroller([firstRow, secondRow, thirdRow]: [
  string,
  string,
  string
]) {
  const ref = useRef<HTMLElement>(null);
  const firstRowRef = useRef<HTMLElement>(null);
  const secondRowRef = useRef<HTMLElement>(null);
  const thirdRowRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (!firstRowRef.current || !secondRowRef.current || !thirdRowRef.current) {
      return;
    }

    const offsetFromScrollerElement =
      window.scrollY + window.innerHeight - (ref.current?.offsetTop ?? 0);
    const speed = 0.6;

    const scrollXPos = offsetFromScrollerElement * speed;

    if (scrollXPos < 0 || scrollXPos > 1000) {
      return;
    }

    firstRowRef.current.style.transform = `translateX(${-750 + scrollXPos}px)`;
    secondRowRef.current.style.transform = `translateX(${
      (-800 + scrollXPos) * 0.8
    }px)`;
    thirdRowRef.current.style.transform = `translateX(${
      -550 + scrollXPos * 0.6
    }px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {
    container: { ref },
    firstRow: {
      children: firstRow,
      ref: firstRowRef,
    },
    secondRow: {
      children: secondRow,
      ref: secondRowRef,
    },
    thirdRow: {
      children: thirdRow,
      ref: thirdRowRef,
    },
    ref,
  };
}
