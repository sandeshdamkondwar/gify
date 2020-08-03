import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

const BASE_URL = process.env.PUBLIC_URL;

function App() {
  const term = "cry";
  return (
    <BrowserRouter basename={BASE_URL}>
      <div className="header">
        <SearchBar query={term} />
        <Nav />
      </div>
      <div className="gif-container">
        <Router query={term} />
      </div>
    </BrowserRouter>
  );
}

export default App;
