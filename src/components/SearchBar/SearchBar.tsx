import React, { useState, useContext, useCallback, useRef } from "react";

// Contexts
import { AppContext } from "../../contexts/App";

// Helpers
import { debounce } from "../../helpers";

function Search() {
  const [state, setState] = useContext<any>(AppContext);
  const [term, setTerm] = useState(state.query);
  const DEBOUNCE_TIME = 500;

  const delayedQuery = useRef(
    debounce(
      (q: string) => {
        setState({
          query: q,
        });
      },
      DEBOUNCE_TIME,
      false
    )
  ).current;

  const search = useCallback(() => {
    setState({
      query: term,
    });
  }, [setState, term]);

  const onChange = useCallback(
    (event) => {
      const val = event.target.value.trim();
      setTerm(val);
      delayedQuery(val);
    },
    [delayedQuery]
  );

  return (
    <div className="search-bar">
      <div className="input-container">
        <input
          type="search"
          id="gif-search"
          aria-label="Search GIFs"
          value={term}
          onChange={onChange}
          placeholder="Search GIFs"
        ></input>
        <button className="action btn" onClick={search}>
          Go
        </button>
      </div>
    </div>
  );
}

export default Search;
