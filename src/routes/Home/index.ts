import AsyncComponent from "../../helpers/AsyncComponent";

const Home = AsyncComponent(() =>
  import(/* webpackChunkName: "Home" */ "./Home").then(
    (module) => module.default
  )
);

export default Home;
