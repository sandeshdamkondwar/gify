import React from "react";
import Nav from "../Nav";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <div className="header">
      <SearchBar />
      <Nav />
    </div>
  );
}

export default React.memo(Header);
