import React, { useState, useContext, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";

// Contexts
import { AppContext } from "../../contexts/App";

// Helpers
import { debounce } from "../../helpers";

const HOME_PAGE_URL = process.env.PUBLIC_URL + "/";

function Search() {
  const history = useHistory();
  const [state, setState] = useContext<any>(AppContext);
  const [term, setTerm] = useState(state.query);
  const DEBOUNCE_TIME = 500;

  const delayedQuery = useRef(
    debounce(
      (q: string) => {
        setState({
          query: q,
        });

        // If not on homepage redirect to homepage
        if (HOME_PAGE_URL !== window.location.pathname) {
          history.push(HOME_PAGE_URL);
        }
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
