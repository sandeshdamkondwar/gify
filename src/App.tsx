import React from "react";
import cx from "classnames";
import { BrowserRouter } from "react-router-dom";
import RouterContainer from "./routes";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

import { withRouter } from "react-router";

// Hooks
import {
  useScrollDirection,
  SCROLL_UP,
  SCROLL_DOWN,
} from "./hooks/useScrollDirection";

// Contexts
import { AppProvider } from "./contexts/App";

const BASE_URL = process.env.PUBLIC_URL;

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  const { scrollDir, lastScroll } = useScrollDirection({
    initialDirection: SCROLL_DOWN,
    thresholdPixels: 50,
    off: false,
  });

  const showHeader = scrollDir === SCROLL_UP && lastScroll > 100;

  return (
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
  );
}

export default () => (
  <BrowserRouter basename={BASE_URL}>
    <App />
  </BrowserRouter>
);
export { LocationDisplay, App };
