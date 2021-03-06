import { useState, useEffect } from "react";

export const SCROLL_UP = "up";
export const SCROLL_DOWN = "down";

interface IProps {
  initialDirection?: string;
  thresholdPixels: number;
  off: boolean;
}

export const useScrollListener = ({
  initialDirection,
  thresholdPixels,
  off,
}: IProps) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);
  const [lastScroll, setLastScroll] = useState(0);
  const [reqAnimationFrameId, setReqAnimationFrameId] = useState(0);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
      setLastScroll(lastScrollY);
    };

    const onScroll = () => {
      if (!ticking) {
        setReqAnimationFrameId(window.requestAnimationFrame(updateScrollDir));
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener("scroll", onScroll)
      : setScrollDir(initialDirection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(reqAnimationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrollDir, lastScroll };
};
