import React from "react";

// import colors from "./colors";

import { Link } from "@reach/router";
import { css } from "@emotion/core";

function NavBar() {
  return (
    <header
      css={css`
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
    </header>
  );
}

export default NavBar;
