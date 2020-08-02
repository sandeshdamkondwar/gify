import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/trending">
          Trending
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/random">
          Random
        </NavLink>
      </li>
    </ul>
  );
}

export default React.memo(Header);
