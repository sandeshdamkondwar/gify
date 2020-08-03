import AsyncComponent from "../../helpers/AsyncComponent";

const Random = AsyncComponent(() =>
  import("./Random").then((module) => module.default)
);

export default Random;
