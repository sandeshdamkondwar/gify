import React, { useEffect, useState, useRef } from "react";

// Helpers
import { debounce, generateCols, getNoOfCols } from "../../helpers/";

// Hooks
import { useInifiniteScroller } from "../../hooks/useInfiniteScroller";

// Defs
import { IGifItem } from "../../defs/interfaces";

// Components
import GIFPlayer from "../../components/GIFPlayer";
import loader from "../../images/loader.svg";
import CONFIG from "../../project.config";

const getImagesLimit = (windowWidth: number) => {
  return windowWidth < 500
    ? CONFIG.IMAGE_LOADING_LIMIT
    : CONFIG.IMAGE_LOADING_LIMIT_DESKTOP;
};

function GIFContainer({
  fetchGifs,
}: {
  fetchGifs: (offset: number, limit: number) => Promise<any>;
}) {
  const [cols, setCols] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const [colHeights, setColHeights] = useState<number[]>([]);
  const { fetch, setFetching } = useInifiniteScroller({
    scollThreshold: CONFIG.SCROLL_LISTENER_THRESHOLD,
    bottomThreshold: CONFIG.LOADER_BOTTOM_THRESHOLD,
  });

  const delayedLoading = useRef(
    debounce(
      () => {
        const offsetLimit = getImagesLimit(window.innerWidth);
        // Updating offset will take care of fetching data with new offset
        setOffset((offset) => {
          return offset + offsetLimit + 1;
        });
      },
      CONFIG.LOADER_DEBOUNCE_TIME_IN_MS,
      false
    )
  ).current;

  useEffect(() => {
    const windowWidth = window.innerWidth;

    const offsetLimit = getImagesLimit(windowWidth);
    fetchGifs(offset, offsetLimit).then((res: any) => {
      let { items, heights } = generateCols({
        data: res.data instanceof Array ? res.data : [res.data],
        screenWidth: windowWidth,
        cols: getNoOfCols(windowWidth),
      });

      // Merge heights
      const mergedHeights =
        colHeights.length === 0
          ? colHeights.map((colHeight, idx) => colHeight + heights[idx])
          : heights;

      setColHeights(mergedHeights);

      // Merge with old result
      items = items || [];
      const mergedCols = cols.length
        ? cols.map((col, idx) => [...cols[idx], ...items[idx]])
        : items;

      setCols(mergedCols);
      setFetching(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGifs, offset]);

  if (fetch && cols.length > 0) {
    delayedLoading();
  }

  const imageContainerHeight = Math.max(...colHeights);

  return (
    <div className="gif-items-container">
      <div
        className="gif-items-cols"
        style={{ height: `${imageContainerHeight}px` }}
      >
        {cols.map((colItems: Array<any>, key: number) => {
          return (
            <div key={key} className="gif-items-col">
              {colItems.map((colItem: IGifItem, itemKey: number) => (
                <GIFPlayer
                  className="gif-item"
                  key={itemKey}
                  gif={colItem.gif.url}
                  still={colItem.still.url}
                  title={colItem.title}
                  height={colItem.height}
                />
              ))}
            </div>
          );
        })}
      </div>
      {fetch && <img src={loader} className="loader-image" alt="loader" />}
    </div>
  );
}

export default React.memo(GIFContainer);
