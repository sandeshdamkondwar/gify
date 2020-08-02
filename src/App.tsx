import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Router from "./routes";

const BASE_URL = process.env.PUBLIC_URL;

function App() {
  const term = "cry";
  return (
    <BrowserRouter basename={BASE_URL}>
      <Header query={term} />
      <Router query={term} />
    </BrowserRouter>
  );
}

export default App;
