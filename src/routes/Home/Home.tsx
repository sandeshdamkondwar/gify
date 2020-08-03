import React, { useCallback, useContext } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// Components
import GIFContainer from "../../components/GIFContainer";

// Contexts
import { AppContext } from "../../contexts/App";

const GIPHY_KEY = "dLTulzVpNZqXjYVV7bCY7SAW2cpASWSk";
const gf = new GiphyFetch(GIPHY_KEY);

function Home() {
  const [state] = useContext<any>(AppContext);
  const fetchGifs = useCallback(
    (pageOffset: number) => {
      return gf.search(state.query, { offset: pageOffset, limit: 100 });
    },
    [state.query]
  );

  return (
    <div>
      {state.query && <h3 className="page-heading">Search Result...</h3>}
      <GIFContainer fetchGifs={fetchGifs} />
    </div>
  );
}

export default React.memo(Home);
