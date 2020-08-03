import AsyncComponent from "../../helpers/AsyncComponent";

const Home = AsyncComponent(() =>
  import(/* webpackChunkName: "Home.[hash]" */ "./Home").then(
    (module) => module.default
  )
);

export default Home;
