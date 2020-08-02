import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { GIFResponse, GIFDatum } from "../../defs/interfaces";

const gf = new GiphyFetch("dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk");

interface IProps {
  query: string;
}

function Home({ query }: IProps) {
  const [gifs, setGifs] = useState([]);
  const fetchGifs = (offset: number) =>
    gf.search(query, { offset, limit: 100 });

  useEffect(() => {
    fetchGifs(10).then((res: any) => {
      const data = res.data;
      setGifs(data);
    });
  }, []);
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
