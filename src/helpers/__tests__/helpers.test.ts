import { debounce, getNoOfCols } from "..";
import * as MOCK_DATA from "./mock.json";
import { generateCols } from "../utils";

jest.useFakeTimers();

describe("debounce", () => {
  let func: jest.Mock;
  let debouncedFunc: Function;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  it("execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    // fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});

describe("GIF col generator", () => {
  it("Window size < 500 should have 2 cols", () => {
    expect(getNoOfCols(499)).toBe(2);
  });

  it("Window size 500 should have three cols", () => {
    expect(getNoOfCols(500)).toBe(3);
  });

  it("Grid container height should be as expected", () => {
    let res = generateCols({ data: MOCK_DATA.data, screenWidth: 400, cols: 2 });
    expect(res.heights.toString()).toBe("443,442");
  });
});
