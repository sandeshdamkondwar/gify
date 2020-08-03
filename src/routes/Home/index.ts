import AsyncComponent from "../../helpers/AsyncComponent";

const Home = AsyncComponent(() =>
  import("./Home").then((module) => module.default)
);

export default Home;
