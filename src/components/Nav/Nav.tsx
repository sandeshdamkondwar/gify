import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

function Nav(props: { className?: string }) {
  return (
    <div className={cx("nav", props.className)}>
      <NavLink
        className="nav-item ripple"
        exact
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className="nav-item ripple"
        exact
        activeClassName="active"
        to="/trending"
      >
        Trending
      </NavLink>

      <NavLink
        className="nav-item ripple"
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
