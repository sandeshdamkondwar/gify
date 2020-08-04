import { useState, useEffect } from "react";

interface IProps {
  scollThreshold: number;
  bottomThreshold: number;
}

export const useInifiniteScroller = ({
  scollThreshold,
  bottomThreshold,
}: IProps) => {
  const [fetching, setFetching] = useState(false);
  const [reqAnimationFrameId, setReqAnimationFrameId] = useState(0);

  useEffect(() => {
    const threshold = scollThreshold || 0;
    let { pageYOffset, innerHeight } = window;
    let ticking = false;

    const updateScrollPosition = () => {
      const scrollY = window.pageYOffset;
      const totalHeight = document.body.clientHeight;

      if (Math.abs(scrollY - pageYOffset) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      pageYOffset = scrollY > 0 ? scrollY : 0;
      ticking = false;

      if (!fetching) {
        const clientBottomPosition = scrollY + innerHeight;
        const reachedDown =
          totalHeight - clientBottomPosition < bottomThreshold;
        if (reachedDown) {
          setFetching(true);
        } else {
          setFetching(false);
        }
      }
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

  return {
    fetch: fetching,
    setFetching,
  };
};
