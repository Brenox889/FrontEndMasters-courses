import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopte Me!</h1>
        <SearchParams path="/" />
        <SomeOtherRoute path="/details/1" />
        <Details path="/details/:id" />
      </div>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
