import React, { useState, lazy } from "react";

import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
// import __ from "lodash";
// import moment from "moment";

const Details = lazy(() => import("./Details"));
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        {/* <Suspense fallback={<h1>loading route...</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
