import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <NavLink
        className="nav-item button"
        exact
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className="nav-item button"
        exact
        activeClassName="active"
        to="/trending"
      >
        Trending
      </NavLink>

      <NavLink
        className="nav-item button"
        exact
        activeClassName="active"
        to="/random"
      >
        Random
      </NavLink>
    </div>
  );
}

export default React.memo(Nav);
