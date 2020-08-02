import React from "react";
import Nav from "../Nav";
import SearchBar from "../SearchBar";

interface IProps {
  query: string;
}

function Header(props: IProps) {
  const query = props.query;
  return (
    <div className="header">
      <SearchBar query={query} />
      <Nav />
    </div>
  );
}

export default React.memo(Header);
