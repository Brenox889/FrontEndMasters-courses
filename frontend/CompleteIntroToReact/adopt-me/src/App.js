import React from "react";
import ReactDOM from "react-dom";

import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement(
  //   "div",
  //   { id: "something-important" },
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   [
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Chugar",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //   ]
  // );

  return (
    <div>
      <h1>Adopte Me!</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
