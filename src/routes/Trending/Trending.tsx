import React, { useCallback } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// Components
import GIFContainer from "../../components/GIFContainer";

const GIPHY_KEY = "dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk";
const gf = new GiphyFetch(GIPHY_KEY);

function Trending() {
  const fetchGifs = useCallback((pageOffset: number, limit: number) => {
    return gf.trending({ offset: pageOffset, limit: limit });
  }, []);

  return (
    <div>
      <h3 className="page-heading">Trending...</h3>
      <GIFContainer fetchGifs={fetchGifs} />
    </div>
  );
}

export default React.memo(Trending);
