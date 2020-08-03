import { GIFDatum } from "../defs/interfaces";

export function getNoOfCols(windowSize: number) {
  if (windowSize < 500) return 2;
  else if (windowSize < 700) return 3;
  else return Math.floor(windowSize / 250);
}

interface IGenerateProps {
  data: GIFDatum[];
  screenWidth: number;
  cols: number;
  highRes?: boolean;
}
export function generateCols({
  data,
  screenWidth,
  cols,
  highRes = false,
}: IGenerateProps) {
  const gifAttr = highRes ? "original" : "fixed_width";
  const stillAttr = highRes ? "original_still" : "fixed_width_still";

  const items: Array<any> = [...new Array(cols)].map(() => []); // images array
  const heights: Array<number> = new Array(cols).fill(0); // maintain heights of each column

  for (let i = 0; i < data.length; i++) {
    const image = data[i];
    const selectCol = heights.indexOf(Math.min(...heights));
    const { height, width } = image.images[gifAttr];

    //   Get new height with ratio
    const heightWithRatio =
      (parseInt(height) * screenWidth) / cols / parseInt(width);

    //   Update height
    heights[selectCol] += heightWithRatio;

    //   Add image on to column
    items[selectCol].push({
      gif: image.images[gifAttr],
      still: image.images[stillAttr],
      height: heightWithRatio,
      title: image.title,
    });
  }

  return { items, heights };
}
