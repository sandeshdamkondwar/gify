import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "@testing-library/react";

import { screen } from "@testing-library/dom";

import GIFContainer from "../GIFContainer";
import * as MOCK_DATA from "./mock.json";

test("Fetch makes an API call and displays the data", async () => {
  const fetchGifs = jest.fn((offset: number) => Promise.resolve(MOCK_DATA));

  await act(async () => {
    const { waitForNextUpdate } = renderHook(() => (
      <GIFContainer fetchGifs={fetchGifs} />
    ));

    await waitForNextUpdate({ timeout: 5000 });

    const items = screen.getAllByTestId("gif-image");
    expect(items).toHaveLength(10);
  });
});
