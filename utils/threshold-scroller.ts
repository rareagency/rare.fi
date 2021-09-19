import { useEffect, useState } from "react";

export function useThresholdScroller({ threshold = 150 } = {}) {
  const [userIsScrolled, setUserIsScrolled] = useState(false);

  function listenScrollEvent() {
    if (window.scrollY < threshold) {
      setUserIsScrolled(false);
    } else if (window.scrollY >= threshold) {
      setUserIsScrolled(true);
    }
  }

  useEffect(() => {
    if (window.scrollY > threshold) {
      setUserIsScrolled(true);
    }

    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return userIsScrolled;
}
