import React from "react";
import cx from "classnames";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

// Hooks
import {
  useScrollDirection,
  SCROLL_UP,
  SCROLL_DOWN,
} from "./hooks/useScrollDirection";

const BASE_URL = process.env.PUBLIC_URL;

function App() {
  const { scrollDir, lastScroll } = useScrollDirection({
    initialDirection: SCROLL_DOWN,
    thresholdPixels: 50,
    off: false,
  });

  const showHeader = scrollDir === SCROLL_UP && lastScroll > 100;

  return (
    <BrowserRouter basename={BASE_URL}>
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
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
