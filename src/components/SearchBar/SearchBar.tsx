import React, { useState, useContext, useCallback } from "react";

// Contexts
import { AppContext } from "../../contexts/App";

function Search() {
  const [state, setState] = useContext<any>(AppContext);
  const [term, setTerm] = useState(state.query || "");

  const onChange = (event: any) => {
    const val = event.target.value;
    setTerm(val);
    search();
  };

  const search = useCallback(() => {
    setState({
      query: term,
    });
  }, [setState, term]);

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
