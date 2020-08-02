import React from "react";

interface IProps {
  query: string;
}

function Search({ query }: IProps) {
  const onClick = () => {};

  return (
    <div className="search-bar">
      <div className="input-container">
        <input
          type="search"
          id="gif-search"
          aria-label="Search GIFs"
          value={query}
          placeholder="Search GIFs"
        ></input>
        <button className="action" onClick={onClick}>
          Go
        </button>
      </div>
    </div>
  );
}

export default Search;
