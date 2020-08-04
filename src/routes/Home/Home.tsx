import React, { useCallback, useContext } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// Components
import GIFContainer from "../../components/GIFContainer";

// Contexts
import { AppContext } from "../../contexts/App";

const GIPHY_KEY = process.env.REACT_APP_GIPHY_ACCESS_KEY || "";
const gf = new GiphyFetch(GIPHY_KEY);

function Home() {
  const [state] = useContext<any>(AppContext);
  const fetchGifs = useCallback(
    (pageOffset: number, limit: number) => {
      return gf.search(state.query, {
        offset: pageOffset,
        limit: limit,
      });
    },
    [state.query]
  );

  const isQuery = !!state.query;

  if (isQuery) {
    return (
      <div>
        <h3 className="page-heading">Search Result...</h3>
        <GIFContainer fetchGifs={fetchGifs} />
      </div>
    );
  }
  return <h3 className="page-heading-center">Search Your GIF Above...</h3>;
}

export default React.memo(Home);
