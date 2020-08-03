import React, { useCallback, useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// Components
import GIFPlayer from "../../components/GIFPlayer";

// import { GIFDatum} from "../../defs/interfaces"

const GIPHY_KEY = "dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk";
const gf = new GiphyFetch(GIPHY_KEY);

function Random() {
  const [item, setItem] = useState<any>(null);
  const [offset, setOffset] = useState<number>(0);
  const fetchGif = useCallback(() => {
    return gf.random({ offset: offset, limit: 1 }).then((res: any) => {
      const imageItem = res.data.images.fixed_width;

      setItem({
        gif: imageItem.url,
        still: imageItem.url,
        title: res.data.title,
        height: imageItem.height,
        width: imageItem.width,
      });
    });
  }, [offset]);

  useEffect(() => {
    fetchGif();
  }, [fetchGif]);

  const loadNext = useCallback(() => {
    setOffset(offset + 1);
  }, [offset]);

  return (
    <div className="random-container">
      {item ? (
        <GIFPlayer
          className="gif-item"
          gif={item.gif}
          still={item.still}
          title={item.title}
          single={true}
          height={item.height}
          autoPlay={true}
        />
      ) : (
        <div className="gif-loading">...Loading</div>
      )}
      <div className="load-new">
        <button className="btn action" onClick={loadNext}>
          Another Random GIF
        </button>
      </div>
    </div>
  );
}

export default React.memo(Random);
