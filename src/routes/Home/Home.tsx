import React, { useEffect, useState, useCallback } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { GIFDatum } from "../../defs/interfaces";

const GIPHY_KEY = "dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk";
const gf = new GiphyFetch(GIPHY_KEY);

interface IProps {
  query: string;
}

function Home({ query }: IProps) {
  const [gifs, setGifs] = useState([]);
  const fetchGifs = useCallback(
    (offset: number) => {
      return gf.search(query, { offset, limit: 100 });
    },
    [query]
  );

  useEffect(() => {
    fetchGifs(10).then((res: any) => {
      const data = res.data;
      setGifs(data);
    });
  }, [fetchGifs]);
  return (
    <div className="gif-items">
      {gifs.map((gif: GIFDatum, key) => (
        <img
          className="gif-item"
          key={key}
          src={gif.images.preview_gif.url}
          alt={gif.title}
        />
      ))}
    </div>
  );
}

export default React.memo(Home);
