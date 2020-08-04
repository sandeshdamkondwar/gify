// app.test.js
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppWithRouter, { LocationDisplay, App as AppWithoutRouter } from "./App";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <AppWithoutRouter />
    </Router>
  );

  expect(getByText(/trending/i)).toBeInTheDocument();
});

it("renders without crashing", () => {
  render(<AppWithRouter />);
});

test("rendering a component that uses withRouter", () => {
  const history = createMemoryHistory();
  const route = "/random";
  history.push(route);
  const { getByTestId } = render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  );
  expect(getByTestId("location-display")).toHaveTextContent(route);
});
