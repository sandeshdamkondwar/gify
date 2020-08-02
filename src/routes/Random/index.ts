import AsyncComponent from "../../helpers/AsyncComponent";

const Random = AsyncComponent(() =>
  import(/* webpackChunkName: "Random" */ "./Random").then(
    (module) => module.default
  )
);

export default Random;
