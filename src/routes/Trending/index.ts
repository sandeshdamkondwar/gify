import AsyncComponent from "../../helpers/AsyncComponent";

const Trending = AsyncComponent(() =>
  import(/* webpackChunkName: "Trending" */ "./Trending").then(
    (module) => module.default
  )
);

export default Trending;
