import React from "react";
import cx from "classnames";
import { BrowserRouter } from "react-router-dom";
import RouterContainer from "./routes";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

import { withRouter } from "react-router";

// Hooks
import {
  useScrollListener,
  SCROLL_UP,
  SCROLL_DOWN,
} from "./hooks/useScrollListener";

// Contexts
import { AppProvider } from "./contexts/App";

const BASE_URL = process.env.PUBLIC_URL;

export const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

export default function () {
  const { scrollDir, lastScroll } = useScrollListener({
    initialDirection: SCROLL_DOWN,
    thresholdPixels: 50,
    off: false,
  });

  const showHeader = scrollDir === SCROLL_UP && lastScroll > 100;

  return (
    <BrowserRouter basename={BASE_URL}>
      <AppProvider>
        <div
          className={cx("header", {
            fixed: showHeader,
          })}
        >
          <SearchBar />
          <Nav className={cx({})} />
        </div>
        <div
          className={cx("gif-container", {
            "container-padding": showHeader,
          })}
        >
          <RouterContainer />
          {/* <LocationDisplay /> */}
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
