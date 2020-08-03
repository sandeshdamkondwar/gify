import React, { useEffect, useState } from "react";

// Helpers
import { generateCols, getNoOfCols } from "../../helpers/utils";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";

// Defs
import { IGifItem } from "../../defs/interfaces";

// Components
import GIFPlayer from "../../components/GIFPlayer";

function GIFContainer({
  fetchGifs,
}: {
  fetchGifs: (offset: number) => Promise<any>;
}) {
  const [cols, setCols] = useState<any[]>([]);
  const [offset] = useState<number>(0);
  const windowSize = useWindowSize();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (windowSize.width > 0) {
      fetchGifs(offset).then((res: any) => {
        const { items, heights } = generateCols({
          data: res.data instanceof Array ? res.data : [res.data],
          screenWidth: windowSize.width,
          cols: getNoOfCols(windowSize.width),
        });
        setHeight(Math.max(...heights));
        setCols(items);
      });
    }
  }, [fetchGifs, offset, windowSize]);

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

export default React.memo(GIFContainer);
