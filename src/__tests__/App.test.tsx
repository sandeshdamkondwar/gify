import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import AppWithRouter from "../App";

it("renders without crashing", () => {
  render(<AppWithRouter />);
});
