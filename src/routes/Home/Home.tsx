import React, { useEffect, useState, useCallback } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// Helpers
import { generateCols, getNoOfCols } from "../../helpers/utils";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";

// Defs
import { IGifItem } from "../../defs/interfaces";

// Components
import GIFPlayer from "../../components/GIFPlayer";

const GIPHY_KEY = "dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk";
const gf = new GiphyFetch(GIPHY_KEY);

interface IProps {
  query: string;
}

function Home({ query }: IProps) {
  const [cols, setCols] = useState<any[]>([]);
  const windowSize = useWindowSize();
  const [height, setHeight] = useState(0);
  const fetchGifs = useCallback(
    (offset: number) => {
      return gf.search(query, { offset, limit: 10 });
    },
    [query]
  );

  useEffect(() => {
    if (windowSize.width > 0) {
      fetchGifs(10).then((res: any) => {
        const { items, heights } = generateCols(
          res.data,
          windowSize.width,
          getNoOfCols(windowSize.width)
        );
        setHeight(Math.max(...heights));
        setCols(items);
      });
    }
  }, [fetchGifs, windowSize]);

  return (
    <div className="gif-items-cols" style={{ height }}>
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
  );
}

export default React.memo(Home);
