import { useCallback, useEffect, useState } from "react";

export function useThresholdScroller({ threshold = 150 } = {}) {
  const [userIsScrolled, setUserIsScrolled] = useState(false);

  const listenScrollEvent = useCallback(() => {
    if (window.scrollY < threshold) {
      setUserIsScrolled(false);
    } else if (window.scrollY >= threshold) {
      setUserIsScrolled(true);
    }
  }, [threshold]);

  useEffect(() => {
    if (window.scrollY > threshold) {
      setUserIsScrolled(true);
    }

    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent, threshold]);

  return userIsScrolled;
}
