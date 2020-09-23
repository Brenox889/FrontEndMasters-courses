import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import Details from "./Details";
import SearchParams from "./SearchParams";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        {/* <Suspense fallback={<h1>loading route...</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </Provider>
  );
};

export default App;
