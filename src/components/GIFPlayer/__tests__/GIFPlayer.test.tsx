import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GIFPlayer from "../GIFPlayer";

const TestComponent = (
  <GIFPlayer
    gif="https://media0.giphy.com/media/13dPffliPA4qbTTb1m/200w.gif?cid=9a7f325649d1c3adcb43a797139887d707ab1f9bc10642d2&rid=200w.gif"
    still="https://media0.giphy.com/media/13dPffliPA4qbTTb1m/200w.gif?cid=9a7f325649d1c3adcb43a797139887d707ab1f9bc10642d2&rid=200w.gif"
    height={266}
    title="test image"
  />
);

// Snapshot test cases
it("matches the snapshot", () => {
  const { baseElement } = render(TestComponent);
  expect(baseElement).toMatchSnapshot();
});
