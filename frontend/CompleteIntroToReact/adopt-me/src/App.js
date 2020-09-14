import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopte Me!</Link>
        </header>
        <SearchParams path="/" />
        <SomeOtherRoute path="/details/1" />
        <Details path="/details/:id" />
      </div>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
