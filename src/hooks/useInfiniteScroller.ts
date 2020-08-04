import { useState, useEffect } from "react";

interface IProps {
  thresholdPixels: number;
}

export const useInifiniteScroller = ({ thresholdPixels }: IProps) => {
  const [lastScroll, setLastScroll] = useState(0);
  const [reqAnimationFrameId, setReqAnimationFrameId] = useState(0);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollPosition = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
      setLastScroll(lastScrollY);
    };

    const onScroll = () => {
      if (!ticking) {
        setReqAnimationFrameId(
          window.requestAnimationFrame(updateScrollPosition)
        );
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(reqAnimationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { lastScroll };
};
