import React from "react";

function Search() {
  const val = "asd";

  const onClick = () => {};

  return (
    <div className="search-bar">
      <div className="input-container">
        <input
          type="search"
          id="gif-search"
          aria-label="Search GIFs"
          value={val}
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
