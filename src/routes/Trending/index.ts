import AsyncComponent from "../../helpers/AsyncComponent";

const Trending = AsyncComponent(() =>
  import("./Trending").then((module) => module.default)
);

export default Trending;
